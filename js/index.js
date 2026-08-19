/* ================================================================
   INDEX.JS — Master Bord (página home)
   Scripts específicos da página inicial (index.html).

   Conteúdo:
   1. Carrossel do hero (automático com fade + controles manuais)
   ================================================================ */

/* ================================================================
   1. CARROSSEL DO HERO
   - Troca automática a cada 5 segundos
   - Clique nas bolinhas pra ir direto num slide específico
   - Pausa quando o mouse fica em cima
   - Retoma quando o mouse sai
   ================================================================ */

(function () {
  // Pega os elementos do HTML
  const carousel = document.getElementById('mbCarousel');
  if (!carousel) return; // Se não tem carrossel, sai (evita erro em outras páginas)

  const slides = carousel.querySelectorAll('.carousel-slide');
  // Dots agora vivem FORA do .carousel — busca pelo container próprio (#mbCarouselDots)
  // pra não acoplar com o DOM do carrossel (seguro pra futuros re-arranjos do hero).
  const dotsContainer = document.getElementById('mbCarouselDots');
  const dots = dotsContainer
    ? dotsContainer.querySelectorAll('.carousel-dot')
    : document.querySelectorAll('.carousel-dot');

  // Configurações
  const INTERVALO = 8000; // 8 segundos — tempo ideal pro Ken Burns
  let slideAtual = 0;
  let timerAutomatico = null;

  /**
   * Troca pro slide de índice N.
   * Remove .active de todos e adiciona só no slide certo.
   */
  function irParaSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === n);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n);
    });
    slideAtual = n;
  }

  /**
   * Avança pro próximo slide (ciclicamente — volta pro 0 depois do último).
   */
  function proximoSlide() {
    const proximo = (slideAtual + 1) % slides.length;
    irParaSlide(proximo);
  }

  /**
   * Liga a troca automática.
   */
  function iniciarAutomatico() {
    pararAutomatico(); // Garante que não tem outro timer rodando
    timerAutomatico = setInterval(proximoSlide, INTERVALO);
  }

  /**
   * Desliga a troca automática.
   */
  function pararAutomatico() {
    if (timerAutomatico) {
      clearInterval(timerAutomatico);
      timerAutomatico = null;
    }
  }

  // Clique nas bolinhas → vai pro slide clicado e reinicia o timer
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const n = parseInt(dot.dataset.slide, 10);
      irParaSlide(n);
      iniciarAutomatico(); // Reinicia o timer pra dar 5s completos a partir daqui
    });
  });

  // Pausa quando o mouse fica em cima do carrossel
  carousel.addEventListener('mouseenter', pararAutomatico);
  carousel.addEventListener('mouseleave', iniciarAutomatico);

  // Começa tudo
  iniciarAutomatico();
})();

/* ================================================================
   2. GALERIA — DESATIVADA (sessão de cleanup, ~100 linhas removidas)
   Antes: JS preenchia 5 slots com banco de 15 imagens + filtros.
   Agora: imagens estão direto no HTML (5 cards .galeria-item.is-X
   com <img src> fixo) e cores via CSS modifier classes.
   Filtros (.galeria-filtros span) ficaram decorativos por enquanto.
   ================================================================ */

/* ================================================================
   3. CARROSSEL INFINITO DE LOGOS — controle preciso por JavaScript
   - Calcula a largura exata do grupo 1 de logos
   - Anima translateX usando requestAnimationFrame (suave 60fps)
   - Reset invisível: quando completa o grupo 1, volta pra 0 sem salto
   - Pausa no hover automaticamente
   ================================================================ */

