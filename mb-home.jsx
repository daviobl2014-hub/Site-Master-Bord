// mb-home.jsx — Home Industrial Premium completa

function HomeHero({ mobile, setPage }) {
  return (
    <section style={{background: MB.bg, color: MB.paper, padding: mobile?'40px 20px 56px':'72px 48px 96px', position: 'relative', overflow: 'hidden'}}>
      <MBTechGrid/>
      {/* Soft glow behind headline */}
      <div style={{position: 'absolute', top: '30%', left: '-10%', width: 600, height: 600, background: `radial-gradient(circle, ${MB.azul}22, transparent 60%)`, filter: 'blur(40px)', pointerEvents: 'none'}}/>
      <div style={{position: 'absolute', top: '10%', right: '-10%', width: 500, height: 500, background: `radial-gradient(circle, ${MB.vinho}22, transparent 60%)`, filter: 'blur(40px)', pointerEvents: 'none'}}/>

      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'1.3fr 1fr', gap: mobile?32:56, alignItems: 'start'}}>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: mobile?20:32}}>
            <div style={{width: 40, height: 1, background: MB.ouro}}/>
            <MBTag mobile={mobile}>Etiquetas · Bordados · Corte a Laser</MBTag>
          </div>
          <h1 style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?68:150, lineHeight: 0.85, margin: 0, letterSpacing: '-0.02em'}}>
            <span style={{color: MB.azul, textShadow: `0 0 50px ${MB.azul}50`, display: 'block'}}>Master</span>
            <span style={{color: MB.vinho, textShadow: `0 0 50px ${MB.vinho}50`, display: 'block', marginLeft: mobile?24:48}}>Bord<span style={{color: MB.ouro}}>.</span></span>
          </h1>
          <p style={{fontFamily: FONT.sans, fontSize: mobile?15:20, color: MB.paperDim, lineHeight: 1.5, margin: `${mobile?24:40}px 0 0`, maxWidth: 580}}>
            Desde 1995, <strong style={{color: MB.paper}}>três décadas</strong> produzindo etiquetas, bordados e cortes a laser para marcas que levam o acabamento a sério. Certificados ABVTEX, com tecnologia Barudan e Mucad.
          </p>
          <div style={{display: 'flex', gap: 12, marginTop: mobile?24:36, flexWrap: 'wrap'}}>
            <MBButton mobile={mobile} variant="primary" onClick={() => setPage('contato')}>Pedir amostra grátis →</MBButton>
            <MBButton mobile={mobile} variant="ghost" onClick={() => setPage('catalogo')}>Ver catálogo</MBButton>
          </div>

          {/* Stats */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: mobile?8:20, marginTop: mobile?32:56, paddingTop: mobile?22:32, borderTop: `1px solid ${MB.line}`}}>
            {[['30+','anos de estrada'],['500+','marcas atendidas'],['120k','peças/mês'],['48h','amostra física']].map(([n,l],i)=>(
              <div key={i}>
                <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?24:44, color: i%2? MB.vinho : MB.azul, lineHeight: 1, letterSpacing: '-0.02em'}}>{n}</div>
                <div style={{fontFamily: FONT.mono, fontSize: mobile?9:10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 8}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Etiqueta técnica à direita */}
        <div style={{position: 'relative', background: MB.card, border: `1px solid ${MB.line}`, padding: mobile?20:26, aspectRatio: '4/5', minHeight: mobile?380:520}}>
          {[[0,0],[0,1],[1,0],[1,1]].map(([y,x],i)=>(
            <div key={i} style={{position:'absolute', [y?'bottom':'top']:-1, [x?'right':'left']:-1, width: 14, height: 14, borderTop: y?'none':`2px solid ${MB.ouro}`, borderBottom: y?`2px solid ${MB.ouro}`:'none', borderLeft: x?'none':`2px solid ${MB.ouro}`, borderRight: x?`2px solid ${MB.ouro}`:'none'}}/>
          ))}
          <div style={{fontFamily: FONT.mono, fontSize: mobile?9:10, color: MB.muted, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between'}}>
            <span>SPEC · ET‑001</span>
            <span style={{color: MB.azulGlow}}>v 2.6</span>
          </div>
          <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?44:68, color: MB.paper, lineHeight: 1, marginTop: 18, letterSpacing: '-0.02em'}}>ETIQUETA<br/><span style={{color: MB.azul}}>TECIDA</span></div>
          <MBDivider color={MB.line} length={'100%'} />
          <div style={{height: mobile?18:24}}/>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: mobile?10:14}}>
            {[['material','cetim'],['largura','12mm'],['cores','até 8'],['tear','Barudan'],['definição','1200dpi'],['lote mín.','100u']].map(([k,v],i)=>(<MBSpecRow key={i} k={k} v={v}/>))}
          </div>
          <div style={{position: 'absolute', bottom: mobile?16:22, left: mobile?16:26, right: mobile?16:26, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{fontFamily: FONT.mono, fontSize: 9, color: MB.muted, letterSpacing: '0.2em'}}>ABVTEX · ISO</div>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?22:28, color: MB.ouro}}>MB</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeProdutos({ mobile, setPage }) {
  const produtos = [
    { n: 'Etiquetas Tecidas', k: 'ET', d: 'Alta definição em qualquer tecido-base. Produção em teares profissionais, com 1200dpi e cores sob medida.', specs: ['12/16/22mm','8 cores simultâneas','cetim · damasco · nylon'], c: MB.azul, id: 'etiqueta' },
    { n: 'Bordados', k: 'BR', d: 'Alta densidade de pontos para acabamento profissional e durável, mantendo aparência mesmo após várias lavagens.', specs: ['até 20cm','cores Pantone','qualquer tecido'], c: MB.vinho, id: 'bordado' },
    { n: 'Corte a Laser', k: 'LA', d: 'Cortes retos, curvos ou complexos com 0,1mm de precisão. Bordas seladas — não desfia.', specs: ['0.1mm precisão','forma livre','patch · tag · rótulo'], c: MB.ouro, id: 'laser' },
  ];
  return (
    <section style={{background: MB.bgSoft, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: mobile?32:56, flexWrap: 'wrap', gap: 16}}>
        <div>
          <MBTag mobile={mobile}>02 / PRODUTOS</MBTag>
          <div style={{height: 12}}/>
          <MBTitle mobile={mobile} size="lg">Três linhas. <span style={{color: MB.azul}}>Um padrão</span>.</MBTitle>
        </div>
        {!mobile && <div style={{fontFamily: FONT.mono, fontSize: 11, color: MB.muted, maxWidth: 280, textAlign: 'right', lineHeight: 1.6}}>Cada produto passa por 4 checkpoints de qualidade antes de sair da fábrica.</div>}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(3, 1fr)', gap: mobile?16:20}}>
        {produtos.map((p,i)=>(
          <MBCard key={i} mobile={mobile} accent={p.c} onClick={() => setPage('produto-'+p.id)} style={{cursor: 'pointer'}}>
            <MBImage color={p.c} ratio="5/3" label={`SAMPLE ${p.k}`} angle={i*35} style={{marginBottom: 18}}/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?36:44, color: p.c, letterSpacing: '-0.04em', lineHeight: 1}}>{p.k}</div>
              <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em'}}>0{i+1}/03</div>
            </div>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?22:26, color: MB.paper, marginBottom: 10, letterSpacing: '-0.01em'}}>{p.n}</div>
            <div style={{fontFamily: FONT.sans, fontSize: 13, color: MB.muted, lineHeight: 1.55, marginBottom: 18}}>{p.d}</div>
            <div style={{borderTop: `1px solid ${MB.line}`, paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 7}}>
              {p.specs.map((s,j)=>(
                <div key={j} style={{fontFamily: FONT.mono, fontSize: 11, color: MB.paper, display: 'flex', gap: 10}}>
                  <span style={{color: p.c}}>→</span>{s}
                </div>
              ))}
            </div>
            <div style={{marginTop: 18, fontFamily: FONT.mono, fontSize: 11, color: p.c, letterSpacing: '0.15em', textTransform: 'uppercase'}}>VER DETALHES →</div>
          </MBCard>
        ))}
      </div>
    </section>
  );
}

