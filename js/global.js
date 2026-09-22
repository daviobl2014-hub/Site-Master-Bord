/* ================================================================
   GLOBAL.JS — Master Bord
   JavaScript compartilhado entre TODAS as páginas.
   Carregado com <script src="js/global.js"></script>

   O que tem aqui:
   1. Cabeçalho: adiciona a classe .cabecalho--rolado ao rolar a página
   2. Modal WhatsApp: injetado em runtime, abre ao clicar em
      qualquer elemento com a classe .js-modal-whatsapp
   3. Altura do cabeçalho na variável CSS --altura-cabecalho

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
   2. MODAL WHATSAPP
   Injeta o markup uma vez e prende o botão "WhatsApp direto"
   (qualquer elemento com .js-wa-modal) para abrir o modal.
   Cada opção é um <a target="_blank"> — ao clicar, abre o
   WhatsApp em nova aba e fecha o modal.
   ================================================================ */
(function () {
  const WA_BORDADO = '5524981190914';
  const WA_ETIQUETA = '5524992808372';
  const WA_TEXTO = encodeURIComponent(
    'Olá! Vim pelo site e gostaria de solicitar um orçamento gratuito.\n\nGostaria de conversar com um consultor para entender a melhor solução para a minha necessidade.'
  );

  const modalHTML = `
    <div
      class="modal-whatsapp"
      id="waModal"
      aria-hidden="true"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waModalTitle"
    >
      <div class="modal-whatsapp__fundo" data-wa-close></div>
      <div class="modal-whatsapp__cartao">
        <button
          class="modal-whatsapp__fechar"
          type="button"
          data-wa-close
          aria-label="Fechar"
        >×</button>
        <div class="rotulo">CANAL · ATENDIMENTO DIRETO</div>
        <h3 id="waModalTitle" class="modal-whatsapp__titulo">
          Com qual setor você<br />quer falar<span class="destaque--vinho">?</span>
        </h3>
        <p class="modal-whatsapp__sub">
          Selecione abaixo e abrimos o WhatsApp pra você em uma nova aba.
        </p>
        <div class="modal-whatsapp__opcoes">
          <a
            class="modal-whatsapp__opcao modal-whatsapp__opcao--vinho"
            href="https://wa.me/${WA_BORDADO}?text=${WA_TEXTO}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="modal-whatsapp__opcao-icone"><span class="icone icone--whatsapp" aria-hidden="true"></span></div>
            <div class="modal-whatsapp__opcao-corpo">
              <div class="modal-whatsapp__opcao-rotulo">Bordado</div>
              <div class="modal-whatsapp__opcao-numero">(24) 98119-0914</div>
            </div>
            <div class="modal-whatsapp__opcao-seta">→</div>
          </a>
          <a
            class="modal-whatsapp__opcao modal-whatsapp__opcao--azul"
            href="https://wa.me/${WA_ETIQUETA}?text=${WA_TEXTO}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="modal-whatsapp__opcao-icone"><span class="icone icone--whatsapp" aria-hidden="true"></span></div>
            <div class="modal-whatsapp__opcao-corpo">
              <div class="modal-whatsapp__opcao-rotulo">Etiqueta</div>
              <div class="modal-whatsapp__opcao-numero">(24) 99280-8372</div>
            </div>
            <div class="modal-whatsapp__opcao-seta">→</div>
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
    document.querySelectorAll('.js-modal-whatsapp').forEach(function (el) {
      el.addEventListener('click', open);
    });

    // Fechadores: backdrop, botão X
    modal.querySelectorAll('[data-wa-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });

    // Ao clicar numa opção: o link já tem target="_blank",
    // fechamos o modal logo em seguida
    modal.querySelectorAll('.modal-whatsapp__opcao').forEach(function (el) {
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

/* ================================================================
   3. ALTURA DO CABEÇALHO
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
      cabecalho.offsetHeight + 'px'
    );
  }

  medir();
  window.addEventListener('load', medir);
  window.addEventListener('resize', medir);
})();
