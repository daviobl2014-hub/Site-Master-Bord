# 📘 PROJETO MASTER BORD — STATUS GERAL

> **Arquivo de continuação entre sessões com Claude.**
> Envie este arquivo no início de cada nova conversa.
> **Última atualização:** 05/05/2026 (Sessão 7 — rodapé replicado + h1 da home virou lockup SVG)

---

## 🎯 OBJETIVO

Site institucional da **Master Bord** (etiquetas tecidas, bordados e corte a laser) em **HTML + CSS + JavaScript puro**. Sem frameworks, sem build tools. 8 páginas. Publicação no GitHub Pages.

---

## 👤 CONTEXTO

- **Davi** — dono de tecelagem em Petrópolis-RJ
- **Perfil:** dev iniciante-intermediário, aprende iterando visualmente
- **Estilo:** direto, sem rodeios
- **Idioma:** PT-BR

### Ambientes

- PC trabalho (Petrópolis): Windows 7 / Node 13
- Notebook casa: Windows 10 / Node 24
- Live Server VS Code + Chrome DevTools (dispositivo "Notebook 13" 1280×720)

### Git

- Repo: https://github.com/daviobl2014-hub/Site-Master-Bord
- `main` = site antigo publicado
- `nova-interface` = branch atual de desenvolvimento

---

## 📐 DECISÕES TÉCNICAS LOCKADAS

1. HTML + CSS + JS puro (Vite/React descartados)
2. Fluid design só desktop (≥900px) com `clamp()` — mobile preservado
3. Breakpoint único: 900px
4. Header/footer duplicados em cada HTML
5. CSS modular: `global.css` + `[pagina].css`
6. JS modular: `global.js` + `[pagina].js`
7. Google Maps via iframe
8. Formulário sem backend → WhatsApp pré-preenchido

---

## 🎨 IDENTIDADE VISUAL

### Cores (`:root` do `global.css`)

```
--mb-bg:#0F1116  --mb-bg-soft:#181B22  --mb-bg-deep:#10100A
--mb-card:#20242D  --mb-paper:#F2ECE0
--mb-azul:#4A8BD6  --mb-vinho:#C44B55  --mb-ouro:#D4A96A
--mb-muted:#8B8F99  --mb-line:#2E3340  --mb-green:#7FC291
```

Título home: `.titulo-master`#3276b9 / `.titulo-bord`#8c2d2e

### Fontes

Bauhaus (display) · Inter (UI) · JetBrains Mono (técnico) · Playfair Display (serif) · Font Awesome 6.5.0

### Estilo

Dark mode industrial, tags `[ TEXTO ]` via `::before/::after`, grid técnica de fundo, logo SVG inline.

---

## 🏗️ ESTRUTURA

```
master-bord/
├── index.html ✅ HOME refinada
├── sobre.html / produtos.html / produto-*.html (3) / catalogo.html / contato.html ✅
├── css/  global.css · index.css · sobre.css · produtos.css · produto.css · catalogo.css · contato.css
├── js/   global.js · index.js · catalogo.js · contato.js
└── img/  ia*.png · operador-*.png · et[1-5].jpg · br[1-5].jpg · la[1-5].jpg · clientes/
```

---

## ✅ TUDO QUE FOI FEITO

### Sessão 1 — Planejamento

Repo criado, JSX recebidos, decisão Vite/React (depois revertida).

### Sessão 2 — Fundação

Decisão final: HTML+CSS+JS puro. Home com 6 seções.

### Sessão 3 — 7 páginas restantes

Sobre, Produtos, 3 produto-\*, Catálogo, Contato. Truque `body[data-cor]` pros 3 produtos compartilharem CSS.

### Sessão 4 — Refinamentos visuais