(function () {
  const lista = document.querySelector('.section-logos-list');
  if (!lista) return;

  const track = document.querySelector('.section-logos-track');
  if (!track) return;

  // Configuração — VELOCIDADE em pixels por segundo
  const VELOCIDADE = 70; // 70px/s = wrap imperceptível sem ficar acelerado demais

  let posicaoAtual = 0; // Posição atual do trilho (em pixels)
  let larguraGrupo1 = 0; // Largura total do grupo 1 (calculada após DOM carregar)
  let pausado = false;
  let ultimoTimestamp = null;
  let frameId = null;

  /**
   * Calcula a largura total do GRUPO 1 (primeiros 16 logos + suas margens).
   * É essa a distância que precisa rolar antes de "resetar" pra posição 0.
   */
  function calcularLarguraGrupo1() {
    const logos = lista.querySelectorAll('.marca-logo');
    if (logos.length < 17) return 0;

    // Mede a posição X do logo 1 e do logo 17 (que é a CÓPIA do logo 1).
    // A diferença é exatamente a distância que precisamos rolar.
    const primeiroX = logos[0].getBoundingClientRect().left;
    const decimoSetimoX = logos[16].getBoundingClientRect().left;

    return decimoSetimoX - primeiroX;
  }
  /**
   * Animação — chamada a cada frame (~60fps).
   */
  function animar(timestamp) {
    if (ultimoTimestamp === null) ultimoTimestamp = timestamp;
    const delta = (timestamp - ultimoTimestamp) / 1000; // segundos desde último frame
    ultimoTimestamp = timestamp;

    if (!pausado) {
      // Move o trilho proporcionalmente ao tempo passado
      posicaoAtual += VELOCIDADE * delta;

      // RESET invisível: quando passou da largura do grupo 1, volta pra 0.
      // Como o grupo 2 é cópia idêntica do grupo 1, o usuário não percebe.
      if (posicaoAtual >= larguraGrupo1) {
        posicaoAtual -= larguraGrupo1;
      }

      lista.style.transform = `translateX(-${posicaoAtual}px)`;
    }

    frameId = requestAnimationFrame(animar);
  }

  // Pausa no hover
  track.addEventListener('mouseenter', () => {
    pausado = true;
  });
  track.addEventListener('mouseleave', () => {
    pausado = false;
  });

  /**
   * Garante que o trilho tenha logos suficientes para preencher o viewport
   * mesmo no momento exato do reset. Sem isso, em telas largas (viewport >
   * larguraGrupo1), aparece um "espaço preto" após a última logo (Rede D'or)
   * porque o trilho de 32 logos termina antes de preencher a tela.
   *
   * Solução: clona o grupo original de 16 logos quantas vezes for necessário
   * até que o trilho tenha pelo menos `larguraGrupo1 + viewportWidth` de
   * largura. Aí o reset sempre acontece com tela cheia de logos.
   */
  function garantirLogosSuficientes() {
    const viewportWidth = track.offsetWidth;
    const tamanhoNecessario = larguraGrupo1 + viewportWidth;

    while (lista.scrollWidth < tamanhoNecessario) {
      const grupoOriginal = Array.from(
        lista.querySelectorAll('.marca-logo')
      ).slice(0, 16);
      grupoOriginal.forEach((logo) => lista.appendChild(logo.cloneNode(true)));
    }
  }

  // Calcula largura quando as imagens carregarem
  // (precisa esperar pra ter o offsetWidth correto)
  function inicializar() {
    larguraGrupo1 = calcularLarguraGrupo1();
    if (larguraGrupo1 === 0) {
      // Se ainda não calculou direito, tenta de novo em 100ms
      setTimeout(inicializar, 100);
      return;
    }
    garantirLogosSuficientes();
    frameId = requestAnimationFrame(animar);
  }

  // Recalcula se a tela for redimensionada (clamp() muda o tamanho dos logos)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      larguraGrupo1 = calcularLarguraGrupo1();
      garantirLogosSuficientes();
    }, 200);
  });

  // Respeita preferência de menos animação
  const prefereSemAnimacao = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  if (prefereSemAnimacao) return; // não inicia animação

  // Aguarda o DOM e imagens carregarem antes de iniciar
  if (document.readyState === 'complete') {
    inicializar();
  } else {
    window.addEventListener('load', inicializar);
  }
})();

/* ================================================================
   3. GALERIA CIRCULAR 3D DO HERO
   - 3 abas (Etiquetas / Bordados / Patches) dispostas num círculo
   - Gira sozinha devagar, pausa no hover e quando um card recebe
     foco pelo teclado
   - Os cards do fundo perdem opacidade e param de receber clique,
     pra ninguém clicar num link que não está visível
   - Respeita prefers-reduced-motion (CSS já exibe as 3 lado a lado)
   ================================================================ */

(function () {
  const palco = document.getElementById('mbGaleria3dPalco');
  if (!palco) return; // outras páginas não têm a galeria

  const container = document.getElementById('mbGaleria3d');
  const itens = Array.prototype.slice.call(
    palco.querySelectorAll('.galeria3d-item')
  );
  if (!itens.length) return;

  const prefereSemAnimacao = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const anguloPorItem = 360 / itens.length;
  // Graus por frame a 60fps. 0.45 ≈ 27°/s: uma volta completa em ~13s,
  // com cada aba passando pela frente a cada ~4,5s.
  const VELOCIDADE = 0.45;
  let rotacao = 0;
  let pausado = false;
  let frame = null;

  // Escurece as faces laterais e define qual é clicável.
  // Usa brightness (não opacity) de propósito: face transparente deixaria
  // o fundo preto vazar pela emenda, que é justamente o que queremos evitar.
  function atualizarItens() {
    itens.forEach(function (item, i) {
      // Ângulo da face em relação a quem está olhando (0 = de frente)
      let relativo = (i * anguloPorItem + rotacao) % 360;
      if (relativo < 0) relativo += 360;
      const desvio = relativo > 180 ? 360 - relativo : relativo;

      // De frente = 1 (cor cheia), de lado = 0.35 (bem escurecida)
      const brilho = Math.max(0.35, 1 - desvio / 110);
      item.style.filter = 'brightness(' + brilho + ')';

      // Só a face de frente recebe clique/tab (faces a 60° já estão de lado)
      const naFrente = desvio < 30;
      item.style.pointerEvents = naFrente ? 'auto' : 'none';
      item.setAttribute('aria-hidden', naFrente ? 'false' : 'true');
      item.tabIndex = naFrente ? 0 : -1;
    });
  }

  function girar() {
    if (!pausado) {
      rotacao = (rotacao + VELOCIDADE) % 360;
      palco.style.transform = 'rotateY(' + rotacao + 'deg)';
      atualizarItens();
    }
    frame = requestAnimationFrame(girar);
  }

  function pausar() {
    pausado = true;
  }
  function retomar() {
    pausado = false;
  }

  if (container) {
    container.addEventListener('mouseenter', pausar);
    container.addEventListener('mouseleave', retomar);
    container.addEventListener('focusin', pausar);
    container.addEventListener('focusout', retomar);
  }

  // Não gasta frame quando a aba está em segundo plano
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (frame) cancelAnimationFrame(frame);
      frame = null;
    } else if (!frame && !prefereSemAnimacao) {
      frame = requestAnimationFrame(girar);
    }
  });

  if (prefereSemAnimacao) {
    // CSS já mostra as 3 lado a lado; garante que todas fiquem clicáveis
    itens.forEach(function (item) {
      item.style.pointerEvents = 'auto';
      item.tabIndex = 0;
      item.setAttribute('aria-hidden', 'false');
    });
    return;
  }

  atualizarItens();
  frame = requestAnimationFrame(girar);
})();
