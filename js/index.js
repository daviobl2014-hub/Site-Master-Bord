/* ================================================================
   INDEX.JS — Master Bord (página home)
   Scripts específicos da página inicial (index.html).

   Conteúdo:
   1. Carrossel infinito de marcas (clientes)
   2. Galeria 3D da primeira dobra
   ================================================================ */

/* ================================================================
   1. CARROSSEL INFINITO DE MARCAS — controle preciso por JavaScript
   - Calcula a largura exata do grupo 1 de logos
   - Anima translateX usando requestAnimationFrame (suave 60fps)
   - Reset invisível: quando completa o grupo 1, volta pra 0 sem salto
   - Pausa no hover automaticamente
   ================================================================ */

(function () {
  const lista = document.querySelector('.marcas__lista');
  if (!lista) return;

  const track = document.querySelector('.marcas__trilho');
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
    const logos = lista.querySelectorAll('.marcas__item');
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
        lista.querySelectorAll('.marcas__item')
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
   2. GALERIA CIRCULAR 3D DA PRIMEIRA DOBRA
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
    palco.querySelectorAll('.galeria-3d__item')
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
