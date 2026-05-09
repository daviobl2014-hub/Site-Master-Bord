# 📘 PROJETO MASTER BORD — STATUS GERAL

> **Arquivo de continuação entre sessões com Claude.**
> Envie este arquivo no início de cada nova conversa.
> **Última atualização:** 09/05/2026 (Sessão 12 — limpeza inline styles + padronização ângulos por cor + PENDENCIAS.md criado)

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

### Sessão 8 — Hero fullscreen com background imersivo

**Contexto:** Cliente Master Bord pediu mudança no hero. Davi explorou várias direções até chegar no fullscreen.

**Iterações descartadas (não retentar):**

1. Curva dourada atravessando hero — descaracteriza identidade industrial
2. Split com curva como fronteira entre texto e imagem
3. Borda côncava em fade via `mask-image` SVG inline (várias formas: curva sutil, ondulações, espelhamento, rotação 20°, reta) — todas pareciam "site de agência criativa", não fábrica precisa
4. Pan diagonal nas animações — substituído por Ken Burns unificado
5. Crack/rachadura mask na imagem — descartado
6. Halos de text-shadow stack em cada elemento — descartado

**Direção final aprovada:** carrossel ocupa 100% do hero como background fullscreen, texto sobreposto, overlay escuro lateral.

**Arquivos alterados:**

- `index.html` — `<section class="hero">` reescrito; carrossel saiu de dentro do `.hero-spec-card` e virou irmão direto do `.hero-grid`; cantos dourados (`hero-spec-corner.tl/tr/bl/br`) removidos; coluna direita do grid removida (text-hero é único filho).
- `css/index.css` — bloco hero inteiro reescrito:
  - `.carousel` com `position: absolute; inset: 0; z-index: 0` cobrindo o hero
  - Ken Burns **unificado** em todos os 3 slides (`kenburns-top-left`, zoom 1.0 → 1.18 + translate 3%, 2%, 8s)
  - `@keyframes kenburns-bottom-right` e `kenburns-zoom-in` removidos
  - `.hero-grid` sobe pra `z-index: 10` (texto acima do carrossel)
  - `.hero-glow-azul/vinho` e `.tech-grid` em `z-index: 3`
  - `min-height: 90vh` no desktop
  - `.carousel-caption` repositionada: canto inferior direito, `rgba(15,17,22,0.6)` + `backdrop-filter: blur(10px)` + border-left dourada
  - Sombra reforçada (`drop-shadow(0 4px 16px rgba(0,0,0,0.7))`) no logo SVG; `text-shadow` no `.hero-lead` e `.hero-stat`
- `js/index.js` — **nada mudou** (classes preservadas)

**Status:** ✅ funcionando.

### Sessão 9 — Dots fora do carrossel + doc do pattern do pega/ (HOJE)

**Parte 1 — `.carousel-dots` movidas pra fora do `.carousel`:**

Davi notou que as bolinhas estavam sendo afetadas pelos glows do hero (atrás dos elementos com `z-index: 3`). Solução: extrair do carrossel pra ficarem irmãs e ganharem `z-index` alto.

- `index.html` — `<div class="carousel-dots" id="mbCarouselDots">` agora é irmão de `<div class="carousel">`, não filho. Os 3 `<button class="carousel-dot">` (data-slide=0/1/2) preservados intactos.
- `js/index.js:22-26` — `carousel.querySelectorAll('.carousel-dot')` virou:
  ```js
  const dotsContainer = document.getElementById('mbCarouselDots');
  const dots = dotsContainer
    ? dotsContainer.querySelectorAll('.carousel-dot')
    : document.querySelectorAll('.carousel-dot'); // fallback
  ```
  Função preservada 100% (cliques mudam slide, auto-rotate funciona, marcação `.active` segue).
