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
  const dots = carousel.querySelectorAll('.carousel-dot');

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
   2. GALERIA FILTRADA POR CATEGORIA
   - Banco de 15 imagens organizadas por categoria
   - Clique num filtro substitui as imagens dos 5 espaços
   - "Todos" mostra mistura padrão das 3 categorias
   - Transição com fade suave
   ================================================================ */

(function () {
  const grid = document.getElementById('galeriaGrid');
  if (!grid) return;

  const filtros = document.querySelectorAll('.galeria-filtros span');
  const slots = grid.querySelectorAll('.galeria-item');

  // ──────────────────────────────────────────────────────────
  // BANCO DE IMAGENS — edite aqui pra trocar/adicionar imagens
  // ──────────────────────────────────────────────────────────
  const galerias = {
    etiqueta: [
      { src: 'img/et1.jpg', titulo: 'Etiqueta 01', tag: 'ET', cor: 'azul' },
      { src: 'img/et2.jpg', titulo: 'Etiqueta 02', tag: 'ET', cor: 'azul' },
      { src: 'img/et3.jpg', titulo: 'Etiqueta 03', tag: 'ET', cor: 'azul' },
      { src: 'img/et4.jpg', titulo: 'Etiqueta 04', tag: 'ET', cor: 'azul' },
      { src: 'img/et5.jpg', titulo: 'Etiqueta 05', tag: 'ET', cor: 'azul' },
    ],
    bordado: [
      { src: 'img/br1.jpg', titulo: 'Bordado 01', tag: 'BR', cor: 'vinho' },
      { src: 'img/br2.jpg', titulo: 'Bordado 02', tag: 'BR', cor: 'vinho' },
      { src: 'img/br3.jpg', titulo: 'Bordado 03', tag: 'BR', cor: 'vinho' },
      { src: 'img/br4.jpg', titulo: 'Bordado 04', tag: 'BR', cor: 'vinho' },
      { src: 'img/br5.jpg', titulo: 'Bordado 05', tag: 'BR', cor: 'vinho' },
    ],
    laser: [
      { src: 'img/la1.jpg', titulo: 'Laser 01', tag: 'LA', cor: 'ouro' },
      { src: 'img/la2.jpg', titulo: 'Laser 02', tag: 'LA', cor: 'ouro' },
      { src: 'img/la3.jpg', titulo: 'Laser 03', tag: 'LA', cor: 'ouro' },
      { src: 'img/la4.jpg', titulo: 'Laser 04', tag: 'LA', cor: 'ouro' },
      { src: 'img/la5.jpg', titulo: 'Laser 05', tag: 'LA', cor: 'ouro' },
    ],
  };

  // Mistura padrão pra "Todos" — 2 etiquetas + 2 bordados + 1 laser
  const misturaTodos = [
    galerias.bordado[0], // slot 0 (wide tall) - bordado destaque
    galerias.etiqueta[0], // slot 1
    galerias.laser[0], // slot 2
    galerias.bordado[1], // slot 3
    galerias.etiqueta[1], // slot 4 (wide)
  ];

  // Mapa de cor → variável CSS
  const cores = {
    azul: 'var(--mb-azul)',
    vinho: 'var(--mb-vinho)',
    ouro: 'var(--mb-ouro)',
  };

  // ──────────────────────────────────────────────────────────
  // RENDERIZA UM SLOT com os dados de uma imagem
  // ──────────────────────────────────────────────────────────
  function preencherSlot(slot, imagem, indice) {
    const corCss = cores[imagem.cor];
    const corRgb =
      imagem.cor === 'azul'
        ? '74,139,214'
        : imagem.cor === 'vinho'
        ? '196,75,85'
        : '212,169,106';

    slot.innerHTML = `
        <div class="mb-image" style="height: 100%;">
          <img src="${imagem.src}" alt="${imagem.titulo}"
               style="width: 100%; height: 100%; object-fit: cover;"
               onerror="this.style.display='none'; this.parentElement.classList.add('placeholder');">
          <div class="img-gradient" style="background: linear-gradient(135deg, rgba(${corRgb},0.19), transparent 60%);"></div>
          <div class="img-pattern" style="background: repeating-linear-gradient(${
            indice * 25
          }deg, transparent 0 6px, rgba(${corRgb},0.13) 6px 7px);"></div>
          <div class="img-border" style="border-color: rgba(${corRgb},0.3);"></div>
          <div class="img-label">0${indice + 1}/05</div>
        </div>
        <div class="galeria-item-tag" style="background: ${corCss};">${
      imagem.tag
    }</div>
        <div class="galeria-item-caption">
          <div class="galeria-item-title">${imagem.titulo}</div>
          <div class="galeria-item-link" style="color: ${corCss};">VER DETALHES →</div>
        </div>
      `;
  }

  // ──────────────────────────────────────────────────────────
  // TROCA O CONTEÚDO DA GALERIA com fade
  // ──────────────────────────────────────────────────────────
  function trocarGaleria(categoria) {
    // Pega a lista de imagens conforme categoria
    let lista;
    if (categoria === 'todos') {
      lista = misturaTodos;
    } else {
      lista = galerias[categoria].slice(0, 5); // pega 5 da categoria
    }

    // Fade out
    slots.forEach((slot) => slot.classList.add('trocando'));

    // Espera 400ms (tempo da transição CSS) e troca o conteúdo
    setTimeout(() => {
      slots.forEach((slot, i) => {
        if (lista[i]) preencherSlot(slot, lista[i], i);
      });
      // Fade in
      slots.forEach((slot) => slot.classList.remove('trocando'));
    }, 400);
  }

  // ──────────────────────────────────────────────────────────
  // EVENTOS DOS FILTROS
  // ──────────────────────────────────────────────────────────
  filtros.forEach((filtro) => {
    filtro.addEventListener('click', () => {
      // Marca filtro ativo
      filtros.forEach((f) => f.classList.remove('active'));
      filtro.classList.add('active');

      // Troca a galeria
      trocarGaleria(filtro.dataset.filtro);
    });
  });

  // Inicialização: carrega "Todos" ao abrir a página
  trocarGaleria('todos');
})();

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