function HomeGaleria({ mobile }) {
  const items = [
    {t:'Uniforme corporativo',k:'BR',c:MB.vinho,wide:true},
    {t:'Label cetim premium',k:'ET',c:MB.azul},
    {t:'Tag em couro',k:'LA',c:MB.ouro},
    {t:'Patch bordado alta densidade',k:'BR',c:MB.vinhoGlow},
    {t:'Composição etiqueta + laser',k:'ET',c:MB.azulGlow,wide:true},
  ];
  return (
    <section style={{background: MB.bg, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?28:44, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14}}>
        <div>
          <MBTag mobile={mobile}>03 / PORTFÓLIO</MBTag>
          <div style={{height: 12}}/>
          <MBTitle mobile={mobile} size="lg">Últimas <span style={{color: MB.vinho}}>produções</span>.</MBTitle>
        </div>
        <div style={{fontFamily: FONT.mono, fontSize: 11, color: MB.ouro, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', gap: 14, flexWrap: 'wrap'}}>
          <span>Todos</span><span style={{color:MB.muted}}>Etiquetas</span><span style={{color:MB.muted}}>Bordados</span><span style={{color:MB.muted}}>Laser</span>
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr 1fr':'repeat(6, 1fr)', gridAutoRows: mobile?'160px':'200px', gap: mobile?10:14}}>
        {items.map((it,i)=>(
          <MBImage key={i} color={it.c} ratio="auto" angle={i*30} label={`0${i+1}/05`} style={{gridColumn: mobile?'span 1':(it.wide?'span 3':'span 2'), gridRow: mobile?'span 1':(i===0?'span 2':'span 1')}}>
            <div style={{position: 'absolute', top: 14, right: 14, padding: '3px 8px', background: it.c, color: MB.bg, fontFamily: FONT.display, fontWeight: 700, fontSize: 11, letterSpacing: '0.05em'}}>{it.k}</div>
            <div style={{position: 'absolute', bottom: mobile?14:18, left: mobile?14:18, right: mobile?14:18}}>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?16:22, color: MB.paper, lineHeight: 1.1, letterSpacing: '-0.01em'}}>{it.t}</div>
              <div style={{fontFamily: FONT.mono, fontSize: 10, color: it.c, marginTop: 6, letterSpacing: '0.15em'}}>VER DETALHES →</div>
            </div>
          </MBImage>
        ))}
      </div>
    </section>
  );
}

