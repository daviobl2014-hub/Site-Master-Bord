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