- Fluid design desktop com `clamp()`
- Carrossel hero (3 slides, 8s, Ken Burns)
- Header com logo SVG, ícones FA, links sociais reais
- Stats reais (30+ anos, 10k+ clientes, 250+/mês)
- Galeria filtrada (15 imgs em 3 categorias com fade)
- Avatares depoimentos (fotos reais redondas + Instagram + tooltip)
- Logos clientes em círculos com tooltip hover
- Carrossel infinito de logos (32 = 16 + 16 cópia, JS com `getBoundingClientRect`)
- Mapa Google Maps real no Contato
- Bug do pino fake removido

### Sessão 5 — Carrossel de logos finalizado (HOJE)

**Problema:** "espaço preto" aparecia após a última logo (Rede D'or) antes da primeira (Dress To) reaparecer no wrap-around.

**Diagnóstico — bug real (matemático, não percepção):**
HTML tinha 16 logos × 2 cópias = **32 logos no DOM**. Mas em telas onde `viewport > larguraGrupo1`, o trilho de 32 logos termina ANTES de preencher a tela inteira no momento do reset. Resultado: espaço vazio visível à direita da Rede D'or do grupo 2 antes do reset acontecer.

Diagnósticos secundários (também aplicados, melhoram polimento):

- Gradientes laterais de 40px criavam fade-in/fade-out que parecia "delay"
- Velocidade lenta (50px/s) + margem larga deixavam o olho fixar no loop

**Correções aplicadas:**

- `js/index.js` — função `garantirLogosSuficientes()` clona o grupo de 16 logos automaticamente até o trilho ter `larguraGrupo1 + viewportWidth` de largura. Resolve o bug em qualquer viewport. **Esta é a correção principal.**
- `js/index.js` — velocidade `50` → `70` px/s
- `css/index.css` — gradientes laterais removidos (`display: none`)
- `css/index.css` — margem entre logos `clamp(16px, 2vw, 30px)` → `clamp(12px, 1.4vw, 20px)`

**Resultado:** loop infinito perfeito. Sem espaço vazio em nenhuma resolução. Wrap imperceptível.

### Sessão 6 — Certificados com selos SVG + hover do card (HOJE)

**Contexto:** Os 4 cards da seção `02 / CERTIFICAÇÕES` em `sobre.html` tinham só texto dentro do quadrado do selo (`ABVTEX`, `BARUDAN`, `MUCAD`, `ISO`). Os SVGs reais já existiam em `img/svg/` (commitados na sessão de Sobre/Timeline).

**Mudanças aplicadas:**

- `sobre.html` — Cada `.certificado-selo` ganhou `<img class="certificado-selo-img" />` apontando pro SVG correspondente:

  - Certificados ABVTEX → `img/svg/abvtex.svg`
  - Bordado profissional → `img/svg/BARUDAN.svg`
  - Etiquetas de precisão → `img/svg/MULLER.svg` (label trocado de MUCAD → Müller)
  - Equipe qualificada → `img/svg/QUALIDADE GARANTIDA.svg`

- `css/sobre.css` — `.certificado-selo` agora:

  - **Redondo** (`border-radius: 50%`) com `background: white` (Davi mudou de quadrado pra círculo manualmente)
  - `padding: 14px` + `overflow: hidden` pra imagem respirar dentro

- `css/sobre.css` — Nova classe `.certificado-selo-img` com `width/height: 100%`, `object-fit: contain` (mantém proporção do logo).

- `css/sobre.css` — **Hover destacando o card inteiro** (`.certificado-card:hover`):
  - Fundo `--mb-card` → `--mb-card-hover`
  - Border `--mb-line` → `--mb-paper-dim`
  - `transform: translateY(-3px)` (lift sutil)
  - `box-shadow: 0 14px 32px -18px rgba(0,0,0,.55)` (sombra suave)
  - `.accent-bar` engrossa de 3px → 5px e ganha glow `box-shadow: 0 0 28px currentColor` (cada card brilha na sua cor — azul/vinho/ouro/azul-glow — sem regras separadas, herdando via `currentColor`)
  - `.certificado-selo` muda borda tracejada → sólida no hover

**Resultado:** Selos com identidade visual real (logos das certificações), card inteiro reage como bloco único ao mouse, glow da accent-bar reforça a cor de cada certificado.

### Sessão 7 — Rodapé replicado + h1 da home virou lockup SVG (HOJE)

**Parte 1 — Coluna "Produtos" do rodapé replicada nas 7 páginas:**

Davi atualizou o rodapé em `index.html` (commit `d096801`) com a coluna Produtos envolta em `<div class="encurtar">` e itens novos. As outras 7 páginas estavam desatualizadas.

Aplicado em sobre/produtos/catalogo/contato/produto-bordado/produto-etiqueta/produto-laser:
```html
<div class="footer-col-title">Produtos</div>
<div class="encurtar">
  <ul>
    <li>Etiquetas Tecidas</li>
    <li>Bordados</li>
    <li>Corte a Laser</li>
    <li>Política de Troca e Devolução</li>
    <li>Políticas de Frete, Entrega, Pagamento e Garantia</li>
  </ul>
</div>
```

Bonus: meta description do `sobre.html` corrigida (1995 → 1994) que faltou no commit do rodapé.

**Parte 2 — H1 da home virou lockup SVG fiel à logo:**

Substituído o `<span class="titulo-master">Master</span><span class="titulo-bord">Bord</span>` por sistema de máscaras SVG apontando para os assets em `img/svg/`:
- `master.svg` no topo (azul `#3276b9`) cobre largura total
- `logo.svg` no canto inferior esquerdo (azul `#3276b9` — MESMA cor do master, NÃO vinho)
- `bord.svg` no canto inferior direito (vinho `#8c2d2e`)

**HTML novo** (`index.html`):
```html
<h1 class="titulo-principal" aria-label="Master Bord">
  <span class="titulo-master" role="img" aria-hidden="true"></span>
  <span class="titulo-row" aria-hidden="true">
    <span class="titulo-logo"></span>
    <span class="titulo-bord"></span>
  </span>
</h1>
```

**CSS técnica** (`css/index.css` linhas ~86-170):
- `mask-image: url('../img/svg/X.svg')` + `background-color: currentColor` — cor controlada via CSS, SVGs ficam intactos como assets puros.
- `aspect-ratio` em cada elemento bate com o viewBox real (505.67/124.83, 66.78/45.05, 239.53/94.69).
- Container width fluida: `clamp(280px, 38vw, 540px)`.
- Logo 35% / Bord 60% no row inferior + gap `clamp(8px, 1.4vw, 18px)`.
- Animação `titulo-fade-in` (só opacidade, sem scaleX) com delays escalonados 0s/0.2s/0.4s.
- `filter: drop-shadow(0 3px 12px rgba(0,0,0,0.55))` substitui o `text-shadow` original e segue o contorno do SVG.

**Ajuste fino de alinhamento (Davi finalizou manualmente):**
```css
.titulo-row {
  transform: translate(-4.3%, -1%); /* 🔥 fixa posição */
}
```
Translate em `%` é proporcional à largura do próprio `.titulo-row`, então **escala junto com o `clamp()` do container** — alinhamento se mantém em qualquer largura de tela (testado mentalmente em 280px / 400px / 540px, offset proporcional fica consistente).

**Resultado:** logo lockup fiel, com cores certas (logo azul como master, bord vinho), gap visível entre ícone e bord, sombra realçando do fundo escuro. Posição responsiva mantém alinhamento em qualquer viewport.

---

## 🚧 DADOS FICTÍCIOS A SUBSTITUIR

Marcados com `[SUBSTITUIR: X]`:

- [ ] EMAIL · RUA, NÚMERO · CEP · CNPJ

**Já reais:** ✅ Telefone (24) 2231-7666 · Petrópolis-RJ · @masterbordbordados (Insta+FB) · WhatsApp (5524223176660) · coordenadas mapa

**Confirmar com cliente:**

- [ ] Datas timeline (1995, 2003, 2011, 2018)
- [ ] Estatísticas (2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês)
- [ ] Depoimentos (Juliana Farah, Rafael Teixeira, Clara Moretti = inventados)

---

## 📍 PRÓXIMAS MISSÕES

1. **Aplicar fluid design nas outras 7 páginas** (replicar `@media min-width: 900px` + `clamp()` da home)
2. **Substituir dados fictícios** pelos reais (email, endereço, CEP, CNPJ, datas, stats, depoimentos)
3. **Limpar Font Awesome duplicado** no `index.html` (linhas ~14 e ~20-22)
4. **Testes finais** — 8 páginas em 1920×1080, 1280×720, 768px, 375px
5. **Deploy** — commit `nova-interface`, push, merge `main`, verificar Pages
6. _(Opcional)_ Paleta mais clara — só se cliente pedir

---

## 🐛 ARMADILHAS APRENDIDAS

- **Carrossel infinito CSS-only** quebra com qualquer padding/margin no track. Use JS com `getBoundingClientRect()`.
- **Carrossel infinito precisa de buffer dinâmico:** se `viewport > larguraGrupo1`, o trilho duplicado (2 cópias) NÃO é suficiente — aparece espaço vazio no wrap. Solução: clonar grupos via JS até ter `larguraGrupo1 + viewportWidth` de trilho.
- **Gradientes laterais** criam delay perceptível no wrap. Se quer wrap imperceptível, remove gradiente E aperta velocidade/margem.
- **`mask-image`** corta tooltips (afeta todos descendentes). Use `::before/::after` com gradiente.
- **`overflow: hidden` no PAI**, `visible` no track interno (pra tooltip vazar verticalmente sem causar scroll horizontal).
- **`:nth-child(N)`** é frágil — prefira `:first-child`/`:last-child` ou JS dinâmico.
- **Hotlinking CDN Instagram** quebra em dias — sempre baixar local.
- **JPG não funciona** com `filter: brightness(0) invert(1)` (fundo branco vira tudo branco). Use PNG transparente ou círculo com `background-image`.
- **Google Maps iframe** — não fazer pino HTML overlay (não acompanha endereço quando arrasta). Use só marcador oficial.
- **Padding lateral no track de loop** quebra o cálculo. Padding lateral deve ser 0.

---

## 🔧 GIT — REFERÊNCIA RÁPIDA

```bash
# Ao chegar na máquina
git status && git pull origin nova-interface

# Durante trabalho
git add . && git commit -m "feat: descrição"

# Antes de sair
git push origin nova-interface

# Diagnosticar
git log --oneline -10 && git branch
```

---

## ⚠️ LEMBRETES

1. Push antes de sair, pull ao chegar
2. Nunca apagar `.git`
3. Trabalhar na `nova-interface` até estar 100%
4. Mobile (<900px) está bom — não mexer sem motivo
5. Atualizar este MD ao final de cada sessão
6. Fonte de verdade é o Git, não o MD
7. Ao abrir nova conversa: enviar este MD primeiro

---

## 🎯 COMO RETOMAR

1. Sincroniza Git (push/pull conforme máquina)
2. Envia este MD pro Claude
3. Diga qual missão da lista vai atacar (recomendo começar pelo fluid design das 7 páginas)

---

<<<<<<< HEAD
**Status sessão 7:** Rodapé padronizado nas 8 páginas. H1 da home agora é lockup SVG fiel à identidade visual (master.svg + logo.svg + bord.svg em `img/svg/`). Faltam fluid design nas outras 7 páginas + dados reais + deploy. ~85% do projeto.

---

## 🧠 NOTAS RÁPIDAS PARA PRÓXIMAS SESSÕES

**SVGs disponíveis em `img/svg/`** (não precisar inspecionar):
- `master.svg` — palavra "Master" estilizada, viewBox 505.67×124.83
- `bord.svg` — palavra "Bord" estilizada, viewBox 239.53×94.69
- `logo.svg` — ícone "M" stylizado, viewBox 66.78×45.05
- `abvtex.svg`, `BARUDAN.svg`, `MULLER.svg`, `QUALIDADE GARANTIDA.svg` — selos dos certificados (já em uso em `sobre.html`)

**Padrão técnica para SVG colorível via CSS** (usado no h1 da home e selos do sobre):
```css
.elemento {
  background-color: currentColor;     /* cor controlada via CSS */
  -webkit-mask-image: url('...svg');  /* SVG como máscara */
  mask-image: url('...svg');
  mask-size: contain;
  aspect-ratio: viewbox-w / viewbox-h; /* bate com viewBox real */
  color: #cor;                        /* a cor real */
}
```

**Cores oficiais do título** (NÃO confundir com `--mb-azul`/`--mb-vinho` do site):
- `#3276b9` = "Master" e logo-ícone (azul título)
- `#8c2d2e` = "Bord" (vinho título)

**Footer "Produtos" — estrutura padronizada nas 8 páginas:**
- Coluna envolta em `<div class="encurtar">` (CSS no `global.css`)
- 5 itens: Etiquetas Tecidas / Bordados / Corte a Laser / Política de Troca e Devolução / Políticas de Frete, Entrega, Pagamento e Garantia
=======
**Status sessão 6:** Página Sobre evoluindo — timeline OK, certificados com selos SVG reais e hover do card. Faltam fluid design nas outras 7 páginas + dados reais + deploy. ~82% do projeto.

# 📘 PROJETO MASTER BORD — STATUS GERAL

> **Arquivo de continuação entre sessões com Claude.**
> Envie este arquivo no início de cada nova conversa.
> **Última atualização:** 08/05/2026 (Sessão 7 — Hero fullscreen com background imersivo)

---

## 🎯 OBJETIVO

Site institucional da **Master Bord** (etiquetas tecidas, bordados e corte a laser) em **HTML + CSS + JavaScript puro**. Sem frameworks, sem build tools. 8 páginas. Publicação no GitHub Pages.

---

## 👤 CONTEXTO

- **Davi** — dono de tecelagem em Petrópolis-RJ
- **Perfil:** dev iniciante-intermediário, aprende iterando visualmente
- **Estilo:** direto, sem rodeios — pede que Claude desafie ideias e aponte pontos cegos
- **Idioma:** PT-BR

### Ambientes

- PC trabalho (Petrópolis): Windows 7 / Node 13
- Notebook casa: Windows 10 / Node 24
- Live Server VS Code + Chrome DevTools (dispositivo "Notebook 13" 1280×720)

### Git

- Repo: https://github.com/daviobl2014-hub/Site-Master-Bord
- `main` = site antigo publicado
- `nova-interface` = branch atual de desenvolvimento

---

## 📐 DECISÕES TÉCNICAS LOCKADAS

1. HTML + CSS + JS puro (Vite/React descartados)
2. Fluid design só desktop (≥900px) com `clamp()` — mobile preservado
3. Breakpoint único: 900px
4. Header/footer duplicados em cada HTML
5. CSS modular: `global.css` + `[pagina].css`
6. JS modular: `global.js` + `[pagina].js`
7. Google Maps via iframe
8. Formulário sem backend → WhatsApp pré-preenchido

---

## 🎨 IDENTIDADE VISUAL

### Cores (`:root` do `global.css`)

```
--mb-bg:#0F1116  --mb-bg-soft:#181B22  --mb-bg-deep:#10100A
--mb-card:#20242D  --mb-paper:#F2ECE0
--mb-azul:#4A8BD6  --mb-vinho:#C44B55  --mb-ouro:#D4A96A
--mb-muted:#8B8F99  --mb-line:#2E3340  --mb-green:#7FC291
```

Título home: `.titulo-master`#3276b9 / `.titulo-bord`#8c2d2e

### Fontes

Bauhaus (display) · Inter (UI) · JetBrains Mono (técnico) · Playfair Display (serif) · Font Awesome 6.5.0

### Estilo

Dark mode industrial, tags `[ TEXTO ]` via `::before/::after`, grid técnica de fundo, logo SVG inline.

---

## 🏗️ ESTRUTURA

```
master-bord/
├── index.html ✅ HOME refinada (hero fullscreen na sessão 7)
├── sobre.html / produtos.html / produto-*.html (3) / catalogo.html / contato.html ✅
├── css/  global.css · index.css · sobre.css · produtos.css · produto.css · catalogo.css · contato.css
├── js/   global.js · index.js · catalogo.js · contato.js
└── img/  ia*.png · operador-*.png · et[1-5].jpg · br[1-5].jpg · la[1-5].jpg · clientes/ · svg/
```

---

## ✅ TUDO QUE FOI FEITO

### Sessão 1 — Planejamento

Repo criado, JSX recebidos, decisão Vite/React (depois revertida).

### Sessão 2 — Fundação

Decisão final: HTML+CSS+JS puro. Home com 6 seções.

### Sessão 3 — 7 páginas restantes

Sobre, Produtos, 3 produto-\*, Catálogo, Contato. Truque `body[data-cor]` pros 3 produtos compartilharem CSS.

### Sessão 4 — Refinamentos visuais

- Fluid design desktop com `clamp()`
- Carrossel hero (3 slides, 8s, Ken Burns)
- Header com logo SVG, ícones FA, links sociais reais
- Stats reais (30+ anos, 10k+ clientes, 250+/mês)
- Galeria filtrada (15 imgs em 3 categorias com fade)
- Avatares depoimentos (fotos reais redondas + Instagram + tooltip)
- Logos clientes em círculos com tooltip hover
- Carrossel infinito de logos (32 = 16 + 16 cópia, JS com `getBoundingClientRect`)
- Mapa Google Maps real no Contato
- Bug do pino fake removido

### Sessão 5 — Carrossel de logos finalizado

**Problema:** "espaço preto" aparecia após a última logo no wrap-around.
**Solução:** função `garantirLogosSuficientes()` em `js/index.js` que clona grupos de 16 logos até trilho ter `larguraGrupo1 + viewportWidth` de largura. Velocidade `50` → `70` px/s. Gradientes laterais removidos. Margem `clamp(16px, 2vw, 30px)` → `clamp(12px, 1.4vw, 20px)`.

### Sessão 6 — Certificados com selos SVG + hover do card

- `sobre.html` — `.certificado-selo` ganhou `<img>` apontando pros SVGs reais (ABVTEX, BARUDAN, MULLER, QUALIDADE GARANTIDA)
- `css/sobre.css` — selo redondo com `background: white`, `padding: 14px`, `overflow: hidden`
- Nova classe `.certificado-selo-img` com `object-fit: contain`
- Hover destaca card inteiro: fundo, border, lift `translateY(-3px)`, box-shadow, accent-bar engrossa de 3 → 5px com glow `currentColor`

### Sessão 7 — Hero fullscreen com background imersivo (HOJE)

**Contexto inicial:** Cliente Master Bord pediu mudança no hero. Direção original tentada: linha curva dourada atravessando o layout.

**Iterações descartadas (importante registrar pra não retentar):**

1. **Curva dourada atrás da ficha técnica** com glow no canto — boa primeira tentativa, mas Davi quis evoluir
2. **Split com curva como fronteira** entre texto e imagem — descaracterizou a moldura técnica certificada da Master Bord
3. **Imagem com borda côncava em fade** seguindo formato de curva via `mask-image` SVG inline — explorado em várias formas (curva sutil, ondulações múltiplas, espelhamento, rotação 20°, linha reta) e rejeitado: visualmente não comunicava "fábrica industrial precisa", parecia mais "site de agência criativa"
4. **Pan diagonal nas animações** — descartado em favor de Ken Burns unificado

**Direção final aprovada:** carrossel ocupa 100% do hero como background fullscreen, texto sobreposto com overlay escuro lateral.

**Arquivos alterados:**

#### `index.html`

- Bloco `<section class="hero">` reescrito
- **Removidos:** `<div class="hero-spec-card">` e os 4 `hero-spec-corner.tl/tr/bl/br`
- Carrossel saiu de dentro do card e virou primeiro filho da `.hero`
- Adicionado `<div class="hero-bg-overlay"></div>`
- Coluna direita do grid removida (text-hero é único filho de hero-grid)
- **Mantidos:** todas as classes (`carousel`, `carousel-slide`, `carousel-dot`, `mbCarousel`, `carousel-caption`) — JS continua funcionando sem alteração

#### `css/index.css`

- Bloco `1. HERO` inteiro reescrito
- `.carousel` agora `inset: 0 -20% 0 0` (deslocado 20% pra direita, imagem "vaza" pra fora pelo lado direito)
- `.hero-bg-overlay` com gradiente lateral (90deg) — escuro à esquerda, transparente à direita
  - Versão final: `rgba(15,17,22,1) 0% → 0.98 25% → 0.65 50% → 0.10 75% → 0 100%`
- Animação Ken Burns **unificada** — todos os 3 slides usam `kenburns-top-left` (zoom 1.0 → 1.18 + translate 3%, 2%)
- `@keyframes kenburns-bottom-right` e `kenburns-zoom-in` removidos (não usados mais)
- `@media (prefers-reduced-motion)` simplificado
- `.carousel-caption` repositionada: canto inferior direito, fundo `rgba(15,17,22,0.6)`, backdrop-blur, border-left dourada
- `.carousel-dots` repositionados: canto inferior direito (não mais centralizados)
- `min-height: 90vh` no desktop
- Sombra reforçada no título SVG e text-shadow no lead/stats pra legibilidade sobre imagem
- Removidas regras órfãs `.hero-spec-card`, `.hero-spec-title`, `.hero-spec-footer`, `.hero-title` no mobile
- Mobile: overlay vertical (180deg) em vez de lateral, dots e caption reposicionados

#### `js/index.js`

**Nada mudou.** Classes mantidas idênticas.

**Status:** ✅ funcionando, faltam ajustes de polimento (próxima sessão).

---

## 🚧 PENDÊNCIAS DA SESSÃO 7 (HERO FULLSCREEN)

Itens identificados pelo Davi como "ajustes pequenos":

- [ ] **Texto da legenda do slide** (`carousel-caption`) — calibrar tamanho/posição/cor sobre a imagem
- [ ] **Bolinhas do carrossel** (`carousel-dot`) — revisar posição, tamanho ou cor ativa
- [ ] **Avaliar com cliente** se a perda da moldura técnica certificada (cantos dourados da `hero-spec-card`) é aceitável — direção foi aprovada mentalmente mas ainda não validada com Master Bord
- [ ] **Imagens em monitor grande (1920px+)** — verificar se `ia1.png`, `ia2.png`, `laser.png` têm resolução suficiente pro fullscreen sem pixelação

---

## 🚧 DADOS FICTÍCIOS A SUBSTITUIR

Marcados com `[SUBSTITUIR: X]`:

- [ ] EMAIL · RUA, NÚMERO · CEP · CNPJ

**Já reais:** ✅ Telefone (24) 2231-7666 · Petrópolis-RJ · @masterbordbordados (Insta+FB) · WhatsApp (5524223176660) · coordenadas mapa

**Confirmar com cliente:**

- [ ] Datas timeline (1995, 2003, 2011, 2018)
- [ ] Estatísticas (2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês)
- [ ] Depoimentos (Juliana Farah, Rafael Teixeira, Clara Moretti = inventados)

---

## 📍 PRÓXIMAS MISSÕES

1. **Polir hero (sessão 7)** — legenda + dots calibrados
2. **Aplicar fluid design nas outras 7 páginas** (replicar `@media min-width: 900px` + `clamp()` da home)
3. **Substituir dados fictícios** pelos reais (email, endereço, CEP, CNPJ, datas, stats, depoimentos)
4. **Limpar Font Awesome duplicado** no `index.html` (linhas ~14 e ~20-22)
5. **Testes finais** — 8 páginas em 1920×1080, 1280×720, 768px, 375px
6. **Deploy** — commit `nova-interface`, push, merge `main`, verificar Pages
7. _(Opcional)_ Paleta mais clara — só se cliente pedir

---

## 🐛 ARMADILHAS APRENDIDAS

- **Carrossel infinito CSS-only** quebra com qualquer padding/margin no track. Use JS com `getBoundingClientRect()`.
- **Carrossel infinito precisa de buffer dinâmico:** se `viewport > larguraGrupo1`, o trilho duplicado (2 cópias) NÃO é suficiente — aparece espaço vazio no wrap. Solução: clonar grupos via JS até ter `larguraGrupo1 + viewportWidth` de trilho.
- **Gradientes laterais** criam delay perceptível no wrap. Se quer wrap imperceptível, remove gradiente E aperta velocidade/margem.
- **`mask-image`** corta tooltips (afeta todos descendentes). Use `::before/::after` com gradiente.
- **`overflow: hidden` no PAI**, `visible` no track interno (pra tooltip vazar verticalmente sem causar scroll horizontal).
- **`:nth-child(N)`** é frágil — prefira `:first-child`/`:last-child` ou JS dinâmico.
- **Hotlinking CDN Instagram** quebra em dias — sempre baixar local.
- **JPG não funciona** com `filter: brightness(0) invert(1)` (fundo branco vira tudo branco). Use PNG transparente ou círculo com `background-image`.
- **Google Maps iframe** — não fazer pino HTML overlay (não acompanha endereço quando arrasta). Use só marcador oficial.
- **Padding lateral no track de loop** quebra o cálculo. Padding lateral deve ser 0.
- **(NOVO sessão 7)** **Curva visível atravessando hero** descaracteriza identidade industrial certificada. Em B2B premium, restrição vence ornamento. Referências testadas: GWCast, SPT Labtech, BMW Group — nenhuma usa curva decorativa atravessando hero.
- **(NOVO sessão 7)** **`mask-image` SVG inline** com `data:image/svg+xml;utf8,<svg...>` funciona em Chrome moderno mas requer escapar `#` em IDs (`%23` em vez de `#`) e aspas simples no XML.
- **(NOVO sessão 7)** **Hero fullscreen com Ken Burns** exige `text-shadow` reforçado em qualquer texto sobreposto — sem isso, o zoom da imagem revela frames onde o texto fica ilegível.

---

## 🔧 GIT — REFERÊNCIA RÁPIDA

```bash
# Ao chegar na máquina
git status && git pull origin nova-interface

# Durante trabalho
git add . && git commit -m "feat: descrição"

# Antes de sair
git push origin nova-interface

# Diagnosticar
git log --oneline -10 && git branch
```

---

## ⚠️ LEMBRETES

1. Push antes de sair, pull ao chegar
2. Nunca apagar `.git`
3. Trabalhar na `nova-interface` até estar 100%
4. Mobile (<900px) está bom — não mexer sem motivo
5. Atualizar este MD ao final de cada sessão
6. Fonte de verdade é o Git, não o MD
7. Ao abrir nova conversa: enviar este MD primeiro

---

## 🎯 COMO RETOMAR

1. Sincroniza Git (push/pull conforme máquina)
2. Envia este MD pro Claude
3. Diga qual missão da lista vai atacar (recomendo polir hero da sessão 7 primeiro, depois fluid design das 7 páginas)

---

**Status sessão 7:** Hero da home virou fullscreen com carrossel de background, texto sobreposto, overlay lateral, Ken Burns unificado. Ficha técnica com cantos dourados foi removida — direção aprovada por Davi mas ainda não validada com cliente Master Bord. Faltam: polir legenda/dots do carrossel, aplicar fluid design nas outras 7 páginas, dados reais, deploy. ~83% do projeto.
>>>>>>> 71ca0de (teste de fundo se der errado voltar no inicio)
