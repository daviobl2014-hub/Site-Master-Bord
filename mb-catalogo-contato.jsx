// mb-catalogo-contato.jsx — Catálogo + Contato

const CATALOGO_ITEMS = [
  {t:'Etiqueta Cetim 12mm',cat:'etiqueta',c:MB.azul,cod:'ET‑012'},
  {t:'Etiqueta Damasco 16mm',cat:'etiqueta',c:MB.azul,cod:'ET‑016'},
  {t:'Etiqueta Nylon 22mm',cat:'etiqueta',c:MB.azul,cod:'ET‑022'},
  {t:'Bordado Plano',cat:'bordado',c:MB.vinho,cod:'BR‑001'},
  {t:'Bordado 3D',cat:'bordado',c:MB.vinho,cod:'BR‑003'},
  {t:'Bordado Matelassê',cat:'bordado',c:MB.vinho,cod:'BR‑005'},
  {t:'Patch Termocolante',cat:'bordado',c:MB.vinhoGlow,cod:'BR‑007'},
  {t:'Tag Couro Laser',cat:'laser',c:MB.ouro,cod:'LA‑001'},
  {t:'Tag Sintético',cat:'laser',c:MB.ouro,cod:'LA‑003'},
  {t:'Aplique Acrílico',cat:'laser',c:MB.ouro,cod:'LA‑005'},
  {t:'Patch Corte Livre',cat:'laser',c:MB.ouroDim,cod:'LA‑007'},
  {t:'Composto ET + LA',cat:'misto',c:MB.azulGlow,cod:'MX‑001'},
];