- `css/index.css` — `.carousel-dots` reescrita pra ancorar fora: `position: absolute; bottom: 20px; left: 0; width: 100%; z-index: 50; pointer-events: auto`. Cores originais preservadas (`rgba(242,236,224,0.4)` no idle, `--mb-ouro` no `.active`/hover).
- `css/index.css` — `.hero-ctas` também ganhou `position: relative; z-index: 50` pra garantir que os botões "Conheça nossa linha →" e "Ver catálogo" fiquem acima dos glows também.

**Parte 2 — Documentação do pattern de fundo do `pega/` (ver seção dedicada abaixo):**

Davi pediu que eu lesse `pega/index.html` + `pega/css/01-base.css` + `03-hero.css` + `04-carrossel.css` e documentasse no MD a forma como o fundo é estruturado lá. A receita exata virou seção própria pra próximas sessões poderem replicar sem ter que abrir os arquivos do `pega/`.

### Sessão 10 — Caption do carrossel ajustada em mobile (HOJE)

Davi notou que a `.carousel-caption` (legenda dos slides do hero) ficava grande/desalinhada em telas abaixo de 900px. Ajuste pequeno só no `@media (max-width: 900px)` do `css/index.css` (linhas ~1002-1007), sem mexer no desktop:

```css
@media (max-width: 900px) {
  .carousel-caption {
    right: 10px;     /* desktop: 0px  → mobile: 10px (encosta menos na borda) */
    bottom: 12px;    /* desktop: 20px → mobile: 12px (mais perto do fundo) */
    font-size: 9px;  /* desktop: 11px → mobile: 9px (compacto) */
    padding: 6px 10px; /* desktop: 8px 20px → mobile: 6px 10px (mais apertado) */
  }
}
```

`.carousel-dots` no mesmo @media já estava com `right: 20px; bottom: 20px` — não foi tocado.

Sem mudanças em HTML/JS — só CSS, e só dentro do breakpoint mobile.

### Sessão 11 — IMAGENS-INSTRUCOES.md + ajuste H1 catálogo + commit antes de imagens (HOJE)

**Objetivo da sessão:** preparar o site pra fase de imagens reais — fechar pendências pequenas, commitar tudo funcionando, sair do trabalho de layout/CSS e entrar no trabalho de design Corel + substituição de imagens.

**Parte 1 — Inventário de imagens (`IMAGENS-INSTRUCOES.md` na raiz):**

Davi vai criar caixas no CorelDraw pra ter melhor resolução das imagens. Eu fiz inventário completo de TODAS as 42 caixas de imagem do site (`<div class="mb-image">`) divididas por:
- Página (7 páginas: index, produtos, sobre, 3× produto-*, catalogo)
- Seção
- aspect-ratio (5/3, 5/4, 16/10, 3/4, 1/1, fullscreen)
- img-label (textinho sobreposto, ex: ET-012, PLANTA · 2400M²)
- Tamanho 2x sugerido (HiDPI/Retina)
- Área respirável (canto superior esquerdo pra label, canto inferior pra título grande)

Tabela cheat-sheet pro Corel:
| Aspect | Tamanho 2x |
|---|---|
| 5/3 | 1200×720 |
| 5/4 | 1200×960 |
| 16/10 | 2000×1250 |
| 3/4 | 1200×1600 |
| 1/1 | 800×800 |
| Hero | 2400×1500 |

Davi pode abrir só esse arquivo no Corel pra consultar enquanto desenha.

**Parte 2 — Ajuste do H1 do catálogo:**

