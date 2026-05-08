// ==========================================
// 05 - MENU MOBILE (Hamburguer)
// Controla abertura/fechamento do menu em
// telas pequenas (≤768px). Toggle do ☰,
// fecha ao clicar fora ou em um link.
// ==========================================

// Abre ou fecha o menu principal ao clicar no ☰
function toggleMenuMobile() {
  const hamburguer = document.querySelector('.hamburguer');
  const menu = document.querySelector('.menu-principal');

  hamburguer.classList.toggle('ativo');
  menu.classList.toggle('aberto');

  // Atualiza atributo de acessibilidade (importante pra leitores de tela)
  const aberto = menu.classList.contains('aberto');
  hamburguer.setAttribute('aria-expanded', aberto);
  hamburguer.setAttribute(
    'aria-label',
    aberto ? 'Fechar menu' : 'Abrir menu'
  );
}

// Fecha o menu ao clicar em qualquer link interno
// (assim quando o usuário clica em "Sobre", o menu fecha sozinho)
document.querySelectorAll('.menu-principal a').forEach((link) => {
  link.addEventListener('click', (e) => {
    // Se o link for o "Produtos" que abre submenu, NÃO fecha o menu
    // (o próprio toggleProdutos já cuida disso)
    const ehToggleProdutos = link.getAttribute('onclick')?.includes('toggleProdutos');
    if (ehToggleProdutos) return;

    // Fecha o menu só se estiver aberto (evita bugs no desktop)
    const menu = document.querySelector('.menu-principal');
    const hamburguer = document.querySelector('.hamburguer');

    if (menu.classList.contains('aberto')) {
      menu.classList.remove('aberto');
      hamburguer.classList.remove('ativo');
      hamburguer.setAttribute('aria-expanded', 'false');
      hamburguer.setAttribute('aria-label', 'Abrir menu');
    }
  });
});

// Fecha o menu ao clicar FORA dele (em qualquer lugar da página)
document.addEventListener('click', (e) => {
  const menu = document.querySelector('.menu-principal');
  const hamburguer = document.querySelector('.hamburguer');

  // Se o menu não está aberto, nem precisa checar
  if (!menu.classList.contains('aberto')) return;

  // Se o clique foi dentro do menu ou no próprio hamburguer, não fecha
  if (menu.contains(e.target) || hamburguer.contains(e.target)) return;

  // Clicou fora: fecha
  menu.classList.remove('aberto');
  hamburguer.classList.remove('ativo');
  hamburguer.setAttribute('aria-expanded', 'false');
  hamburguer.setAttribute('aria-label', 'Abrir menu');
});