function CatalogoPage({ mobile, setPage }) {
  const [filter, setFilter] = React.useState('todos');
  const filtros = [['todos','Todos'],['etiqueta','Etiquetas'],['bordado','Bordados'],['laser','Laser'],['misto','Compostos']];
  const items = filter==='todos' ? CATALOGO_ITEMS : CATALOGO_ITEMS.filter(i => i.cat===filter);
  return (
    <div>
      <section style={{background: MB.bg, color: MB.paper, padding: mobile?'48px 20px':'72px 48px', position: 'relative', overflow: 'hidden'}}>
        <MBTechGrid opacity={0.2}/>
        <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'1.3fr 1fr', gap: mobile?24:40, alignItems: 'end'}}>
          <div>
            <MBTag mobile={mobile}>CATÁLOGO COMPLETO · {CATALOGO_ITEMS.length} ITENS</MBTag>
            <div style={{height: 16}}/>
            <h1 style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?44:96, margin: 0, lineHeight: 0.9, letterSpacing: '-0.02em'}}>O <span style={{color: MB.ouro}}>acervo</span><br/>da Master Bord.</h1>
          </div>
          <p style={{fontFamily: FONT.sans, fontSize: mobile?14:16, color: MB.paperDim, lineHeight: 1.6, margin: 0}}>
            Referências do que já produzimos. Clique em qualquer item para pedir amostra ou baixar a ficha técnica completa em PDF.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section style={{background: MB.bgDeep, borderTop: `1px solid ${MB.line}`, borderBottom: `1px solid ${MB.line}`, padding: mobile?'16px 20px':'20px 48px', position: 'sticky', top: mobile?72:56, zIndex: 50}}>
        <div style={{display: 'flex', gap: mobile?8:12, alignItems: 'center', overflowX: 'auto', flexWrap: mobile?'nowrap':'wrap'}}>
          <span style={{fontFamily: FONT.mono, fontSize: 10, color: MB.ouro, letterSpacing: '0.25em', textTransform: 'uppercase', whiteSpace: 'nowrap'}}>FILTRAR →</span>
          {filtros.map(([k,l])=>(
            <button key={k} onClick={() => setFilter(k)} style={{padding: mobile?'6px 12px':'8px 16px', background: filter===k?MB.paper:'transparent', color: filter===k?MB.bg:MB.muted, border: `1px solid ${filter===k?MB.paper:MB.line}`, fontFamily: FONT.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap'}}>{l}</button>
          ))}
          <div style={{flex: 1}}/>
          <span style={{fontFamily: FONT.mono, fontSize: 11, color: MB.muted, whiteSpace: 'nowrap'}}>{items.length} itens</span>
        </div>
      </section>

      {/* Grid */}
      <section style={{background: MB.bgSoft, padding: mobile?'32px 20px 56px':'48px 48px 96px'}}>
        <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr 1fr':'repeat(4, 1fr)', gap: mobile?12:18}}>
          {items.map((it,i)=>(
            <MBCard key={it.cod} mobile={mobile} accent={it.c} style={{padding: 0, overflow: 'hidden', cursor: 'pointer'}}>
              <MBImage color={it.c} ratio="1/1" label={it.cod} angle={i*22}/>
              <div style={{padding: mobile?14:18}}>
                <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase'}}>{it.cat}</div>
                <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?16:18, color: MB.paper, marginTop: 6, letterSpacing: '-0.01em', lineHeight: 1.15}}>{it.t}</div>
                <div style={{marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FONT.mono, fontSize: 10, color: it.c, letterSpacing: '0.15em'}}>
                  <span>AMOSTRA →</span>
                  <span style={{color: MB.muted}}>{it.cod}</span>
                </div>
              </div>
            </MBCard>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContatoPage({ mobile }) {
  return (
    <div>
      <section style={{background: MB.bg, color: MB.paper, padding: mobile?'48px 20px 72px':'72px 48px 96px', position: 'relative', overflow: 'hidden'}}>
        <MBTechGrid opacity={0.2}/>
        <div style={{position: 'absolute', top: '30%', left: '-10%', width: 600, height: 600, background: `radial-gradient(circle, ${MB.vinho}22, transparent 60%)`, filter: 'blur(40px)'}}/>

        <div style={{position: 'relative', display: 'grid', gridTemplateColumns: mobile?'1fr':'1fr 1fr', gap: mobile?32:56, alignItems: 'start'}}>
          {/* Texto + info */}
          <div>
            <MBTag mobile={mobile}>CONTATO · RESPOSTA EM 2H</MBTag>
            <div style={{height: 16}}/>
            <h1 style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?44:96, margin: 0, lineHeight: 0.9, letterSpacing: '-0.02em'}}>Vamos <span style={{color: MB.azul}}>conversar</span> sobre sua <span style={{color: MB.vinho}}>peça</span>.</h1>
            <p style={{fontFamily: FONT.sans, fontSize: mobile?15:17, color: MB.paperDim, lineHeight: 1.6, marginTop: 20, maxWidth: 460}}>
              Envie sua arte, prazo e volume. Retornamos em até 2h com uma proposta inicial e cronograma de amostra.
            </p>

            <div style={{marginTop: mobile?32:48, display: 'flex', flexDirection: 'column', gap: 16}}>
              {[
                ['WHATSAPP','(11) 9 0000‑0000',MB.green],
                ['E-MAIL','contato@masterbord.com',MB.azul],
                ['ENDEREÇO','R. da Indústria, 1995 · São Paulo · SP',MB.ouro],
                ['HORÁRIO','Seg–Sex · 08h às 18h',MB.vinho],
              ].map(([k,v,c],i)=>(
                <div key={i} style={{display: 'grid', gridTemplateColumns: '100px 1fr', gap: 20, padding: '14px 0', borderBottom: `1px dashed ${MB.line}`, alignItems: 'center'}}>
                  <div style={{fontFamily: FONT.mono, fontSize: 10, color: c, letterSpacing: '0.25em'}}>{k}</div>
                  <div style={{fontFamily: FONT.sans, fontSize: mobile?14:15, color: MB.paper, fontWeight: 500}}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <MBCard mobile={mobile} accent={MB.vinho} style={{padding: mobile?24:32}}>
            <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.ouro, letterSpacing: '0.25em'}}>FORMULÁRIO · ORÇAMENTO</div>
            <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: mobile?22:28, color: MB.paper, marginTop: 8, marginBottom: 24, letterSpacing: '-0.01em'}}>Pedir orçamento</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              {[['Nome','text'],['E-mail','email'],['Empresa','text'],['Telefone / WhatsApp','tel']].map(([l,t],i)=>(
                <div key={i}>
                  <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6}}>{l}</div>
                  <input type={t} style={{width: '100%', padding: '12px 14px', background: MB.bgDeep, border: `1px solid ${MB.line}`, color: MB.paper, fontFamily: FONT.sans, fontSize: 14, outline: 'none', boxSizing: 'border-box'}}/>
                </div>
              ))}
              <div>
                <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6}}>Produto de interesse</div>
                <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
                  {['Etiqueta','Bordado','Laser'].map((p,i)=>(
                    <label key={i} style={{padding: '8px 14px', background: MB.bgDeep, border: `1px solid ${MB.line}`, color: MB.paperDim, fontFamily: FONT.sans, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8}}>
                      <input type="checkbox" style={{accentColor: MB.vinho}}/>{p}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6}}>Mensagem</div>
                <textarea rows={4} placeholder="Conte sobre a peça, tecido, volume e prazo." style={{width: '100%', padding: '12px 14px', background: MB.bgDeep, border: `1px solid ${MB.line}`, color: MB.paper, fontFamily: FONT.sans, fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'vertical'}}/>
              </div>
              <MBButton mobile={mobile} variant="primary" style={{justifyContent: 'center', marginTop: 6}}>Enviar orçamento →</MBButton>
              <div style={{fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.15em', textAlign: 'center'}}>SEUS DADOS SÃO CONFIDENCIAIS · LGPD</div>
            </div>
          </MBCard>
        </div>
      </section>

      {/* Mapa placeholder */}
      <section style={{background: MB.bgSoft, padding: mobile?'56px 20px':'80px 48px'}}>
        <div style={{marginBottom: 24}}>
          <MBTag mobile={mobile}>LOCALIZAÇÃO · ZONA INDUSTRIAL SP</MBTag>
          <div style={{height: 12}}/>
          <MBTitle mobile={mobile} size="md">Venha conhecer a <span style={{color: MB.ouro}}>fábrica</span>.</MBTitle>
        </div>
        <MBImage color={MB.azul} ratio="16/6" label="MAP · SP / -23.55 / -46.63" angle={0}>
          <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
            <div style={{width: 20, height: 20, borderRadius: '50%', background: MB.vinho, border: `3px solid ${MB.paper}`, boxShadow: `0 0 0 4px ${MB.vinho}60`}}/>
            <div style={{padding: '6px 12px', background: MB.bgDeep, border: `1px solid ${MB.vinho}`, fontFamily: FONT.mono, fontSize: 11, color: MB.paper, letterSpacing: '0.15em'}}>MASTER BORD</div>
          </div>
        </MBImage>
      </section>
    </div>
  );
}

Object.assign(window, { CatalogoPage, ContatoPage });
