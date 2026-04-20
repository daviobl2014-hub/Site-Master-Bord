// mb-produtos.jsx — Páginas de detalhe de produto

const PRODUTOS_DATA = {
  etiqueta: {
    k: 'ET', n: 'Etiquetas Tecidas', c: MB.azul, num: '01',
    hero: 'Alta definição em cada fio.',
    lead: 'As etiquetas tecidas personalizadas são ideais para agregar valor e identidade às suas peças, transmitindo profissionalismo e cuidado em cada detalhe. Produzidas com alta qualidade e durabilidade, não desbotam nem desgastam facilmente.',
    specs: [['tecido base','cetim · damasco · nylon'],['largura','12 / 16 / 22 mm'],['cores','até 8 simultâneas'],['definição','1200 dpi'],['acabamento','corte quente · laser'],['lote mínimo','100 unidades'],['prazo','5 a 10 dias úteis'],['amostra','48h']],
    uses: ['Roupas de autor','Uniformes','Acessórios','Decoração','Produtos artesanais'],
  },
  bordado: {
    k: 'BR', n: 'Bordado', c: MB.vinho, num: '02',
    hero: 'Pontos densos, peça durável.',
    lead: 'Os bordados personalizados são a escolha para quem busca sofisticação, durabilidade e acabamento de alto padrão. Utilizamos teares Barudan profissionais com técnicas precisas — o bordado mantém aparência mesmo após várias lavagens.',
    specs: [['área máx.','20 × 20 cm'],['cores','paleta Pantone'],['densidade','até 4.000 pts/cm²'],['tecido','malha · jeans · veludo · sarja'],['tipos','bordado plano · 3D · matelassê'],['lote mínimo','50 peças'],['prazo','5 a 12 dias úteis'],['amostra','48h'],],
    uses: ['Uniformes corporativos','Jaquetas','Bonés','Camisas polo','Peças promocionais'],
  },
  laser: {
    k: 'LA', n: 'Corte a Laser', c: MB.ouro, num: '03',
    hero: 'Precisão 0,1mm, bordas seladas.',
    lead: 'O corte a laser automatizado oferece precisão extrema e acabamento impecável, ideal para produções que exigem qualidade e padronização. Bordas limpas, alta definição e excelente repetibilidade — peça a peça.',
    specs: [['precisão','0,1 mm'],['área útil','90 × 60 cm'],['materiais','couro · sintético · tecido · acrílico'],['espessura','0,1 a 6 mm'],['formas','livres · vetoriais'],['acabamento','bordas seladas'],['lote mínimo','50 peças'],['prazo','3 a 8 dias úteis']],
    uses: ['Patches','Tags pendentes','Rótulos','Apliques','Embalagens premium'],
  },
};

