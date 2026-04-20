// Variação 2 — Atelier Artesanal
// Paleta: creme papel + azul marinho + vinho bordô, texturas de costura visíveis

const V2 = {
  paper: '#F4EFE6',
  paperDeep: '#E8DFD0',
  ink: '#1C1410',
  azul: '#2B4C78',
  azulDeep: '#1A3558',
  vinho: '#8B2E36',
  vinhoDeep: '#5E1E23',
  stitch: '#C4A88A',
  muted: '#6B5D4F',
};

// SVG pontilhado de costura repetido
const stitchPattern = (color) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='2'%3E%3Cline x1='0' y1='1' x2='6' y2='1' stroke='${encodeURIComponent(color)}' stroke-width='1.5'/%3E%3C/svg%3E")`;

function AtelierHero({ mobile }) {
  return (
    <section style={{background: V2.paper, padding: mobile?'20px 20px 40px':'24px 48px 60px', position: 'relative'}}>
      {/* ribbon meta */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Inter', fontSize: mobile?9:10, letterSpacing: '0.25em', textTransform: 'uppercase', color: V2.muted, paddingBottom: 14, borderBottom: `1px dashed ${V2.stitch}`}}>
          <span>Desde 1995</span>
          <span style={{display: mobile?'none':'inline'}}>Ateliê de etiquetas & bordados</span>
          <span>São Paulo · BR</span>
      </div>

      {/* Nav com pontilhado inferior */}
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: mobile?'16px 0':'22px 0', borderBottom: `2px dashed ${V2.azul}`, fontFamily: 'Inter', fontSize: mobile?11:13, fontWeight: 500}}>
        <div style={{display: 'flex', gap: mobile?14:28}}>
          <span style={{color: V2.vinho, fontWeight: 700}}>Home</span>
          <span style={{color: V2.ink}}>Sobre</span>
          <span style={{color: V2.ink}}>Produtos</span>
          {!mobile && <span style={{color: V2.ink}}>Catálogo</span>}
          <span style={{color: V2.ink}}>Contato</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, color: V2.azul, fontWeight: 600}}>
          <span style={{width: 8, height: 8, borderRadius: '50%', background: V2.vinho, display: 'inline-block'}}/>
          (11) 0000‑0000
        </div>
      </nav>

      {/* Hero composition */}
      <div style={{marginTop: mobile?24:40, display: 'grid', gridTemplateColumns: mobile?'1fr':'1fr 0.8fr', gap: mobile?28:48, alignItems: 'center'}}>
        <div>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px', border: `1px solid ${V2.ink}`, fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: V2.ink, marginBottom: mobile?18:28}}>
            <span style={{width: 6, height: 6, borderRadius: '50%', background: V2.vinho}}/>
            Etiquetas · Bordados · Laser
          </div>
          <h1 style={{fontFamily: 'Bauhaus, sans-serif', fontWeight: 700, fontSize: mobile?88:180, lineHeight: 0.85, margin: 0, letterSpacing: '-0.02em'}}>
            <span style={{color: V2.azul, display: 'block'}}>Master</span>
            <span style={{color: V2.vinho, display: 'block', marginLeft: mobile?24:48}}>Bord</span>
          </h1>
          <p style={{fontFamily: 'Inter', fontSize: mobile?16:20, color: V2.ink, lineHeight: 1.5, margin: `${mobile?20:32}px 0 0`, maxWidth: 520}}>
            Cada etiqueta é costurada como se fosse para a sua própria marca. Pequenas tiragens com o cuidado de uma peça única.
          </p>
          <div style={{display: 'flex', gap: 14, marginTop: mobile?22:32, flexWrap: 'wrap'}}>
            <button style={{padding: mobile?'12px 20px':'16px 28px', background: V2.vinho, color: V2.paper, border: 'none', fontFamily: 'Inter', fontSize: mobile?12:13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer'}}>Pedir amostra grátis</button>
            <button style={{padding: mobile?'12px 20px':'16px 28px', background: 'transparent', color: V2.ink, border: `1px solid ${V2.ink}`, fontFamily: 'Inter', fontSize: mobile?12:13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer'}}>Ver portfólio ↗</button>
          </div>
        </div>

        {/* Etiqueta gigante desenhada */}
        <div style={{position: 'relative'}}>
          <div style={{
            background: V2.paperDeep, padding: mobile?28:40, position: 'relative',
            border: `1.5px dashed ${V2.azul}`, aspectRatio: '4/5',
          }}>
            {/* Furo */}
            <div style={{position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 20, height: 20, borderRadius: '50%', background: V2.paper, border: `2px solid ${V2.ink}`}}/>
            {/* Cordão */}
            <div style={{position: 'absolute', top: -20, left: '50%', width: 2, height: 40, background: V2.stitch, transform: 'translateX(-50%)'}}/>
            <div style={{paddingTop: 36, height: '100%', display: 'flex', flexDirection: 'column'}}>
              <div style={{fontFamily: 'monospace', fontSize: mobile?10:11, color: V2.vinho, letterSpacing: '0.2em'}}>★ MASTER BORD ★</div>
              <div style={{fontFamily: 'Bauhaus, sans-serif', fontWeight: 700, fontSize: mobile?54:84, color: V2.azul, lineHeight: 1, marginTop: 16}}>MB</div>
              <div style={{height: 1, background: V2.stitch, margin: '20px 0', backgroundImage: stitchPattern(V2.stitch), backgroundRepeat: 'repeat-x'}}/>
              <div style={{fontFamily: 'Inter', fontSize: mobile?10:11, color: V2.ink, letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 1.8}}>
                100% DEDICAÇÃO<br/>FEITO À MÃO<br/>BRASIL
              </div>
              <div style={{marginTop: 'auto', fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?14:16, color: V2.muted}}>N.º 2026‑04</div>
            </div>
          </div>
          {/* Selo */}
          <div style={{
            position: 'absolute', bottom: mobile?-16:-24, right: mobile?-12:-24,
            width: mobile?80:110, height: mobile?80:110, borderRadius: '50%',
            background: V2.vinho, color: V2.paper, display: 'flex',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            transform: 'rotate(-8deg)', border: `2px dashed ${V2.paper}`, boxShadow: `0 0 0 4px ${V2.vinho}`,
          }}>
            <div style={{fontSize: mobile?9:10, letterSpacing: '0.2em', textTransform: 'uppercase', fontStyle: 'normal', fontFamily: 'Inter', fontWeight: 600}}>Certif.</div>
            <div style={{fontSize: mobile?22:28, lineHeight: 1, margin: '2px 0'}}>ABVTEX</div>
            <div style={{fontSize: mobile?8:9, letterSpacing: '0.2em', fontStyle: 'normal', fontFamily: 'Inter', opacity: 0.8}}>2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AtelierProdutos({ mobile }) {
  const produtos = [
    { n: 'Etiquetas tecidas', tag: 'ET', c: V2.azul, d: 'Definição em cada detalhe. Cetim, damasco, nylon.' },
    { n: 'Bordados', tag: 'BR', c: V2.vinho, d: 'Personalização profissional em todos os tecidos.' },
    { n: 'Corte a laser', tag: 'LA', c: V2.ink, d: 'Cortes arredondados ou retos, perfeição nos detalhes.' },
  ];
  return (
    <section style={{background: V2.paperDeep, padding: mobile?'48px 20px':'80px 48px', position: 'relative'}}>
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundImage: `repeating-linear-gradient(90deg, ${V2.vinho} 0 12px, transparent 12px 20px)`}}/>
      <div style={{textAlign: 'center', marginBottom: mobile?32:56}}>
        <div style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?14:18, color: V2.vinho, marginBottom: 6}}>— Nossos ofícios —</div>
        <h2 style={{fontFamily: 'Bauhaus, sans-serif', fontWeight: 700, fontSize: mobile?36:56, color: V2.ink, margin: 0, letterSpacing: '-0.02em'}}>Três técnicas, um padrão.</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(3, 1fr)', gap: mobile?20:24}}>
        {produtos.map((p,i)=>(
          <div key={i} style={{background: V2.paper, padding: mobile?24:32, border: `1px solid ${V2.ink}`, position: 'relative'}}>
            {/* 4 cantos "costurados" */}
            {[[8,8],[8,'calc(100% - 16px)'],['calc(100% - 16px)',8],['calc(100% - 16px)','calc(100% - 16px)']].map((pos,j)=>(
              <div key={j} style={{position: 'absolute', top: pos[1], left: pos[0], width: 8, height: 8, border: `1px solid ${V2.stitch}`, background: V2.paper}}/>
            ))}
            <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20}}>
              <div style={{width: 52, height: 52, background: p.c, color: V2.paper, fontFamily: 'Bauhaus', fontWeight: 700, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.04em'}}>{p.tag}</div>
              <div style={{flex: 1}}>
                <div style={{fontFamily: 'monospace', fontSize: 10, color: V2.muted, letterSpacing: '0.2em'}}>0{i+1} / 03</div>
                <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?22:24, color: V2.ink, lineHeight: 1.1}}>{p.n}</div>
              </div>
            </div>
            {/* Pattern placeholder */}
            <div style={{aspectRatio: '5/3', background: p.c, position: 'relative', overflow: 'hidden', marginBottom: 16}}>
              <div style={{position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(${i*45}deg, transparent 0 4px, rgba(255,255,255,0.08) 4px 5px)`}}/>
              <div style={{position: 'absolute', inset: 12, border: `1px dashed rgba(255,255,255,0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 10, color: V2.paper, opacity: 0.7, letterSpacing: '0.2em'}}>[ amostra {p.tag} ]</div>
            </div>
            <p style={{fontFamily: 'Inter', fontSize: 13, color: V2.muted, lineHeight: 1.5, margin: 0}}>{p.d}</p>
            <div style={{marginTop: 16, fontFamily: 'Inter', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: p.c}}>Ver mais →</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AtelierGaleria({ mobile }) {
  const items = [1,2,3,4,5,6];
  const cores = [V2.azul, V2.vinho, V2.ink, V2.azulDeep, V2.vinhoDeep, V2.stitch];
  const titulos = ['Blusa bordada','Etiqueta cetim','Tag corte laser','Camiseta uniforme','Label algodão','Patch termocolante'];
  return (
    <section style={{background: V2.paper, padding: mobile?'48px 20px':'80px 48px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: mobile?24:36, flexWrap: 'wrap', gap: 12}}>
        <div>
          <div style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?14:16, color: V2.vinho}}>— Portfólio —</div>
          <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?30:48, margin: '4px 0 0', color: V2.ink}}>O que saiu do ateliê</h2>
        </div>
        <div style={{display: 'flex', gap: 8, fontFamily: 'Inter', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'}}>
          <span style={{padding: '6px 12px', background: V2.ink, color: V2.paper}}>Todos</span>
          <span style={{padding: '6px 12px', color: V2.muted}}>Etiquetas</span>
          <span style={{padding: '6px 12px', color: V2.muted}}>Bordados</span>
          {!mobile && <span style={{padding: '6px 12px', color: V2.muted}}>Laser</span>}
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr 1fr':'repeat(3, 1fr)', gap: mobile?10:16}}>
        {items.map((_,i)=>(
          <div key={i} style={{position: 'relative', aspectRatio: '1/1', background: cores[i], overflow: 'hidden'}}>
            <div style={{position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(${45+i*22}deg, transparent 0 6px, rgba(255,255,255,0.08) 6px 7px)`}}/>
            <div style={{position: 'absolute', inset: mobile?10:14, border: `1px dashed rgba(255,255,255,0.35)`}}/>
            <div style={{position: 'absolute', top: mobile?14:18, left: mobile?14:18, fontFamily: 'monospace', fontSize: 9, color: V2.paper, opacity: 0.7, letterSpacing: '0.2em'}}>0{i+1} / 06</div>
            <div style={{position: 'absolute', bottom: mobile?14:18, left: mobile?14:18, right: mobile?14:18}}>
              <div style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?14:18, color: V2.paper, lineHeight: 1.1}}>{titulos[i]}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AtelierDepoimentos({ mobile }) {
  const deps = [
    { q: 'Saíram do prazo correndo atrás da Master — não saímos mais. É etiqueta que dá orgulho de aparecer.', n: 'Clara Moretti', c: 'Atelier Clara M.' },
    { q: 'O único fornecedor que entrega amostra em 48h e mantém a palavra na produção.', n: 'Rafael Teixeira', c: 'Teixeira Jeans' },
  ];
  return (
    <section style={{background: V2.azul, color: V2.paper, padding: mobile?'48px 20px':'80px 48px', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04) 0, transparent 40%)`}}/>
      <div style={{position: 'relative', maxWidth: 1100, margin: '0 auto'}}>
        <div style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?14:16, color: V2.stitch, marginBottom: 8}}>— Quem assina conosco —</div>
        <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?30:50, margin: '0 0 40px', letterSpacing: '-0.02em'}}>Marcas pequenas,<br/>cuidado grande.</h2>
        <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'1fr 1fr', gap: mobile?24:40}}>
          {deps.map((d,i)=>(
            <div key={i} style={{padding: mobile?20:28, background: 'rgba(255,255,255,0.06)', border: `1px dashed rgba(255,255,255,0.3)`, position: 'relative'}}>
              <div style={{position: 'absolute', top: -16, left: 24, background: V2.paper, color: V2.azul, padding: '2px 12px', fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 32, lineHeight: 1}}>"</div>
              <p style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?17:20, lineHeight: 1.5, margin: '10px 0 20px', color: V2.paper}}>{d.q}</p>
              <div style={{borderTop: `1px dashed rgba(255,255,255,0.3)`, paddingTop: 14, display: 'flex', alignItems: 'center', gap: 12}}>
                <div style={{width: 36, height: 36, borderRadius: '50%', background: V2.vinho, border: `2px solid ${V2.paper}`}}/>
                <div>
                  <div style={{fontFamily: 'Inter', fontWeight: 600, fontSize: 13}}>{d.n}</div>
                  <div style={{fontFamily: 'Inter', fontSize: 11, opacity: 0.7}}>{d.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AtelierLogos({ mobile }) {
  const marcas = ['ATELIER M.','Farah&Co','Teixeira','Nórdica','LINHA 14','Petit','Concreto','BRAVA'];
  return (
    <section style={{background: V2.paper, padding: mobile?'28px 20px':'40px 48px', borderTop: `1px dashed ${V2.stitch}`, borderBottom: `1px dashed ${V2.stitch}`}}>
      <div style={{fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: V2.muted, textAlign: 'center', marginBottom: mobile?16:22}}>— Confiam na Master Bord —</div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: mobile?16:32, opacity: 0.7}}>
        {marcas.map((m,i)=>(
          <div key={i} style={{fontFamily: ['"Playfair Display"','Bauhaus','Inter','monospace'][i%4], fontStyle: i%2?'italic':'normal', fontWeight: i%3?700:500, fontSize: mobile?13:17, letterSpacing: i%2?0:'0.1em', color: V2.ink}}>{m}</div>
        ))}
      </div>
    </section>
  );
}

function AtelierProcesso({ mobile }) {
  const etapas = [
    { n:'01', t:'Briefing', d:'Manda a arte, o tecido-alvo e o prazo.' },
    { n:'02', t:'Amostra física', d:'Em 48h você recebe a peça real para aprovar.' },
    { n:'03', t:'Produção', d:'Lote padronizado, inspeção peça a peça.' },
    { n:'04', t:'Entrega', d:'Embalado e enviado — ou retirado no ateliê.' },
  ];
  return (
    <section style={{background: V2.paperDeep, padding: mobile?'48px 20px':'80px 48px'}}>
      <div style={{marginBottom: mobile?28:48}}>
        <div style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?14:16, color: V2.vinho}}>— Como trabalhamos —</div>
        <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?30:50, margin: '4px 0 0', color: V2.ink}}>Quatro passos,<br/>sem enrolação.</h2>
      </div>
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(4, 1fr)', gap: mobile?20:20}}>
        {etapas.map((e,i)=>(
          <div key={i} style={{background: V2.paper, padding: mobile?20:22, border: `1px solid ${V2.ink}`, position: 'relative'}}>
            <div style={{position: 'absolute', top: -14, left: 16, background: V2.vinho, color: V2.paper, padding: '4px 12px', fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.2em'}}>STEP {e.n}</div>
            <div style={{marginTop: 14, fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?22:26, color: V2.azul}}>{e.t}</div>
            <div style={{width: 28, height: 2, background: V2.stitch, margin: '10px 0 12px', backgroundImage: stitchPattern(V2.vinho), backgroundRepeat: 'repeat-x', backgroundSize: '8px 2px'}}/>
            <div style={{fontFamily: 'Inter', fontSize: mobile?13:13, color: V2.muted, lineHeight: 1.5}}>{e.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AtelierFooter({ mobile }) {
  return (
    <section style={{background: V2.ink, color: V2.paper, padding: mobile?'40px 20px':'64px 48px'}}>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'1.4fr 1fr', gap: mobile?24:48, alignItems: 'end'}}>
        <div>
          <div style={{fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.3em', color: V2.stitch, marginBottom: 12}}>[ ORÇAMENTO EM 24H ]</div>
          <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?34:64, margin: 0, lineHeight: 1, color: V2.paper}}>Vamos <span style={{color: V2.vinho}}>costurar</span> sua marca.</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={{padding: mobile?'14px 20px':'18px 24px', background: V2.vinho, fontFamily: 'Inter', fontSize: mobile?13:14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center'}}>Pedir orçamento →</div>
          <div style={{padding: mobile?'12px 20px':'16px 24px', border: `1px dashed ${V2.paper}`, fontFamily: 'Inter', fontSize: mobile?12:13, textAlign: 'center', opacity: 0.9}}>WhatsApp · (11) 0000‑0000</div>
        </div>
      </div>
    </section>
  );
}

function HomeAtelier({ mobile }) {
  return (
    <div>
      <AtelierHero mobile={mobile}/>
      <AtelierProdutos mobile={mobile}/>
      <AtelierGaleria mobile={mobile}/>
      <AtelierDepoimentos mobile={mobile}/>
      <AtelierLogos mobile={mobile}/>
      <AtelierProcesso mobile={mobile}/>
      <AtelierFooter mobile={mobile}/>
    </div>
  );
}

window.HomeAtelier = HomeAtelier;
