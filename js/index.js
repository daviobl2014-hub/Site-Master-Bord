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