function ProdutoHero({ p, mobile, setPage }) {
  return (
    <section style={{background: MB.bg, color: MB.paper, padding: mobile?'48px 20px 56px':'72px 48px 96px', position: 'relative', overflow: 'hidden'}}>
      <MBTechGrid opacity={0.2}/>
      <div style={{position: 'absolute', top: '20%', left: '-5%', width: 500, height: 500, background: `radial-gradient(circle, ${p.c}28, transparent 60%)`, filter: 'blur(40px)'}}/>

      {/* breadcrumb */}
      <div style={{position: 'relative', fontFamily: FONT.mono, fontSize: mobile?10:11, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: mobile?20:32}}>
        <span onClick={() => setPage('home')} style={{cursor:'pointer'}}>Home</span> <span style={{color: MB.ouro}}>/</span> <span onClick={() => setPage('produtos')} style={{cursor:'pointer'}}>Produtos</span> <span style={{color: MB.ouro}}>/</span> <span style={{color: p.c}}>{p.n}</span>
      </div>

      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'1.3fr 1fr', gap: mobile?32:56, alignItems: 'start'}}>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: mobile?18:28}}>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?54:80, color: p.c, lineHeight: 0.9, letterSpacing: '-0.04em'}}>{p.k}</div>
            <div>
              <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.25em'}}>PRODUTO {p.num}/03</div>
              <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.ouro, letterSpacing: '0.25em', marginTop: 4}}>SPEC · {p.k}-001</div>
            </div>
          </div>
          <h1 style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?44:88, lineHeight: 0.92, margin: 0, letterSpacing: '-0.02em', color: MB.paper}}>{p.n}<span style={{color: p.c}}>.</span></h1>
          <div style={{fontFamily: FONT.serif, fontStyle: 'italic', fontSize: mobile?18:26, color: p.c, marginTop: 14}}>— {p.hero}</div>
          <p style={{fontFamily: FONT.sans, fontSize: mobile?15:17, color: MB.paperDim, lineHeight: 1.6, margin: `${mobile?22:32}px 0 0`, maxWidth: 560}}>{p.lead}</p>
          <div style={{display: 'flex', gap: 12, marginTop: mobile?24:36, flexWrap: 'wrap'}}>
            <MBButton mobile={mobile} variant="primary" onClick={() => setPage('contato')}>Pedir amostra →</MBButton>
            <MBButton mobile={mobile} variant="ghost">Baixar catálogo PDF</MBButton>
          </div>
        </div>

        {/* Hero image */}
        <MBImage color={p.c} ratio="3/4" label={`SAMPLE ${p.k}-001`} angle={30}>
          <div style={{position: 'absolute', bottom: 20, left: 20, right: 20, padding: '10px 14px', background: MB.bgDeep, border: `1px solid ${p.c}`}}>
            <div style={{fontFamily: FONT.mono, fontSize: 10, color: p.c, letterSpacing: '0.2em'}}>LOTE #2026‑04‑{p.num}</div>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?16:20, color: MB.paper, marginTop: 4}}>Pronto pra produzir.</div>
          </div>
        </MBImage>
      </div>
    </section>
  );
}

function ProdutoSpecs({ p, mobile }) {
  return (
    <section style={{background: MB.bgSoft, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'1fr 1.4fr', gap: mobile?28:56, alignItems: 'start'}}>
        <div>
          <MBTag mobile={mobile}>01 / ESPECIFICAÇÕES TÉCNICAS</MBTag>
          <div style={{height: 12}}/>
          <MBTitle mobile={mobile} size="lg">A ficha <span style={{color: p.c}}>técnica</span>.</MBTitle>
          <p style={{fontFamily: FONT.sans, fontSize: 14, color: MB.muted, marginTop: 16, lineHeight: 1.6, maxWidth: 320}}>Valores-padrão. Projetos fora desses limites: converse com a equipe de engenharia.</p>
        </div>
        <MBCard mobile={mobile} accent={p.c}>
          <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'1fr 1fr', gap: mobile?0:32}}>
            <div>
              {p.specs.slice(0, Math.ceil(p.specs.length/2)).map(([k,v],i)=>(<MBSpecRow key={i} k={k} v={v}/>))}
            </div>
            <div>
              {p.specs.slice(Math.ceil(p.specs.length/2)).map(([k,v],i)=>(<MBSpecRow key={i} k={k} v={v}/>))}
            </div>
          </div>
          <div style={{marginTop: 20, paddingTop: 16, borderTop: `1px solid ${MB.line}`, fontFamily: FONT.mono, fontSize: 11, color: MB.muted, display: 'flex', justifyContent: 'space-between'}}>
            <span>Atualizado: 2026‑04</span>
            <span style={{color: p.c}}>v 2.6</span>
          </div>
        </MBCard>
      </div>
    </section>
  );
}

function ProdutoAplicacoes({ p, mobile }) {
  return (
    <section style={{background: MB.bg, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?24:40}}>
        <MBTag mobile={mobile}>02 / APLICAÇÕES</MBTag>
        <div style={{height: 12}}/>
        <MBTitle mobile={mobile} size="lg">Onde <span style={{color: p.c}}>vai bem</span>.</MBTitle>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr 1fr':'repeat(5, 1fr)', gap: mobile?12:16}}>
        {p.uses.map((u,i)=>(
          <MBImage key={i} color={p.c} ratio="1/1" label={`0${i+1}/0${p.uses.length}`} angle={i*25}>
            <div style={{position: 'absolute', bottom: mobile?10:14, left: mobile?10:14, right: mobile?10:14, fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?14:17, color: MB.paper, lineHeight: 1.1, letterSpacing: '-0.01em'}}>{u}</div>
          </MBImage>
        ))}
      </div>
    </section>
  );
}

