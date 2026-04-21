/* ================================================================
   CATALOGO.JS — Master Bord
   JavaScript da PÁGINA CATÁLOGO (catalogo.html).
   Carregado depois do global.js.

   O que faz:
   1. Filtra itens do catálogo por categoria (etiqueta/bordado/laser/misto/todos)
   2. Atualiza o contador "X itens" no canto direito
   3. Mostra mensagem "vazio" se nenhum item bater com o filtro
   ================================================================ */

(function () {
  const grid = document.getElementById('catalogoGrid');
  const count = document.getElementById('catalogoCount');
  const vazio = document.getElementById('catalogoVazio');
  const botoes = document.querySelectorAll('.catalogo-filtro-btn');

  if (!grid || !botoes.length) return;

  const itens = grid.querySelectorAll('.catalogo-item');

  function aplicarFiltro(filtro) {
    let visiveis = 0;

    itens.forEach((item) => {
      const cat = item.dataset.cat;
      const mostra = filtro === 'todos' || cat === filtro;
      item.classList.toggle('hidden', !mostra);
      if (mostra) visiveis++;
    });

    if (count) {
      count.textContent = visiveis === 1 ? '1 item' : `${visiveis} itens`;
    }
    if (vazio) {
      vazio.hidden = visiveis !== 0;
    }
  }

  botoes.forEach((btn) => {
    btn.addEventListener('click', () => {
      botoes.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      aplicarFiltro(btn.dataset.filtro);
    });
  });
})();
