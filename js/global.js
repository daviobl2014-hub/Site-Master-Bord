/* ================================================================
   GLOBAL.JS — Master Bord
   JavaScript compartilhado entre TODAS as páginas.
   Carregado com <script src="js/global.js"></script>

   O que tem aqui:
   1. Header: adiciona classe .scrolled ao rolar a página
   2. Modal WhatsApp: injetado em runtime, abre ao clicar em
      qualquer elemento com a classe .js-wa-modal

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
(function() {
  const header = document.getElementById('mbHeader');

  // Se não achou o header, não faz nada (página sem header)
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // { passive: true } = melhora performance em scroll
  window.addEventListener('scroll', onScroll, { passive: true });

  // Chamada inicial: caso a página já abra rolada (ex: voltou via histórico)
  onScroll();
})();


/* ================================================================
   2. MODAL WHATSAPP
   Injeta o markup uma vez e prende o botão "WhatsApp direto"
   (qualquer elemento com .js-wa-modal) para abrir o modal.
   Cada opção é um <a target="_blank"> — ao clicar, abre o
   WhatsApp em nova aba e fecha o modal.
   ================================================================ */
(function () {
  const WA_BORDADO = '5524981190914';
  const WA_ETIQUETA = '5524992808372';

  const modalHTML = `
    <div
      class="wa-modal"
      id="waModal"
      aria-hidden="true"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waModalTitle"
    >
      <div class="wa-modal-backdrop" data-wa-close></div>
      <div class="wa-modal-card">
        <button
          class="wa-modal-close"
          type="button"
          data-wa-close
          aria-label="Fechar"
        >×</button>
        <div class="mb-tag">CANAL · ATENDIMENTO DIRETO</div>
        <h3 id="waModalTitle" class="wa-modal-title">
          Com qual setor você<br />quer falar<span class="highlight-vinho">?</span>
        </h3>
        <p class="wa-modal-sub">
          Selecione abaixo e abrimos o WhatsApp pra você em uma nova aba.
        </p>
        <div class="wa-modal-options">
          <a
            class="wa-modal-option vinho"
            href="https://wa.me/${WA_BORDADO}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="wa-opt-icon"><i class="fab fa-whatsapp"></i></div>
            <div class="wa-opt-body">
              <div class="wa-opt-label">Bordado</div>
              <div class="wa-opt-num">(24) 98119-0914</div>
            </div>
            <div class="wa-opt-arrow">→</div>
          </a>
          <a
            class="wa-modal-option azul"
            href="https://wa.me/${WA_ETIQUETA}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="wa-opt-icon"><i class="fab fa-whatsapp"></i></div>
            <div class="wa-opt-body">
              <div class="wa-opt-label">Etiqueta</div>
              <div class="wa-opt-num">(24) 99280-8372</div>
            </div>
            <div class="wa-opt-arrow">→</div>
          </a>
        </div>
      </div>
    </div>
  `;

  function init() {
    // Injeta o modal no fim do <body>
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById('waModal');

    function open(e) {
      if (e) e.preventDefault();
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Gatilhos: qualquer elemento com .js-wa-modal abre o modal
    document.querySelectorAll('.js-wa-modal').forEach(function (el) {
      el.addEventListener('click', open);
    });

    // Fechadores: backdrop, botão X
    modal.querySelectorAll('[data-wa-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });

    // Ao clicar numa opção: o link já tem target="_blank",
    // fechamos o modal logo em seguida
    modal.querySelectorAll('.wa-modal-option').forEach(function (el) {
      el.addEventListener('click', function () {
        // pequeno atraso pra garantir que o navegador
        // dispare a abertura da nova aba antes de fechar
        setTimeout(close, 50);
      });
    });

    // ESC fecha
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
        close();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
