// Variação 1 — Editorial Couture
// Paleta: preto-tinta + vinho profundo + ouro envelhecido
// Tipografia monumental, mosaico assimétrico, fios de costura

const V1 = {
  ink: 'oklch(0.16 0.01 270)',
  inkSoft: 'oklch(0.28 0.01 270)',
  paper: 'oklch(0.97 0.008 85)',
  paperSoft: 'oklch(0.93 0.01 85)',
  azul: 'oklch(0.42 0.09 255)',
  vinho: 'oklch(0.38 0.11 25)',
  ouro: 'oklch(0.72 0.09 75)',
  muted: 'oklch(0.55 0.01 270)',
};

function EditorialHero({ mobile }) {
  return (
    <section style={{
      background: V1.paper,
      padding: mobile ? '24px 20px 40px' : '28px 56px 64px',
      borderBottom: `1px solid ${V1.ink}`,
      position: 'relative',
    }}>
      {/* topo: meta info estilo revista */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingBottom: mobile ? 18 : 24,
        borderBottom: `1px solid ${V1.ink}`,
        fontFamily: '"Inter", sans-serif', fontSize: mobile ? 9 : 11,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: V1.ink,
      }}>
        <span>Est. 1995 · Brasil</span>
        <span style={{ display: mobile ? 'none' : 'inline' }}>Issue N.º 001 · Etiquetas & Bordados</span>
        <span>ABVTEX Certified</span>
      </div>

      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: mobile ? '16px 0 20px' : '20px 0 32px',
        fontFamily: 'Inter, sans-serif', fontSize: mobile ? 10 : 13,
        fontWeight: 500, color: V1.ink,
      }}>
        <div style={{ display: 'flex', gap: mobile ? 14 : 28 }}>
          <a style={{color: V1.ink, borderBottom: `2px solid ${V1.vinho}`, paddingBottom: 2}}>Home</a>
          <a style={{color: V1.inkSoft}}>Sobre</a>
          <a style={{color: V1.inkSoft}}>Produtos</a>
          {!mobile && <a style={{color: V1.inkSoft}}>Catálogo</a>}
        </div>
        <div style={{
          padding: mobile ? '6px 10px' : '10px 18px',
          border: `1px solid ${V1.ink}`,
          fontSize: mobile ? 9 : 11, letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>Solicitar orçamento →</div>
      </nav>

      {/* Tipografia monumental: Master / Bord em colunas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1.1fr 1fr',
        gap: mobile ? 24 : 40,
        marginTop: mobile ? 8 : 16,
        alignItems: 'center',
      }}>
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: mobile ? 10 : 12,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: V1.vinho, marginBottom: mobile ? 12 : 20, fontWeight: 600,
          }}>— A arte de identificar uma marca</p>
          <h1 style={{
            fontFamily: '"Playfair Display", serif', fontWeight: 400,
            fontSize: mobile ? 72 : 148, lineHeight: 0.88, letterSpacing: '-0.02em',
            margin: 0, color: V1.ink,
          }}>
            <span style={{ color: V1.azul, fontFamily: 'Bauhaus, "Playfair Display", serif', fontWeight: 700, display: 'block' }}>
              Master
            </span>
            <span style={{ color: V1.vinho, fontFamily: 'Bauhaus, "Playfair Display", serif', fontWeight: 700, fontStyle: 'italic', marginLeft: mobile ? 30 : 80, display: 'block' }}>
              Bord.
            </span>
          </h1>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 18,
            marginTop: mobile ? 20 : 32, paddingTop: mobile ? 16 : 24,
            borderTop: `1px solid ${V1.ink}`,
          }}>
            <p style={{
              fontFamily: '"Playfair Display", serif', fontSize: mobile ? 18 : 26,
              fontStyle: 'italic', color: V1.ink, margin: 0, lineHeight: 1.2, flex: 1,
            }}>Etiquetas tecidas, bordados e corte a laser para quem entende que o acabamento é a assinatura.</p>
          </div>
        </div>

        {/* Coluna direita: placeholder editorial + dados */}
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '3/4', background: `linear-gradient(135deg, ${V1.vinho} 0%, ${V1.ink} 100%)`,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `repeating-linear-gradient(45deg, transparent 0 8px, rgba(255,255,255,0.04) 8px 9px)`,
            }}/>
            <div style={{
              position: 'absolute', top: mobile ? 16 : 28, left: mobile ? 16 : 28,
              fontFamily: 'monospace', fontSize: mobile ? 9 : 11,
              color: V1.paper, letterSpacing: '0.2em', opacity: 0.7,
            }}>[ editorial · etiqueta tecida 01 ]</div>
            <div style={{
              position: 'absolute', bottom: mobile ? 20 : 36, left: mobile ? 16 : 28, right: mobile ? 16 : 28,
            }}>
              <div style={{
                fontFamily: 'Bauhaus, "Playfair Display", serif', fontWeight: 700,
                color: V1.paper, fontSize: mobile ? 48 : 86, lineHeight: 0.9,
              }}>MB</div>
              <div style={{
                width: 40, height: 1, background: V1.ouro, margin: '12px 0',
              }}/>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: mobile ? 10 : 12,
                color: V1.paper, letterSpacing: '0.2em', textTransform: 'uppercase',
              }}>Coleção Couture · 2026</div>
            </div>
          </div>

          {/* Stats flutuantes */}
          <div style={{
            position: mobile ? 'static' : 'absolute',
            marginTop: mobile ? 20 : 0,
            top: mobile ? undefined : -20, right: mobile ? undefined : -28,
            background: V1.paper, border: `1px solid ${V1.ink}`,
            padding: mobile ? '14px 16px' : '18px 22px', minWidth: 140,
          }}>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontSize: mobile ? 38 : 52,
              color: V1.vinho, lineHeight: 1, fontWeight: 500,
            }}>30<span style={{color: V1.ouro}}>.</span></div>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: mobile ? 9 : 10,
              letterSpacing: '0.25em', textTransform: 'uppercase', color: V1.inkSoft,
              marginTop: 6,
            }}>Anos entregando<br/>qualidade indiscutível</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialProdutos({ mobile }) {
  const produtos = [
    { n: '01', nome: 'Etiquetas Tecidas', desc: 'Definição em cada fio. Damasco, cetim, nylon, algodão — acabamento impecável.', cor: V1.azul },
    { n: '02', nome: 'Bordados', desc: 'Pontos firmes em qualquer tecido. Personalização profissional com cores fiéis.', cor: V1.vinho },
    { n: '03', nome: 'Corte a Laser', desc: 'Bordas limpas, cortes arredondados ou retos, precisão absoluta.', cor: V1.ink },
  ];
  return (
    <section style={{ background: V1.ink, color: V1.paper, padding: mobile ? '40px 20px' : '72px 56px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: mobile ? 28 : 48, paddingBottom: 20, borderBottom: `1px solid ${V1.ouro}`,
      }}>
        <div>
          <div style={{fontFamily: 'Inter', fontSize: mobile?9:11, letterSpacing: '0.3em', color: V1.ouro, marginBottom: 8}}>—  ATELIÊ</div>
          <h2 style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400, fontSize: mobile?32:56, margin: 0, lineHeight: 1}}>Três ofícios,<br/>um padrão.</h2>
        </div>
        {!mobile && <div style={{fontFamily: 'Inter', fontSize: 12, color: V1.muted, maxWidth: 240, textAlign: 'right'}}>Cada peça passa por quatro pares de olhos antes de sair da fábrica.</div>}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
        gap: mobile ? 20 : 32,
      }}>
        {produtos.map((p, i) => (
          <div key={i} style={{
            background: V1.inkSoft, padding: mobile ? 24 : 32,
            position: 'relative', minHeight: mobile ? 260 : 380,
            display: 'flex', flexDirection: 'column',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
          }}>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontSize: mobile?56:96,
              color: p.cor, lineHeight: 0.9, fontWeight: 400, fontStyle: 'italic',
            }}>{p.n}</div>
            <div style={{
              marginTop: 'auto', paddingTop: mobile?16:24,
            }}>
              <div style={{
                fontFamily: 'Bauhaus, "Playfair Display", serif', fontWeight: 700,
                fontSize: mobile?24:32, color: V1.paper, letterSpacing: '-0.01em',
              }}>{p.nome}</div>
              <div style={{
                width: 28, height: 2, background: V1.ouro, margin: '14px 0',
              }}/>
              <div style={{
                fontFamily: 'Inter', fontSize: mobile?12:13, color: V1.muted, lineHeight: 1.5,
              }}>{p.desc}</div>
              <div style={{
                marginTop: mobile?14:20, fontFamily: 'Inter', fontSize: 11,
                letterSpacing: '0.25em', textTransform: 'uppercase', color: V1.ouro,
              }}>Ver coleção →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialGaleria({ mobile }) {
  // mosaico assimétrico tipo revista
  const items = [
    { t: 'Uniformes corporativos', tipo: 'Bordado aplicado', cor: V1.azul, wide: true },
    { t: 'Etiqueta cetim', tipo: 'Tecido acetinado', cor: V1.vinho },
    { t: 'Tag kraft', tipo: 'Corte a laser', cor: V1.ink },
    { t: 'Patch bordado', tipo: 'Borda overlock', cor: V1.ouro },
    { t: 'Label composição', tipo: 'Nylon satinado', cor: V1.inkSoft, wide: true },
  ];
  return (
    <section style={{background: V1.paperSoft, padding: mobile?'40px 20px':'72px 56px'}}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: mobile?24:40,
      }}>
        <div style={{flex: 1}}>
          <div style={{fontFamily: 'Inter', fontSize: mobile?9:11, letterSpacing: '0.3em', color: V1.vinho, marginBottom: 8, fontWeight: 600}}>— PORTFÓLIO</div>
          <h2 style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400, fontSize: mobile?32:56, margin: 0, color: V1.ink, lineHeight: 1}}>Trabalhos recentes.</h2>
        </div>
        <div style={{fontFamily: 'Inter', fontSize: mobile?10:12, color: V1.muted, borderLeft: `1px solid ${V1.ink}`, paddingLeft: 16}}>
          +120<br/>peças/mês
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(6, 1fr)',
        gridAutoRows: mobile ? '180px' : '200px',
        gap: mobile?10:14,
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            gridColumn: mobile ? 'span 1' : (it.wide ? 'span 3' : 'span 2'),
            gridRow: mobile ? 'span 1' : (i===0 ? 'span 2' : 'span 1'),
            background: it.cor, position: 'relative', overflow: 'hidden',
            color: V1.paper, padding: mobile?16:20,
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `repeating-linear-gradient(${i*30}deg, transparent 0 6px, rgba(255,255,255,0.06) 6px 7px)`,
            }}/>
            <div style={{position:'absolute', top:mobile?12:16, left:mobile?12:16, fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.15em', opacity: 0.6}}>
              0{i+1}/05
            </div>
            <div style={{position: 'relative'}}>
              <div style={{fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 4}}>{it.tipo}</div>
              <div style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?18:22, lineHeight: 1.1}}>{it.t}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialDepoimentos({ mobile }) {
  const deps = [
    { q: 'A Master Bord transformou a percepção da minha marca. A etiqueta virou parte do produto.', n: 'Clara Moretti', c: 'Fundadora, Atelier Clara M.' },
    { q: 'Pedido urgente em três dias, entrega com o mesmo capricho. Virou parceira fixa.', n: 'Rafael Teixeira', c: 'Sócio, Teixeira Jeans' },
    { q: 'Padronização que não vejo em nenhum outro fornecedor. Cada lote idêntico ao anterior.', n: 'Juliana Farah', c: 'Diretora de produção, Farah.' },
  ];
  return (
    <section style={{background: V1.paper, padding: mobile?'48px 20px':'96px 56px', borderTop: `1px solid ${V1.ink}`, borderBottom: `1px solid ${V1.ink}`}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{display: 'flex', gap: 20, alignItems: 'baseline', marginBottom: mobile?28:56}}>
          <div style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: mobile?44:80, color: V1.vinho, lineHeight: 0.8}}>“</div>
          <div>
            <div style={{fontFamily: 'Inter', fontSize: mobile?9:11, letterSpacing: '0.3em', color: V1.vinho, fontWeight: 600, marginBottom: 6}}>— QUEM CONFIA</div>
            <h2 style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400, fontSize: mobile?26:44, margin: 0, color: V1.ink, lineHeight: 1.05}}>Dos ateliês<br/>das pequenas marcas.</h2>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
          gap: mobile?20:40,
        }}>
          {deps.map((d, i) => (
            <div key={i} style={{
              borderTop: `1px solid ${V1.ink}`, paddingTop: mobile?20:28,
              display: 'flex', flexDirection: 'column',
            }}>
              <p style={{
                fontFamily: '"Playfair Display", serif', fontSize: mobile?18:22,
                lineHeight: 1.4, color: V1.ink, margin: 0, fontWeight: 400,
                fontStyle: 'italic',
              }}>“{d.q}”</p>
              <div style={{
                marginTop: 'auto', paddingTop: mobile?20:32,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${V1.vinho}, ${V1.ink})`,
                  border: `1px solid ${V1.ouro}`,
                }}/>
                <div>
                  <div style={{fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: V1.ink}}>{d.n}</div>
                  <div style={{fontFamily: 'Inter', fontSize: 11, color: V1.muted, marginTop: 2}}>{d.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialLogos({ mobile }) {
  const marcas = ['ATELIER M.', 'FARAH&CO', 'Teixeira', 'Nórdica', 'LINHA 14', 'Petit', 'Concreto', 'BRAVA'];
  return (
    <section style={{background: V1.ink, color: V1.paper, padding: mobile?'28px 20px':'40px 56px'}}>
      <div style={{
        display: 'flex', flexDirection: mobile?'column':'row', gap: mobile?14:24,
        alignItems: mobile?'flex-start':'center',
      }}>
        <div style={{
          fontFamily: 'Inter', fontSize: mobile?9:10, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: V1.ouro, whiteSpace: 'nowrap',
          borderRight: mobile ? 'none' : `1px solid ${V1.muted}`,
          paddingRight: mobile?0:24,
        }}>Marcas que confiam ↓</div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: mobile?14:32,
          flex: 1, alignItems: 'center',
        }}>
          {marcas.map((m,i)=> (
            <div key={i} style={{
              fontFamily: i%3===0 ? '"Playfair Display", serif' : (i%3===1 ? 'Bauhaus, sans-serif' : 'Inter'),
              fontStyle: i%3===0?'italic':'normal', fontWeight: i%3===1?700:500,
              fontSize: mobile?14:18, color: V1.paper, opacity: 0.75,
              letterSpacing: i%3===2 ? '0.15em':'0',
            }}>{m}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialProcesso({ mobile }) {
  const etapas = [
    { n: '01', t: 'Briefing', d: 'Você manda arte, tecido-alvo e prazo.' },
    { n: '02', t: 'Amostra', d: 'Em 48h enviamos peça física para aprovar.' },
    { n: '03', t: 'Produção', d: 'Aprovação, entra na linha. Padronização lote a lote.' },
    { n: '04', t: 'QA & Entrega', d: 'Inspeção 100%, embalagem dedicada, transporte monitorado.' },
  ];
  return (
    <section style={{background: V1.paper, padding: mobile?'48px 20px':'96px 56px'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{marginBottom: mobile?28:48}}>
          <div style={{fontFamily: 'Inter', fontSize: mobile?9:11, letterSpacing: '0.3em', color: V1.vinho, marginBottom: 8, fontWeight: 600}}>— DO BRIEFING À ENTREGA</div>
          <h2 style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400, fontSize: mobile?32:56, margin: 0, color: V1.ink, lineHeight: 1}}>Quatro passos, nenhum atalho.</h2>
        </div>

        <div style={{position: 'relative'}}>
          {/* Linha de costura contínua */}
          {!mobile && <div style={{
            position: 'absolute', top: 32, left: '6%', right: '6%',
            borderTop: `2px dashed ${V1.vinho}`,
          }}/>}
          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)',
            gap: mobile?28:24,
            position: 'relative',
          }}>
            {etapas.map((e,i)=>(
              <div key={i} style={{position: 'relative'}}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%', background: V1.paper,
                  border: `2px solid ${V1.ink}`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontSize: 24, color: V1.vinho, fontWeight: 500,
                  position: 'relative', zIndex: 1,
                }}>{e.n}</div>
                <div style={{fontFamily: 'Bauhaus, "Playfair Display", serif', fontWeight: 700, fontSize: mobile?22:26, color: V1.ink, marginTop: 18, letterSpacing: '-0.01em'}}>{e.t}</div>
                <div style={{fontFamily: 'Inter', fontSize: mobile?13:14, color: V1.muted, marginTop: 8, lineHeight: 1.5, maxWidth: 220}}>{e.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialFooter({ mobile }) {
  return (
    <section style={{background: V1.vinho, color: V1.paper, padding: mobile?'40px 20px':'72px 56px'}}>
      <div style={{display: 'grid', gridTemplateColumns: mobile?'1fr':'1.3fr 1fr', gap: mobile?24:48, alignItems: 'center'}}>
        <div>
          <div style={{fontFamily: 'Inter', fontSize: mobile?9:11, letterSpacing: '0.3em', color: V1.ouro, marginBottom: 12}}>— PRONTO PARA COMEÇAR</div>
          <h2 style={{fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400, fontSize: mobile?34:64, margin: 0, lineHeight: 1}}>Sua próxima etiqueta começa com uma conversa.</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{padding: mobile?'14px 18px':'20px 26px', background: V1.paper, color: V1.vinho, fontFamily: 'Inter', fontSize: mobile?13:15, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center'}}>Solicitar orçamento →</div>
          <div style={{padding: mobile?'12px 18px':'18px 26px', border: `1px solid ${V1.paper}`, fontFamily: 'Inter', fontSize: mobile?13:14, textAlign: 'center'}}>WhatsApp · (11) 0000‑0000</div>
        </div>
      </div>
    </section>
  );
}

function HomeEditorial({ mobile }) {
  return (
    <div style={{fontFamily: 'Inter, sans-serif'}}>
      <EditorialHero mobile={mobile}/>
      <EditorialProdutos mobile={mobile}/>
      <EditorialGaleria mobile={mobile}/>
      <EditorialDepoimentos mobile={mobile}/>
      <EditorialLogos mobile={mobile}/>
      <EditorialProcesso mobile={mobile}/>
      <EditorialFooter mobile={mobile}/>
    </div>
  );
}

window.HomeEditorial = HomeEditorial;
