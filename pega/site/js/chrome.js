// Header + Footer parciais (injetados em todas as páginas)

function injectChrome(activePage) {
  const header = `
  <header class="header">
    <div class="utility-strip">
      <span>SYS · MB/2026.04</span>
      <span class="hide-mob">SP · BR · LAT -23.55</span>
      <span>STATUS <span class="status-on">● ONLINE</span></span>
    </div>
    <nav class="main-nav">
      <div class="nav-left">
        <a href="index.html" class="logo"><span class="m">M</span><span class="b">B</span><span class="dot">.</span></a>
        <span class="nav-divider"></span>
        <div class="nav-links">
          <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
          <a href="sobre.html" ${activePage==='sobre'?'class="active"':''}>Sobre</a>
          <a href="produtos.html" ${activePage==='produtos'?'class="active"':''}>Produtos</a>
          <a href="catalogo.html" ${activePage==='catalogo'?'class="active"':''}>Catálogo</a>
          <a href="contato.html" ${activePage==='contato'?'class="active"':''}>Contato</a>
        </div>
      </div>
      <div class="nav-right">
        <span class="nav-phone">(11) 0000‑0000</span>
        <a href="contato.html" class="btn btn-primary btn-sm">Orçamento →</a>
        <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </nav>
  </header>`;

  const footer = `
  <footer class="footer">
    <section class="footer-cta">
      <div class="footer-cta-bg"></div>
      <div class="footer-cta-grid">
        <div>
          <div class="mb-tag">RESPOSTA EM 2H · AMOSTRA EM 48H</div>
          <h2 class="mb-title xl" style="margin-top:14px">
            <span class="highlight-azul">Pronto</span> para<br/>produzir com a gente<span class="highlight-vinho">.</span>
          </h2>
        </div>
        <div class="footer-cta-ctas">
          <a href="contato.html" class="btn btn-primary">Solicitar orçamento →</a>
          <a href="#" class="btn btn-secondary">WhatsApp · (11) 0000‑0000</a>
        </div>
      </div>
    </section>
    <div class="footer-cols">
      <div class="footer-about">
        <div class="logo"><span class="m">Master</span><span class="b">Bord</span><span class="dot">.</span></div>
        <p>Desde 1995 transformando ideias em etiquetas, bordados e peças laser. Parceiro certificado ABVTEX.</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Site</div>
        <ul><li><a href="index.html">Home</a></li><li><a href="sobre.html">Sobre</a></li><li><a href="produtos.html">Produtos</a></li><li><a href="catalogo.html">Catálogo</a></li><li><a href="contato.html">Contato</a></li></ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Produtos</div>
        <ul><li>Etiquetas tecidas</li><li>Bordados</li><li>Corte a laser</li><li>Patches</li><li>Tags personalizadas</li></ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Contato</div>
        <ul><li>(11) 0000‑0000</li><li>contato@masterbord.com.br</li><li>São Paulo · BR</li><li>Seg a Sex · 8h–18h</li></ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 MASTER BORD · TODOS OS DIREITOS RESERVADOS</span>
      <span>ABVTEX · CNPJ XX.XXX.XXX/0001-XX</span>
    </div>
  </footer>`;

  function inject() {
    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
}
