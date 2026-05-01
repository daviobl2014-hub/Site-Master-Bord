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
