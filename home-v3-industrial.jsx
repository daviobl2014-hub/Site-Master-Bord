// Variação 3 — Industrial Premium
// Paleta escura, números grandes, etiqueta tecida como metáfora, precisão técnica

const V3 = {
  bg: '#0F1116',
  bgSoft: '#181B22',
  card: '#20242D',
  paper: '#F2ECE0',
  azul: '#4A8BD6',
  azulGlow: '#6BA8E8',
  vinho: '#C44B55',
  vinhoGlow: '#E56670',
  ouro: '#D4A96A',
  muted: '#8B8F99',
  line: '#2E3340',
};

function IndustrialHero({ mobile }) {
  return (
    <section style={{background: V3.bg, color: V3.paper, padding: mobile?'18px 20px 48px':'20px 48px 72px', position: 'relative', overflow: 'hidden'}}>
      {/* grid overlay */}
      <div style={{position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${V3.line} 1px, transparent 1px), linear-gradient(90deg, ${V3.line} 1px, transparent 1px)`, backgroundSize: '80px 80px', opacity: 0.3, pointerEvents: 'none'}}/>
      {/* utility strip */}
      <div style={{position: 'relative', display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: mobile?9:11, color: V3.muted, letterSpacing: '0.2em', textTransform: 'uppercase', paddingBottom: 10, borderBottom: `1px solid ${V3.line}`}}>
        <span>SYS · MB/2026.04</span>
        <span style={{display:mobile?'none':'inline'}}>SP · BR · LAT -23.55</span>
        <span>STATUS <span style={{color: V3.azulGlow}}>● ONLINE</span></span>
      </div>

      {/* Nav */}
      <nav style={{position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: mobile?'14px 0':'20px 0', fontFamily: 'Inter', fontSize: mobile?11:13, fontWeight: 500}}>
        <div style={{display: 'flex', alignItems: 'center', gap: mobile?10:24}}>
          <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?16:18}}>
            <span style={{color: V3.azul}}>M</span><span style={{color: V3.vinho}}>B</span>
          </div>
          <div style={{width: 1, height: 16, background: V3.line, display: mobile?'none':'block'}}/>
          <div style={{display: 'flex', gap: mobile?12:20, color: V3.muted}}>
            <span style={{color: V3.paper}}>Home</span>
            <span>Sobre</span>
            <span>Produtos</span>
            {!mobile && <span>Catálogo</span>}
            <span>Contato</span>
          </div>
        </div>
        <div style={{padding: mobile?'6px 12px':'10px 18px', background: V3.vinho, fontSize: mobile?10:12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'}}>Orçamento →</div>
      </nav>

      {/* Hero body */}
      <div style={{position: 'relative', marginTop: mobile?32:56, display: 'grid', gridTemplateColumns: mobile?'1fr':'1.3fr 1fr', gap: mobile?32:48, alignItems: 'start'}}>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: mobile?18:28}}>
            <div style={{width: 40, height: 1, background: V3.ouro}}/>
            <div style={{fontFamily: 'monospace', fontSize: mobile?10:11, color: V3.ouro, letterSpacing: '0.25em', textTransform: 'uppercase'}}>Etiquetas · Bordados · Laser</div>
          </div>
          <h1 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?68:150, lineHeight: 0.85, margin: 0, letterSpacing: '-0.02em'}}>
            <span style={{color: V3.azul, textShadow: `0 0 40px ${V3.azul}40`, display: 'block'}}>Master</span>
            <span style={{color: V3.vinho, textShadow: `0 0 40px ${V3.vinho}40`, display: 'block', marginLeft: mobile?20:40}}>Bord<span style={{color: V3.ouro}}>.</span></span>
          </h1>
          <p style={{fontFamily: 'Inter', fontSize: mobile?15:19, color: V3.muted, lineHeight: 1.5, margin: `${mobile?22:36}px 0 0`, maxWidth: 560}}>
            Três décadas produzindo etiquetas, bordados e cortes a laser para marcas que levam o acabamento a sério.
          </p>
          {/* Stats row */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: mobile?8:16, marginTop: mobile?24:40, paddingTop: mobile?18:28, borderTop: `1px solid ${V3.line}`}}>
            {[['30+','anos'],['500+','marcas'],['120k','peças/mês'],['48h','amostra']].map(([n,l],i)=>(
              <div key={i}>
                <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?22:38, color: i%2? V3.vinho : V3.azul, lineHeight: 1}}>{n}</div>
                <div style={{fontFamily: 'monospace', fontSize: mobile?9:10, color: V3.muted, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 6}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Etiqueta técnica */}
        <div style={{position: 'relative', background: V3.card, border: `1px solid ${V3.line}`, padding: mobile?20:24, aspectRatio: '4/5'}}>
          {/* corners */}
          {[[0,0,'tl'],[0,1,'tr'],[1,0,'bl'],[1,1,'br']].map(([y,x,k])=>(
            <div key={k} style={{position:'absolute', [y?'bottom':'top']:-1, [x?'right':'left']:-1, width: 12, height: 12, borderTop: y?'none':`2px solid ${V3.ouro}`, borderBottom: y?`2px solid ${V3.ouro}`:'none', borderLeft: x?'none':`2px solid ${V3.ouro}`, borderRight: x?`2px solid ${V3.ouro}`:'none'}}/>
          ))}
          <div style={{fontFamily: 'monospace', fontSize: mobile?9:10, color: V3.muted, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between'}}>
            <span>SPEC · ET‑001</span>
            <span style={{color: V3.azulGlow}}>v 2.6</span>
          </div>
          <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?44:64, color: V3.paper, lineHeight: 1, marginTop: 18}}>ETIQUETA<br/><span style={{color: V3.azul}}>TECIDA</span></div>
          <div style={{height: 1, background: V3.line, margin: mobile?'18px 0':'24px 0'}}/>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: mobile?10:14, fontFamily: 'monospace', fontSize: mobile?10:11}}>
            {[['material','cetim'],['largura','12mm'],['cores','até 8'],['tear','barudan'],['definição','1200dpi'],['lote mín.','100u']].map(([k,v],i)=>(
              <div key={i} style={{display: 'flex', justifyContent: 'space-between', color: V3.muted, borderBottom: `1px dashed ${V3.line}`, paddingBottom: 4}}>
                <span>{k}</span><span style={{color: V3.paper}}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{position: 'absolute', bottom: mobile?16:20, left: mobile?16:24, right: mobile?16:24, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{fontFamily: 'monospace', fontSize: 9, color: V3.muted, letterSpacing: '0.2em'}}>ABVTEX · ISO</div>
            <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?20:24, color: V3.ouro}}>MB</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustrialProdutos({ mobile }) {
  const produtos = [
    { n: 'Etiquetas Tecidas', k: 'ET', d: 'Definição em cada fio, em qualquer tecido-base. Produção em teares Barudan.', specs: ['12/16/22mm','8 cores','Cetim · Damasco · Nylon'], c: V3.azul },
    { n: 'Bordados', k: 'BR', d: 'Alta densidade de pontos para acabamento profissional e durável.', specs: ['até 20cm','cores Pantone','qualquer tecido'], c: V3.vinho },
    { n: 'Corte a Laser', k: 'LA', d: 'Cortes retos, curvos ou complexos. Bordas seladas, sem desfiar.', specs: ['0.1mm precisão','forma livre','patch · tag · rótulo'], c: V3.ouro },
  ];
  return (
    <section style={{background: V3.bgSoft, color: V3.paper, padding: mobile?'48px 20px':'80px 48px'}}>
      <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: mobile?28:48, flexWrap: 'wrap', gap: 12}}>
        <div>
          <div style={{fontFamily: 'monospace', fontSize: mobile?10:11, color: V3.ouro, letterSpacing: '0.25em'}}>[ 02 / PRODUTOS ]</div>
          <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?32:56, margin: '8px 0 0', letterSpacing: '-0.02em'}}>Três linhas. <span style={{color: V3.azul}}>Um padrão</span>.</h2>
        </div>
        {!mobile && <div style={{fontFamily: 'monospace', fontSize: 11, color: V3.muted, maxWidth: 240, textAlign: 'right', lineHeight: 1.6}}>Cada produto passa por 4 checkpoints de qualidade antes de sair da fábrica.</div>}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(3, 1fr)', gap: mobile?16:20}}>
        {produtos.map((p,i)=>(
          <div key={i} style={{background: V3.card, border: `1px solid ${V3.line}`, padding: mobile?22:26, position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: p.c, boxShadow: `0 0 20px ${p.c}80`}}/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: mobile?18:22}}>
              <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?36:44, color: p.c, letterSpacing: '-0.04em'}}>{p.k}</div>
              <div style={{fontFamily: 'monospace', fontSize: 10, color: V3.muted, letterSpacing: '0.2em'}}>0{i+1}/03</div>
            </div>
            <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?22:26, color: V3.paper, marginBottom: 10}}>{p.n}</div>
            <div style={{fontFamily: 'Inter', fontSize: 13, color: V3.muted, lineHeight: 1.5, marginBottom: 18}}>{p.d}</div>
            <div style={{borderTop: `1px solid ${V3.line}`, paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 6}}>
              {p.specs.map((s,j)=>(
                <div key={j} style={{fontFamily: 'monospace', fontSize: 11, color: V3.paper, display: 'flex', gap: 10}}>
                  <span style={{color: p.c}}>→</span>{s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustrialGaleria({ mobile }) {
  const items = [
    {t:'Uniforme corporativo',k:'BR',c:V3.vinho,wide:true},
    {t:'Label cetim',k:'ET',c:V3.azul},
    {t:'Tag couro',k:'LA',c:V3.ouro},
    {t:'Patch bordado',k:'BR',c:V3.vinhoGlow},
    {t:'Composição',k:'ET',c:V3.azulGlow,wide:true},
  ];
  return (
    <section style={{background: V3.bg, color: V3.paper, padding: mobile?'48px 20px':'80px 48px'}}>
      <div style={{marginBottom: mobile?24:40}}>
        <div style={{fontFamily: 'monospace', fontSize: mobile?10:11, color: V3.ouro, letterSpacing: '0.25em'}}>[ 03 / PORTFÓLIO ]</div>
        <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?32:56, margin: '8px 0 0', letterSpacing: '-0.02em'}}>Últimas <span style={{color: V3.vinho}}>produções</span>.</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(6, 1fr)', gridAutoRows: mobile?'180px':'180px', gap: mobile?10:12}}>
        {items.map((it,i)=>(
          <div key={i} style={{gridColumn: mobile?'span 1':(it.wide?'span 3':'span 2'), gridRow: mobile?'span 1':(i===0?'span 2':'span 1'), background: V3.card, border: `1px solid ${V3.line}`, position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${it.c}20, transparent 60%)`}}/>
            <div style={{position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(${i*30}deg, transparent 0 6px, ${it.c}14 6px 7px)`}}/>
            <div style={{position: 'absolute', top: 14, left: 14, fontFamily: 'monospace', fontSize: 10, color: V3.muted, letterSpacing: '0.2em'}}>0{i+1}/05</div>
            <div style={{position: 'absolute', top: 14, right: 14, padding: '3px 8px', background: it.c, color: V3.bg, fontFamily: 'Bauhaus', fontWeight: 700, fontSize: 11, letterSpacing: '0.05em'}}>{it.k}</div>
            <div style={{position: 'absolute', bottom: mobile?14:18, left: mobile?14:18, right: mobile?14:18}}>
              <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?18:22, color: V3.paper, lineHeight: 1.1}}>{it.t}</div>
              <div style={{fontFamily: 'monospace', fontSize: 10, color: it.c, marginTop: 6, letterSpacing: '0.15em'}}>VER DETALHES →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustrialDepoimentos({ mobile }) {
  const deps = [
    { q:'Padronização que não vejo em nenhum outro fornecedor. Cada lote idêntico ao anterior.', n:'Juliana Farah', c:'Farah &  Co.' },
    { q:'Amostra em 48h, produção no prazo. Isso mudou nosso planejamento de coleção.', n:'Rafael Teixeira', c:'Teixeira Jeans' },
    { q:'A etiqueta virou argumento de venda. Clientes perguntam quem faz.', n:'Clara Moretti', c:'Atelier Clara M.' },
  ];
  return (
    <section style={{background: V3.bgSoft, color: V3.paper, padding: mobile?'48px 20px':'80px 48px'}}>
      <div style={{marginBottom: mobile?28:48}}>
        <div style={{fontFamily: 'monospace', fontSize: mobile?10:11, color: V3.ouro, letterSpacing: '0.25em'}}>[ 04 / CLIENTES ]</div>
        <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?32:56, margin: '8px 0 0', letterSpacing: '-0.02em'}}>Dito por <span style={{color: V3.azul}}>quem produz</span>.</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(3, 1fr)', gap: mobile?16:20}}>
        {deps.map((d,i)=>(
          <div key={i} style={{background: V3.card, border: `1px solid ${V3.line}`, padding: mobile?22:26, display: 'flex', flexDirection: 'column', position: 'relative'}}>
            <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: 56, color: V3.vinho, lineHeight: 0.7, marginBottom: 10}}>"</div>
            <p style={{fontFamily: 'Inter', fontSize: mobile?15:16, lineHeight: 1.5, color: V3.paper, margin: 0, flex: 1}}>{d.q}</p>
            <div style={{marginTop: 24, paddingTop: 16, borderTop: `1px solid ${V3.line}`, display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(135deg, ${V3.azul}, ${V3.vinho})`}}/>
              <div>
                <div style={{fontFamily: 'Inter', fontSize: 13, fontWeight: 600}}>{d.n}</div>
                <div style={{fontFamily: 'monospace', fontSize: 11, color: V3.muted}}>{d.c}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustrialLogos({ mobile }) {
  const marcas = ['ATELIER M.','FARAH','TEIXEIRA','NÓRDICA','LINHA 14','PETIT','CONCRETO','BRAVA'];
  return (
    <section style={{background: V3.bg, color: V3.paper, padding: mobile?'24px 20px':'36px 48px', borderTop: `1px solid ${V3.line}`, borderBottom: `1px solid ${V3.line}`}}>
      <div style={{display: 'flex', flexDirection: mobile?'column':'row', alignItems: mobile?'flex-start':'center', gap: mobile?14:20}}>
        <div style={{fontFamily: 'monospace', fontSize: 10, color: V3.ouro, letterSpacing: '0.25em', textTransform: 'uppercase', whiteSpace: 'nowrap', borderRight: mobile?'none':`1px solid ${V3.line}`, paddingRight: mobile?0:20}}>CLIENTES ATIVOS ↓</div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: mobile?14:28, alignItems: 'center', flex: 1}}>
          {marcas.map((m,i)=>(<div key={i} style={{fontFamily: i%2?'Bauhaus':'Inter', fontWeight: i%2?700:600, fontSize: mobile?13:15, color: V3.muted, letterSpacing: '0.1em'}}>{m}</div>))}
        </div>
      </div>
    </section>
  );
}

