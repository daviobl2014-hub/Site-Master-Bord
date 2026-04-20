// mb-sobre.jsx — Página Sobre

function SobreHero({ mobile }) {
  return (
    <section style={{background: MB.bg, color: MB.paper, padding: mobile?'56px 20px':'96px 48px', position: 'relative', overflow: 'hidden'}}>
      <MBTechGrid/>
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'1.2fr 1fr', gap: mobile?32:56, alignItems: 'end'}}>
        <div>
          <MBTag mobile={mobile}>SOBRE A MASTER BORD · EST. 1995</MBTag>
          <div style={{height: mobile?20:32}}/>
          <h1 style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?48:112, lineHeight: 0.88, margin: 0, letterSpacing: '-0.02em', color: MB.paper}}>
            Tradição,<br/><span style={{color: MB.azul}}>compromisso</span><br/>e <span style={{color: MB.vinho}}>qualidade</span>.
          </h1>
        </div>
        <p style={{fontFamily: FONT.sans, fontSize: mobile?15:17, color: MB.paperDim, lineHeight: 1.65, margin: 0}}>
          Desde 1995, a <strong style={{color: MB.paper}}>Master Bord</strong> transforma ideias em produtos de qualidade, com atendimento próximo e personalizado. Atendemos desde grandes marcas da moda até pequenas empresas e artesãos. Mais do que bordados e etiquetas, entregamos soluções que valorizam e destacam cada produto. <b style={{color: MB.ouro}}>O seu sucesso é o nosso também.</b>
        </p>
      </div>
    </section>
  );
}

