// mb-shell.jsx — Header fixo, Footer, roteamento simples

function MBHeader({ page, setPage, mobile }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('mb-scroll');
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 20);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { k: 'home', l: 'Home' },
    { k: 'sobre', l: 'Sobre' },
    { k: 'produtos', l: 'Produtos' },
    { k: 'catalogo', l: 'Catálogo' },
    { k: 'contato', l: 'Contato' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(15,17,22,0.92)' : MB.bg,
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: `1px solid ${MB.line}`,
      transition: 'all 0.3s ease',
    }}>
      {/* utility strip */}
      <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: FONT.mono, fontSize: mobile?9:10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase', padding: mobile?'6px 16px':'8px 40px', borderBottom: `1px solid ${MB.lineSoft}`, background: MB.bgDeep}}>
        <span>SYS · MB/2026.04</span>
        {!mobile && <span>SP · BR · ABVTEX · ISO</span>}
        <span>STATUS <span style={{color: MB.green}}>● ONLINE</span></span>
      </div>

      {/* main nav */}
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: mobile?'12px 16px':'16px 40px', color: MB.paper, fontFamily: FONT.sans, fontSize: mobile?12:13, fontWeight: 500}}>
        <div style={{display: 'flex', alignItems: 'center', gap: mobile?12:28, cursor: 'pointer'}} onClick={() => setPage('home')}>
          <MBLogo size={mobile?15:18}/>
          {!mobile && <div style={{width: 1, height: 16, background: MB.line}}/>}
          {!mobile && <div style={{display: 'flex', gap: 22}}>
            {links.map(l => (
              <span key={l.k} onClick={(e) => {e.stopPropagation(); setPage(l.k);}} style={{color: page===l.k?MB.paper:MB.muted, cursor: 'pointer', borderBottom: page===l.k?`1px solid ${MB.vinho}`:'1px solid transparent', paddingBottom: 2}}>{l.l}</span>
            ))}
          </div>}
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: mobile?8:14}}>
          {!mobile && <div style={{fontFamily: FONT.mono, fontSize: 11, color: MB.ouro, letterSpacing: '0.15em'}}>(11) 9 0000‑0000</div>}
          <MBButton mobile={mobile} variant="primary" style={{padding: mobile?'8px 12px':'12px 18px', fontSize: mobile?10:11}}>Orçamento →</MBButton>
        </div>
      </nav>

      {/* mobile nav strip */}
      {mobile && (
        <div style={{display: 'flex', gap: 14, padding: '6px 16px 10px', borderTop: `1px solid ${MB.lineSoft}`, overflowX: 'auto', fontFamily: FONT.sans, fontSize: 12}}>
          {links.map(l => (
            <span key={l.k} onClick={() => setPage(l.k)} style={{color: page===l.k?MB.paper:MB.muted, whiteSpace: 'nowrap', borderBottom: page===l.k?`1px solid ${MB.vinho}`:'1px solid transparent', paddingBottom: 2}}>{l.l}</span>
          ))}
        </div>
      )}
    </header>
  );
}

function MBFooter({ mobile, setPage }) {
  const cols = [
    { t: 'Navegar', links: ['Home','Sobre','Produtos','Catálogo','Contato'] },
    { t: 'Produtos', links: ['Etiquetas Tecidas','Bordados','Corte a Laser','Patches','Tags'] },
    { t: 'Contato', links: ['(11) 9 0000‑0000','contato@masterbord.com','R. da Indústria, 1995','São Paulo · SP','CEP 00000‑000'] },
  ];
  return (
    <footer style={{background: MB.bgDeep, color: MB.paper, borderTop: `1px solid ${MB.line}`}}>
      {/* CTA strip */}
      <div style={{padding: mobile?'40px 20px':'64px 48px', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, background: `radial-gradient(circle at 20% 50%, ${MB.azul}1A, transparent 50%), radial-gradient(circle at 80% 50%, ${MB.vinho}1A, transparent 50%)`}}/>
        <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'1.2fr 1fr', gap: mobile?24:48, alignItems: 'end'}}>
          <div>
            <MBTag mobile={mobile} color={MB.ouro}>RESPOSTA EM 2H · AMOSTRA EM 48H</MBTag>
            <MBTitle mobile={mobile} size="xl" style={{marginTop: 14}}>
              <span style={{color: MB.azul}}>Pronto</span> para<br/>produzir com a gente<span style={{color: MB.vinho}}>.</span>
            </MBTitle>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <MBButton mobile={mobile} variant="primary" onClick={() => setPage('contato')} style={{justifyContent: 'center'}}>Solicitar orçamento →</MBButton>
            <MBButton mobile={mobile} variant="secondary" style={{justifyContent: 'center'}}>WhatsApp direto</MBButton>
          </div>
        </div>
      </div>

      {/* cols */}
      <div style={{padding: mobile?'32px 20px':'48px 48px', borderTop: `1px solid ${MB.line}`, display: 'grid', gridTemplateColumns: mobile?'1fr 1fr':'1.3fr 1fr 1fr 1.2fr', gap: mobile?24:40}}>
        <div style={{gridColumn: mobile?'1 / -1':'auto'}}>
          <MBLogo size={mobile?18:22}/>
          <p style={{fontFamily: FONT.sans, fontSize: 13, color: MB.muted, lineHeight: 1.6, marginTop: 14, maxWidth: 280}}>
            Desde 1995 transformando ideias em etiquetas, bordados e peças laser. Parceiro certificado ABVTEX.
          </p>
          <div style={{display: 'flex', gap: 8, marginTop: 16}}>
            {['IN','IG','WA','YT'].map((s,i)=>(
              <div key={i} style={{width: 32, height: 32, border: `1px solid ${MB.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.1em'}}>{s}</div>
            ))}
          </div>
        </div>
        {cols.map((c,i)=>(
          <div key={i}>
            <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.ouro, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16}}>{c.t}</div>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10}}>
              {c.links.map((l,j)=>(<li key={j} style={{fontFamily: FONT.sans, fontSize: 13, color: MB.paperDim}}>{l}</li>))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom strip */}
      <div style={{padding: mobile?'16px 20px':'20px 48px', borderTop: `1px solid ${MB.line}`, display: 'flex', justifyContent: 'space-between', flexDirection: mobile?'column':'row', gap: 8, fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.15em', textTransform: 'uppercase'}}>
        <span>© 1995–2026 MASTER BORD · TODOS OS DIREITOS RESERVADOS</span>
        <span>CNPJ 00.000.000/0001‑00 · PRIVACIDADE · TERMOS</span>
      </div>
    </footer>
  );
}

Object.assign(window, { MBHeader, MBFooter });
