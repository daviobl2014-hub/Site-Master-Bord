/* ================================================================
   GLOBAL.JS — Master Bord
   JavaScript compartilhado entre TODAS as páginas.
   Carregado com <script src="js/global.js"></script>

   O que tem aqui:
   1. Cabeçalho: adiciona a classe .cabecalho--rolado ao rolar a página
   2. Altura do cabeçalho na variável CSS --altura-cabecalho

   Futuro:
   - Menu hambúrguer mobile (quando criarmos)
   - Ano dinâmico no footer
   - Tracking de analytics
   ================================================================ */

/* ================================================================
   1. HEADER SCROLL
   Muda o fundo do header pra translúcido com blur quando
   o usuário rola mais de 20 pixels pra baixo.
   ================================================================ */
(function () {
  const header = document.getElementById('mbHeader');

  // Se não achou o header, não faz nada (página sem header)
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('cabecalho--rolado');
    } else {
      header.classList.remove('cabecalho--rolado');
    }
  }

  // { passive: true } = melhora performance em scroll
  window.addEventListener('scroll', onScroll, { passive: true });

  // Chamada inicial: caso a página já abra rolada (ex: voltou via histórico)
  onScroll();
})();

/* ================================================================
   2. ALTURA DO CABEÇALHO
   Guarda a altura real do cabeçalho em --altura-cabecalho para o
   CSS poder fazer "altura da tela menos a navegação".
   Recalcula ao redimensionar (no celular a faixa de menu muda a altura).
   ================================================================ */

(function () {
  const cabecalho = document.getElementById('mbHeader');
  if (!cabecalho) return;

  function medir() {
    document.documentElement.style.setProperty(
      '--altura-cabecalho',
      cabecalho.offsetHeight + 'px',
    );
  }

  medir();
  window.addEventListener('load', medir);
  window.addEventListener('resize', medir);
})();

/* ================================================================
   3. CARROSSEL COM SETAS
   Cada clique rola exatamente 1 item (largura do item + gap).
   Desabilita a seta quando chega no começo/fim.
   ================================================================ */
(function () {
  const carrosseis = document.querySelectorAll('.carrossel');

  carrosseis.forEach(function (carrossel) {
    const trilho = carrossel.querySelector('.carrossel__trilho');
    const anterior = carrossel.querySelector('.carrossel__seta--anterior');
    const proxima = carrossel.querySelector('.carrossel__seta--proxima');
    if (!trilho || !anterior || !proxima) return;

    function passo() {
      const item = trilho.querySelector('.carrossel__item');
      const gap = parseFloat(getComputedStyle(trilho).gap) || 0;
      return item.getBoundingClientRect().width + gap;
    }

    function atualizarSetas() {
      const fim = trilho.scrollWidth - trilho.clientWidth;
      anterior.disabled = trilho.scrollLeft <= 1;
      proxima.disabled = trilho.scrollLeft >= fim - 1;
    }

    anterior.addEventListener('click', function () {
      trilho.scrollBy({ left: -passo() });
    });
    proxima.addEventListener('click', function () {
      trilho.scrollBy({ left: passo() });
    });

    trilho.addEventListener('scroll', atualizarSetas, { passive: true });
    window.addEventListener('resize', atualizarSetas);
    atualizarSetas();
  });
})();

/* ================================================================
   4. MENU CELULAR
   Abre/fecha o painel em tela inteira pelo botão hambúrguer.
   Fecha ao clicar num link, apertar Esc ou voltar pro desktop.
   ================================================================ */
(function () {
  const botao = document.querySelector('.cabecalho__hamburguer');
  const menu = document.getElementById('menuCelular');
  if (!botao || !menu) return;

  function alternar(abrir) {
    menu.classList.toggle('menu-celular--aberto', abrir);
    document.body.classList.toggle('menu-aberto', abrir);
    botao.setAttribute('aria-expanded', abrir);
    botao.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
  }

  botao.addEventListener('click', function () {
    alternar(botao.getAttribute('aria-expanded') !== 'true');
  });

  // Clicar num link fecha o menu
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      alternar(false);
    });
  });

  // Esc fecha
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') alternar(false);
  });

  // Se a tela passar de 900px com o menu aberto, fecha
  window
    .matchMedia('(min-width: 901px)')
    .addEventListener('change', function (e) {
      if (e.matches) alternar(false);
    });
})();