function SobreTimeline({ mobile }) {
  const marcos = [
    { ano: '1995', t: 'Fundação', d: 'Primeira máquina de bordar, dois operadores, um galpão pequeno em São Paulo.' },
    { ano: '2003', t: 'Etiquetas tecidas', d: 'Primeiros teares Barudan. Produção em escala para marcas de moda.' },
    { ano: '2011', t: 'Certificação ABVTEX', d: 'Homologação oficial — abre portas para grandes redes varejistas.' },
    { ano: '2018', t: 'Corte a laser', d: 'Nova linha automatizada Mucad. Forma livre com precisão 0,1mm.' },
    { ano: '2026', t: 'Hoje', d: '120 mil peças/mês, 500+ clientes ativos, 3 ofícios sob o mesmo teto.' },
  ];
  return (
    <section style={{background: MB.bgSoft, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?32:56}}>
        <MBTag mobile={mobile}>01 / 30 ANOS</MBTag>
        <div style={{height: 12}}/>
        <MBTitle mobile={mobile} size="lg">A linha do <span style={{color: MB.ouro}}>tempo</span>.</MBTitle>
      </div>
      <div style={{position: 'relative'}}>
        {!mobile && <div style={{position: 'absolute', top: 32, left: '5%', right: '5%', height: 2, background: MB.line}}/>}
        <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(5, 1fr)', gap: mobile?20:16, position: 'relative'}}>
          {marcos.map((m,i)=>(
            <div key={i}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: mobile?10:16}}>
                <div style={{width: 12, height: 12, background: i===marcos.length-1?MB.vinho:MB.azul, border: `2px solid ${MB.bgSoft}`, boxShadow: `0 0 0 2px ${i===marcos.length-1?MB.vinho:MB.azul}`, borderRadius: '50%'}}/>
                {mobile && <div style={{height: 1, flex: 1, background: MB.line}}/>}
              </div>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?28:36, color: i===marcos.length-1?MB.vinho:MB.azul, lineHeight: 1, letterSpacing: '-0.02em'}}>{m.ano}</div>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?18:19, color: MB.paper, marginTop: 8, letterSpacing: '-0.01em'}}>{m.t}</div>
              <div style={{fontFamily: FONT.sans, fontSize: 13, color: MB.muted, lineHeight: 1.5, marginTop: 8}}>{m.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SobreCertificados({ mobile }) {
  const cards = [
    { t: 'Certificados ABVTEX', d: 'Homologados pela ABVTEX desde 2011, atendendo padrões internacionais de qualidade, rastreabilidade e responsabilidade social.', selo: 'ABVTEX', c: MB.azul },
    { t: 'Bordado profissional', d: 'Produzidos em diversos tecidos com teares Barudan. Padronização, bom acabamento e agilidade, mantendo qualidade em cada peça.', selo: 'BARUDAN', c: MB.vinho },
    { t: 'Etiquetas de precisão', d: 'Alta resistência e definição com acabamento super batido — excelente leitura, durabilidade e consistência de lote.', selo: 'MUCAD', c: MB.ouro },
    { t: 'Equipe qualificada', d: 'Equipe treinada, preparada para garantir eficiência, qualidade e bons resultados em cada etapa da produção.', selo: 'ISO', c: MB.azulGlow },
  ];
  return (
    <section style={{background: MB.bg, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?28:48}}>
        <MBTag mobile={mobile}>02 / CERTIFICAÇÕES</MBTag>
        <div style={{height: 12}}/>
        <MBTitle mobile={mobile} size="lg">Por que nos <span style={{color: MB.azul}}>escolhem</span>.</MBTitle>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(2, 1fr)', gap: mobile?16:20}}>
        {cards.map((c,i)=>(
          <MBCard key={i} mobile={mobile} accent={c.c} style={{display: 'grid', gridTemplateColumns: mobile?'80px 1fr':'120px 1fr', gap: mobile?18:28, alignItems: 'start'}}>
            <div style={{aspectRatio: '1/1', background: MB.bgDeep, border: `1px dashed ${c.c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?14:16, color: c.c, letterSpacing: '0.05em'}}>{c.selo}</div>
            <div>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?20:24, color: MB.paper, letterSpacing: '-0.01em'}}>{c.t}</div>
              <div style={{width: 32, height: 2, background: c.c, margin: '12px 0'}}/>
              <div style={{fontFamily: FONT.sans, fontSize: 13, color: MB.muted, lineHeight: 1.6}}>{c.d}</div>
            </div>
          </MBCard>
        ))}
      </div>
    </section>
  );
}

function SobreInfra({ mobile }) {
  return (
    <section style={{background: MB.bgSoft, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?28:48}}>
        <MBTag mobile={mobile}>03 / INFRAESTRUTURA</MBTag>
        <div style={{height: 12}}/>
        <MBTitle mobile={mobile} size="lg">Onde a peça <span style={{color: MB.vinho}}>acontece</span>.</MBTitle>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'1.4fr 1fr', gap: mobile?20:24}}>
        <MBImage color={MB.azul} ratio="16/10" label="PLANTA · 2400M²" angle={15}>
          <div style={{position: 'absolute', bottom: 20, left: 20, fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?28:40, color: MB.paper, letterSpacing: '-0.02em'}}>Chão de fábrica</div>
        </MBImage>
        <div style={{display: 'grid', gridTemplateRows: '1fr 1fr', gap: mobile?16:20}}>
          <MBImage color={MB.vinho} ratio="auto" label="TEARES · BARUDAN" angle={60} style={{height: mobile?160:'auto'}}/>
          <MBImage color={MB.ouro} ratio="auto" label="LASER · MUCAD" angle={110} style={{height: mobile?160:'auto'}}/>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr 1fr':'repeat(4, 1fr)', gap: mobile?12:20, marginTop: mobile?28:48, paddingTop: mobile?24:36, borderTop: `1px solid ${MB.line}`}}>
        {[['2.400','m² de planta'],['32','máquinas'],['48','colaboradores'],['120k','peças/mês']].map(([n,l],i)=>(
          <div key={i}>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?28:44, color: i%2?MB.vinho:MB.azul, lineHeight: 1, letterSpacing: '-0.02em'}}>{n}</div>
            <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 8}}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SobrePage({ mobile, setPage }) {
  return (
    <div>
      <SobreHero mobile={mobile}/>
      <SobreTimeline mobile={mobile}/>
      <SobreCertificados mobile={mobile}/>
      <SobreInfra mobile={mobile}/>
    </div>
  );
}

window.SobrePage = SobrePage;