function HomeDepoimentos({ mobile }) {
  const deps = [
    { q:'Padronização que não vejo em nenhum outro fornecedor. Cada lote idêntico ao anterior. Isso pra uma marca de autor é vital.', n:'Juliana Farah', c:'Farah & Co.', r:5 },
    { q:'Amostra em 48h, produção no prazo. Isso mudou nosso planejamento de coleção por completo.', n:'Rafael Teixeira', c:'Teixeira Jeans', r:5 },
    { q:'A etiqueta virou argumento de venda. Clientes perguntam quem faz. A Master entende que acabamento é marca.', n:'Clara Moretti', c:'Atelier Clara M.', r:5 },
  ];
  return (
    <section style={{background: MB.bgSoft, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?28:48}}>
        <MBTag mobile={mobile}>04 / CLIENTES</MBTag>
        <div style={{height: 12}}/>
        <MBTitle mobile={mobile} size="lg">Dito por <span style={{color: MB.azul}}>quem produz</span>.</MBTitle>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(3, 1fr)', gap: mobile?16:20}}>
        {deps.map((d,i)=>(
          <MBCard key={i} mobile={mobile} style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: 64, color: MB.vinho, lineHeight: 0.6, marginBottom: 14}}>"</div>
            <p style={{fontFamily: FONT.sans, fontSize: mobile?15:16, lineHeight: 1.5, color: MB.paper, margin: 0, flex: 1}}>{d.q}</p>
            <div style={{marginTop: 24, paddingTop: 16, borderTop: `1px solid ${MB.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <div style={{width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(135deg, ${MB.azul}, ${MB.vinho})`}}/>
                <div>
                  <div style={{fontFamily: FONT.sans, fontSize: 13, fontWeight: 600}}>{d.n}</div>
                  <div style={{fontFamily: FONT.mono, fontSize: 11, color: MB.muted}}>{d.c}</div>
                </div>
              </div>
              <div style={{color: MB.ouro, fontSize: 13, letterSpacing: '0.1em'}}>{'★'.repeat(d.r)}</div>
            </div>
          </MBCard>
        ))}
      </div>
    </section>
  );
}

