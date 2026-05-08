// ==========================================
// 02 - MENU PRODUTOS
// Controla o dropdown de produtos no cabeçalho
// e a navegação para a seção de produtos com
// destaque do item clicado (etiqueta/bordado/laser).
// ==========================================

// Abre ou fecha o submenu de produtos ao clicar
function toggleProdutos(e) {
  e.preventDefault();
  const sub = document.getElementById('submenu-produtos');
  sub.classList.toggle('aberto');
}

// Fecha o submenu de produtos ao clicar fora dele
document.addEventListener('click', function (e) {
  const sub = document.getElementById('submenu-produtos');
  const li = sub.closest('li');
  if (!li.contains(e.target)) {
    sub.classList.remove('aberto');
  }
});

// Abre e destaca um produto específico (Etiqueta, Bordado ou Laser)
function abrirProduto(id) {
  // 1. Fecha o submenu (mesma classe que toggleProdutos usa)
  document.getElementById('submenu-produtos').classList.remove('aberto');

  // 2. Rola até a section de produtos
  const secao = document.getElementById('produto');
  secao.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // 3. Espera o scroll terminar e ativa o item
  setTimeout(() => {
    document.querySelectorAll('.effect-produtos li').forEach((li) => {
      li.classList.remove('ativo');
    });
    const item = document.getElementById(id);
    if (item) item.classList.add('ativo');
  }, 800);
}