function ProdutoRelacionados({ p, mobile, setPage }) {
  const outros = Object.entries(PRODUTOS_DATA).filter(([k]) => k !== Object.keys(PRODUTOS_DATA).find(x => PRODUTOS_DATA[x] === p));
  return (
    <section style={{background: MB.bgSoft, color: MB.paper, padding: mobile?'56px 20px':'96px 48px'}}>
      <div style={{marginBottom: mobile?24:40}}>
        <MBTag mobile={mobile}>03 / OUTROS PRODUTOS</MBTag>
        <div style={{height: 12}}/>
        <MBTitle mobile={mobile} size="lg">Combine os <span style={{color: MB.ouro}}>ofícios</span>.</MBTitle>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'1fr 1fr', gap: mobile?16:20}}>
        {outros.map(([k, o],i)=>(
          <MBCard key={i} mobile={mobile} accent={o.c} onClick={() => setPage('produto-'+k)} style={{cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr 120px', gap: 20, alignItems: 'center'}}>
            <div>
              <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em'}}>PRODUTO {o.num}/03</div>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?26:32, color: MB.paper, marginTop: 6, letterSpacing: '-0.01em'}}>{o.n}</div>
              <div style={{marginTop: 14, fontFamily: FONT.mono, fontSize: 11, color: o.c, letterSpacing: '0.15em', textTransform: 'uppercase'}}>VER PRODUTO →</div>
            </div>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?56:72, color: o.c, textAlign: 'right', lineHeight: 1, letterSpacing: '-0.04em'}}>{o.k}</div>
          </MBCard>
        ))}
      </div>
    </section>
  );
}

function ProdutosIndex({ mobile, setPage }) {
  return (
    <div>
      <section style={{background: MB.bg, color: MB.paper, padding: mobile?'48px 20px':'72px 48px'}}>
        <MBTag mobile={mobile}>CATÁLOGO DE OFÍCIOS</MBTag>
        <div style={{height: 16}}/>
        <h1 style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?48:112, margin: 0, lineHeight: 0.9, letterSpacing: '-0.02em'}}>Três <span style={{color: MB.azul}}>produtos</span>,<br/>um <span style={{color: MB.vinho}}>padrão</span>.</h1>
      </section>
      <section style={{background: MB.bgSoft, padding: mobile?'40px 20px 72px':'56px 48px 96px'}}>
        <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'repeat(3, 1fr)', gap: mobile?16:20}}>
          {Object.entries(PRODUTOS_DATA).map(([k, p], i) => (
            <MBCard key={i} mobile={mobile} accent={p.c} onClick={() => setPage('produto-'+k)} style={{cursor: 'pointer'}}>
              <MBImage color={p.c} ratio="5/4" label={`SAMPLE ${p.k}`} angle={i*40} style={{marginBottom: 20}}/>
              <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em'}}>PRODUTO {p.num}/03</div>
              <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?26:32, color: MB.paper, marginTop: 8, letterSpacing: '-0.01em'}}>{p.n}</div>
              <div style={{fontFamily: FONT.serif, fontStyle: 'italic', fontSize: 15, color: p.c, marginTop: 6}}>{p.hero}</div>
              <div style={{marginTop: 18, fontFamily: FONT.mono, fontSize: 11, color: p.c, letterSpacing: '0.15em', textTransform: 'uppercase'}}>VER DETALHES →</div>
            </MBCard>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProdutoPage({ id, mobile, setPage }) {
  const p = PRODUTOS_DATA[id];
  if (!p) return <ProdutosIndex mobile={mobile} setPage={setPage}/>;
  return (
    <div>
      <ProdutoHero p={p} mobile={mobile} setPage={setPage}/>
      <ProdutoSpecs p={p} mobile={mobile}/>
      <ProdutoAplicacoes p={p} mobile={mobile}/>
      <ProdutoRelacionados p={p} mobile={mobile} setPage={setPage}/>
    </div>
  );
}

Object.assign(window, { ProdutosIndex, ProdutoPage, PRODUTOS_DATA });