function IndustrialProcesso({ mobile }) {
  const etapas = [
    {n:'01',t:'Briefing',d:'Arte, tecido, prazo e volume. Recebemos por e-mail ou WhatsApp.',time:'24h'},
    {n:'02',t:'Amostra',d:'Peça física produzida e enviada para aprovação formal.',time:'48h'},
    {n:'03',t:'Produção',d:'Lote entra na linha com inspeção 100% peça a peça.',time:'5–10d'},
    {n:'04',t:'Entrega',d:'Embalagem dedicada, nota fiscal e rastreio em tempo real.',time:'48h'},
  ];
  return (
    <section style={{background: V3.bgSoft, color: V3.paper, padding: mobile?'48px 20px':'80px 48px'}}>
      <div style={{marginBottom: mobile?28:48}}>
        <div style={{fontFamily: 'monospace', fontSize: mobile?10:11, color: V3.ouro, letterSpacing: '0.25em'}}>[ 05 / PROCESSO ]</div>
        <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?32:56, margin: '8px 0 0', letterSpacing: '-0.02em'}}>Da arte à <span style={{color: V3.ouro}}>entrega</span>.</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(4, 1fr)', gap: mobile?16:16, position: 'relative'}}>
        {etapas.map((e,i)=>(
          <div key={i} style={{background: V3.card, border: `1px solid ${V3.line}`, padding: mobile?20:22, position: 'relative'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16}}>
              <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?40:52, color: V3.azul, lineHeight: 0.9, letterSpacing: '-0.04em'}}>{e.n}</div>
              <div style={{padding: '3px 10px', border: `1px solid ${V3.ouro}`, color: V3.ouro, fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.15em'}}>{e.time}</div>
            </div>
            <div style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?22:24, color: V3.paper}}>{e.t}</div>
            <div style={{width: 24, height: 2, background: V3.vinho, margin: '10px 0 12px'}}/>
            <div style={{fontFamily: 'Inter', fontSize: 13, color: V3.muted, lineHeight: 1.5}}>{e.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustrialFooter({ mobile }) {
  return (
    <section style={{background: V3.bg, color: V3.paper, padding: mobile?'48px 20px':'80px 48px', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, background: `radial-gradient(circle at 20% 50%, ${V3.azul}22, transparent 50%), radial-gradient(circle at 80% 50%, ${V3.vinho}22, transparent 50%)`}}/>
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'1.2fr 1fr', gap: mobile?24:48, alignItems: 'end'}}>
        <div>
          <div style={{fontFamily: 'monospace', fontSize: 11, color: V3.ouro, letterSpacing: '0.25em', marginBottom: 16}}>[ OPERADORES ONLINE · RESPOSTA EM 2H ]</div>
          <h2 style={{fontFamily: 'Bauhaus', fontWeight: 700, fontSize: mobile?38:72, margin: 0, lineHeight: 0.9, letterSpacing: '-0.02em'}}>
            <span style={{color: V3.azul}}>Produza</span> com<br/>a Master Bord<span style={{color: V3.vinho}}>.</span>
          </h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={{padding: mobile?'14px 20px':'18px 26px', background: V3.vinho, fontFamily: 'Inter', fontSize: mobile?13:14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center'}}>Solicitar orçamento →</div>
          <div style={{padding: mobile?'12px 20px':'16px 26px', border: `1px solid ${V3.azul}`, color: V3.azul, fontFamily: 'Inter', fontSize: mobile?12:13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center'}}>WhatsApp · (11) 0000‑0000</div>
        </div>
      </div>
    </section>
  );
}

function HomeIndustrial({ mobile }) {
  return (
    <div>
      <IndustrialHero mobile={mobile}/>
      <IndustrialProdutos mobile={mobile}/>
      <IndustrialGaleria mobile={mobile}/>
      <IndustrialDepoimentos mobile={mobile}/>
      <IndustrialLogos mobile={mobile}/>
      <IndustrialProcesso mobile={mobile}/>
      <IndustrialFooter mobile={mobile}/>
    </div>
  );
}

window.HomeIndustrial = HomeIndustrial;