Davi editou manualmente o H1 da página catálogo ([catalogo.html:101-105](catalogo.html#L101-L105)) — palavra "acervo" agora highlight ouro, "Master" highlight azul, "Bord" highlight vinho:

```html
<h1 class="catalogo-hero-title">
  O <span class="highlight-ouro">acervo</span><br />
  da <span class="highlight-azul">Master</span>
  <span class="highlight-vinho">Bord</span>.
</h1>
```

✅ Versão final aplicada usa `<span>` consistente nas 3 palavras destacadas — HTML válido, sem warning de validador.

**Parte 3 — Commit:**

Tudo funcionando, Davi vai commitar antes de mudar de fase (CSS/HTML → imagens).

**Próximas missões da próxima sessão:**

1. Criar caixas no Corel seguindo `IMAGENS-INSTRUCOES.md`
2. Exportar imagens (sRGB, JPG q85, tamanhos 2x)
3. Substituir placeholders nos `<div class="mb-image">` por `<img>` reais
4. Corrigir bug do `img-border` sem ponto em [css/index.css:460](css/index.css#L460) (não bloqueante mas vale)

---

## 🖼️ PATTERN DE FUNDO DA PASTA `pega/` (referência visual do Davi)

A pasta `pega/` na raiz do projeto contém uma versão antiga/protótipo do site que o Davi gosta visualmente. **Quando ele pedir "estilo do pega"** ou "fundo igual ao pega", é ESTE pattern aqui — uma forma simples e elegante de ter imagem de fundo + texto por cima sem precisar de overlays complexos ou halos no texto.

### A receita exata (copia e cola)

**1. HTML — adiciona uma `<div>` como PRIMEIRA coisa do `<body>`:**

```html
<body>
  <!-- PANO DE FUNDO ÚNICO (vem antes de TUDO) -->
  <div class="container-fundo"></div>

  <header>...</header>
  <main>
    <section>...</section>
  </main>
</body>
```

**2. CSS — copiado direto de `pega/css/01-base.css` linhas 28-39:**

```css
.container-fundo {
  position: fixed;          /* fixa no viewport, não rola junto */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;             /* ocupa 100% da tela */
  background: url('../img/fundo-master.jpg') center center / cover no-repeat;
  opacity: 0.35;            /* faint — atmosfera, não dominante */
  filter: blur(1px);        /* leve blur pra textura, não competir com texto */
  z-index: -2;              /* fica ATRÁS de tudo */
}
```

### Por que funciona (o "segredo" do pattern)

- **É global, não por seção** — UMA imagem fixa cobre toda a tela e fica visível através de TODAS as seções. Cria unidade visual no site inteiro.
- **`position: fixed` + `z-index: -2`** — não rola com o conteúdo (parallax estático) e fica atrás de qualquer elemento com `z-index >= 0`.
- **`opacity: 0.35` + `blur(1px)`** — esses dois números juntos transformam imagem em TEXTURA. O texto por cima fica naturalmente legível com fontes/cores originais — sem text-shadow, halo, drop-shadow ou overlay multi-gradiente.
- **Sections com `background: transparent`** — pra textura passar.

### O que NÃO é o pattern do pega

⚠️ **NÃO é o carrossel do hero como background.** No `pega/` o carrossel é uma section SEPARADA, ABAIXO do hero.
⚠️ **NÃO é overlay multi-gradiente** (tentei na sessão 8 e Davi rejeitou).
⚠️ **NÃO precisa de halo/text-shadow** elaborado nos textos.

### Pra aplicar no index principal

1. Adicionar `<div class="container-fundo"></div>` como primeiro elemento do `<body>` em `index.html`.
2. Adicionar o bloco CSS acima ao `css/global.css` (todas as páginas) ou só `css/index.css` (só home).
3. Trocar o `url()` para imagem real (ex: copiar `pega/imagem/fundo-master.jpg` → `img/fundo-master.jpg`).
4. Garantir `.hero { background: transparent }` (ou translúcido tipo `rgba(15,17,22,0.6)`).
5. Não mexer em fontes, cores de texto, espaçamento, drop-shadow do logo.

### Imagens disponíveis em `pega/imagem/`

- `fundo-master.jpg` — fundo principal usado no `.container-fundo` original
- `fundo-cabecalho.jpg` — usado no header
- `ia1.png`, `ia2.png`, `laser.png`, `laser2.png` — slides
- `operador-etiqueta.png`, `operador-bordado.png`, `operador-laser.png` — fotos
- `abvtex.jpg`, `barudan.png`, `mucad.jpg`, `qualidade.jpg`, `SELO-BRONZE.png` — selos

---

## 🚧 PENDÊNCIAS DA SESSÃO 8/9 (HERO FULLSCREEN)

- [ ] **Texto da legenda do slide** (`carousel-caption`) — calibrar tamanho/posição/cor sobre a imagem
- [ ] **Avaliar com cliente** se perda da moldura técnica certificada (cantos dourados da `hero-spec-card`) é aceitável — direção aprovada por Davi mas ainda não validada com Master Bord
- [ ] **Imagens em monitor grande (1920px+)** — verificar se `ia1.png`, `ia2.png`, `laser.png` têm resolução suficiente pro fullscreen sem pixelação
- [ ] **Decidir aplicar pattern do `pega/`** ou manter o fullscreen carousel (são abordagens diferentes — Davi pode querer testar a do pega)

---

## 🧠 NOTAS RÁPIDAS PARA PRÓXIMAS SESSÕES

**SVGs disponíveis em `img/svg/`:**
- `master.svg` — palavra "Master", viewBox 505.67×124.83
- `bord.svg` — palavra "Bord", viewBox 239.53×94.69
- `logo.svg` — ícone "M", viewBox 66.78×45.05
- `abvtex.svg`, `BARUDAN.svg`, `MULLER.svg`, `QUALIDADE GARANTIDA.svg` — selos certificados (em uso em `sobre.html`)

**Padrão técnica para SVG colorível via CSS** (h1 da home, selos do sobre):
```css
.elemento {
  background-color: currentColor;
  -webkit-mask-image: url('...svg');
  mask-image: url('...svg');
  mask-size: contain;
  aspect-ratio: viewbox-w / viewbox-h;
  color: #cor;
}
```

**Cores oficiais do título** (≠ `--mb-azul`/`--mb-vinho`):
- `#3276b9` = "Master" e logo-ícone (azul título)
- `#8c2d2e` = "Bord" (vinho título)

**Footer "Produtos" — estrutura padronizada nas 8 páginas:**
- `<div class="encurtar"><ul>` (CSS no `global.css`)
- 5 itens: Etiquetas Tecidas / Bordados / Corte a Laser / Política de Troca e Devolução / Políticas de Frete, Entrega, Pagamento e Garantia

**Hero atual da home (sessão 8/9):**
- `.carousel` é background fullscreen (`position: absolute; inset: 0; z-index: 0`)
- `.carousel-dots` está FORA do `.carousel` agora (irmãos), `id="mbCarouselDots"`, `z-index: 50`
- `.hero-ctas` tem `z-index: 50` pra ficar acima dos glows
- `.hero-grid` `z-index: 10`, glows/tech-grid `z-index: 3`
- `js/index.js` busca dots via `document.getElementById('mbCarouselDots')`

---

**Status sessão 11:** CSS/HTML do site finalizados pra fase atual. Hero fullscreen + dots externos + caption mobile + H1 catálogo ajustado. Inventário completo de 42 caixas de imagem documentado em `IMAGENS-INSTRUCOES.md`. Davi vai commitar tudo e migrar pra fase de design no Corel + substituição de imagens reais. ~88% do projeto.

### Sessão 12 — Limpeza geral de inline styles + padronização global de ângulos (HOJE)

**Parte 1 — TODOS os inline styles removidos do HTML:**

Davi pediu pra mover todo `style=""` do HTML pro CSS. ~242 inline styles removidos das 9 páginas de produção. Estratégia: criar modifier classes `.is-{etiqueta|bordado|laser|...}` por seção. Cada arquivo CSS recebeu blocos por categoria centralizando cor (accent-bar, gradient, pattern, border-color, links).

Detalhes:
- `index.html` ← 0 styles (era ~50 entre produto-card + galeria)
- `catalogo.html` ← 0 (era 60) — usa `[data-cat="X"]` que já existia
- `sobre.html` ← 0 (era 21) — `.certificado-card.is-X` + `.infra-img-secundaria.is-X`
- `produtos.html` ← 0 (era 18) — `.produto-index-card.is-X`
- `contato.html` ← 0 (era 10) — `.contato-info-key.is-X` + `.contato-mapa-img .img-*`
- `produto-bordado/etiqueta/laser.html` ← 0 cada (era 26 cada) — usa `body[data-cor]` + `.produto-relacionado-card.is-X`
- `politicas.html` ← 0 (era 4)

Utilities globais criadas em `global.css`: `.spacer-12`, `.btn-cta-center`, `.footer-logo`, `.footer-cta-grid .mb-title.xl`.

JS dormente da galeria filtrada (~115 linhas em `js/index.js`) removido — substituído por comentário explicativo.

Bug `img-border` sem ponto removido do `index.css`.

**Parte 2 — Padronização global de ângulos do `repeating-linear-gradient` por cor:**

Antes cada arquivo tinha ângulos diferentes pra cada cor. Padronizado pra 3 ângulos canônicos baseados em `.produto-card` do home:

| Cor | Ângulo padrão |
|---|---|
| Azul (etiqueta) | `0deg` |
| Vinho (bordado) | `35deg` |
| Ouro (laser) | `-70deg` ⚡ invertido a pedido do Davi |
| Vinho-glow | `35deg` (segue vinho) |
| Azul-glow | `0deg` (segue azul) |

Aplicado em 6 lugares: `index.css` (produto-card + galeria), `catalogo.css`, `produtos.css`, `sobre.css`, `produto.css`.

**Parte 3 — `PENDENCIAS.md` criado:**

Lista organizada de pendências técnicas. Próxima alta prioridade: **criar variáveis CSS centrais para as 5 cores** (RGB triples + ângulos) no `:root` do `global.css`. Hoje as cores ainda aparecem como `rgba(74, 139, 214, X)` literal espalhadas — variáveis vão centralizar tudo, mudar 1 linha = atualiza site inteiro.

---

## 🎯 ARQUIVOS DE REFERÊNCIA NA RAIZ

- **`PROJETO-MASTER-BORD.md`** ← este arquivo (continuação de sessões com Claude)
- **`PENDENCIAS.md`** ← lista de pendências técnicas + sugestões (NOVO)
- **`IMAGENS-INSTRUCOES.md`** ← inventário das 42 caixas de imagem (consultar no Corel)
- **`pega/`** ← protótipo antigo, referência do pattern de fundo (pode apagar se quiser)

---

## 📍 PRÓXIMAS MISSÕES (atualizadas pós-sessão 12)

> Lista detalhada com prioridades em `PENDENCIAS.md`.

1. **Criar variáveis CSS centrais para as 5 cores** (RGB triples + ângulos) — alta prioridade. Centraliza tudo no `:root` do `global.css`. Detalhes em `PENDENCIAS.md` item 2.
2. **Criar caixas no Corel** seguindo `IMAGENS-INSTRUCOES.md` (42 imagens)
3. **Exportar imagens** (sRGB, JPG q85 progressive, tamanhos 2x)
4. **Substituir placeholders** nos `<div class="mb-image">` por `<img>` reais
5. **Resolver filtros decorativos da galeria** (item 3 do PENDENCIAS.md)
6. **Aplicar fluid design** nas outras 7 páginas
7. **Substituir dados fictícios** (email, endereço, CEP, CNPJ, datas timeline, stats, depoimentos)
8. **Limpar Font Awesome duplicado** no `index.html`
9. **Testes finais** — 8 páginas em 1920×1080, 1280×720, 768px, 375px
10. **Deploy** — commit `nova-interface` → push → merge `main` → verificar Pages

**Status sessão 12:** Limpeza profunda concluída — 0 inline styles em todas as páginas de produção, ângulos do pattern padronizados globalmente (azul=0deg, vinho=35deg, ouro=-70deg invertido), JS dormente removido. CSS arquitetura limpa pronta pra próxima fase de melhorias (variáveis centralizadas → imagens reais). ~90% do projeto.