function HomeLogos({ mobile }) {
  const marcas = ['ATELIER M.','FARAH&CO','TEIXEIRA','NÓRDICA','LINHA 14','PETIT','CONCRETO','BRAVA','KIBON','ALMA'];
  return (
    <section style={{background: MB.bg, color: MB.paper, padding: mobile?'24px 20px':'36px 48px', borderTop: `1px solid ${MB.line}`, borderBottom: `1px solid ${MB.line}`}}>
      <div style={{display: 'flex', flexDirection: mobile?'column':'row', alignItems: mobile?'flex-start':'center', gap: mobile?14:24}}>
        <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.ouro, letterSpacing: '0.25em', textTransform: 'uppercase', whiteSpace: 'nowrap', borderRight: mobile?'none':`1px solid ${MB.line}`, paddingRight: mobile?0:24}}>CLIENTES ATIVOS ↓</div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: mobile?14:30, alignItems: 'center', flex: 1}}>
          {marcas.map((m,i)=>(<div key={i} style={{fontFamily: i%2?FONT.display:FONT.sans, fontWeight: i%2?700:600, fontSize: mobile?12:15, color: MB.muted, letterSpacing: '0.1em'}}>{m}</div>))}
        </div>
      </div>
    </section>
  );
}

function HomeProcesso({ mobile }) {
  const etapas = [
    {n:'01',t:'Briefing',d:'Envie arte, tecido-alvo, prazo e volume. Recebemos por e-mail ou WhatsApp.',time:'24h'},
    {n:'02',t:'Amostra física',d:'Peça real produzida e enviada para sua aprovação formal antes do lote.',time:'48h'},
    {n:'03',t:'Produção',d:'Lote entra na linha com inspeção 100% — peça por peça, até o último acabamento.',time:'5–10d'},
    {n:'04',t:'Entrega',d:'Embalagem dedicada, nota fiscal e rastreio em tempo real até sua porta.',time:'48h'},
  ];
  return (
    <section style={{background: MB.bgSoft, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?28:48}}>
        <MBTag mobile={mobile}>05 / PROCESSO</MBTag>
        <div style={{height: 12}}/>
        <MBTitle mobile={mobile} size="lg">Da arte à <span style={{color: MB.ouro}}>entrega</span>.</MBTitle>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(4, 1fr)', gap: mobile?14:16, position: 'relative'}}>
        {etapas.map((e,i)=>(
          <MBCard key={i} mobile={mobile}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16}}>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?40:56, color: MB.azul, lineHeight: 0.9, letterSpacing: '-0.04em'}}>{e.n}</div>
              <div style={{padding: '3px 10px', border: `1px solid ${MB.ouro}`, color: MB.ouro, fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.15em'}}>{e.time}</div>
            </div>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?22:24, color: MB.paper, letterSpacing: '-0.01em'}}>{e.t}</div>
            <div style={{width: 24, height: 2, background: MB.vinho, margin: '10px 0 12px'}}/>
            <div style={{fontFamily: FONT.sans, fontSize: 13, color: MB.muted, lineHeight: 1.55}}>{e.d}</div>
          </MBCard>
        ))}
      </div>
    </section>
  );
}

function HomePage({ mobile, setPage }) {
  return (
    <div>
      <HomeHero mobile={mobile} setPage={setPage}/>
      <HomeProdutos mobile={mobile} setPage={setPage}/>
      <HomeGaleria mobile={mobile}/>
      <HomeDepoimentos mobile={mobile}/>
      <HomeLogos mobile={mobile}/>
      <HomeProcesso mobile={mobile}/>
    </div>
  );
}

window.HomePage = HomePage;
