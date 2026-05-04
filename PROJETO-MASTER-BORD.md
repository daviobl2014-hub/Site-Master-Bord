# 📘 PROJETO MASTER BORD — STATUS GERAL

> **Arquivo de continuação entre sessões com Claude.**
> Envie este arquivo no início de cada nova conversa.
> **Última atualização:** 04/05/2026 (Sessão 4 — final do dia)

---

## 🎯 OBJETIVO

Construir o site institucional da **Master Bord** (etiquetas tecidas, bordados e corte a laser) em **HTML + CSS + JavaScript puro**.

- Sem frameworks, sem build tools, sem dependências
- 8 páginas + assets organizados em pastas (css/, js/, img/)
- Publicação no GitHub Pages
- Projeto formalmente aprovado pela Master Bord

---

## 👤 CONTEXTO

- **Davi** — dono de tecelagem em Petrópolis-RJ, refazendo o site da Master Bord (cliente externo)
- **Perfil:** dev iniciante-intermediário, aprende melhor iterando visualmente
- **Estilo preferido:** direto, sem rodeios, com desafio honesto + coach
- **Idioma:** PT-BR

### Ambientes
| Máquina | Sistema | Uso |
|---|---|---|
| PC trabalho (Petrópolis) | Windows 7 / Node 13 | Edição |
| Notebook casa | Windows 10 / Node 24 | Edição |

**Live Server VS Code** + **Chrome DevTools** com dispositivo customizado "Notebook 13" (1280×720) configurado.

### Git
- **Repositório:** https://github.com/daviobl2014-hub/Site-Master-Bord
- **`main`** = site antigo (publicado)
- **`nova-interface`** = branch atual de desenvolvimento

---

## 📐 DECISÕES TÉCNICAS LOCKADAS

1. **HTML + CSS + JS puro** (Vite/React/Astro descartados)
2. **Fluid design só desktop (≥900px) com `clamp()`** — mobile preservado intacto
3. **Breakpoint único:** 900px
4. **Header/footer duplicados em cada HTML** (custo aceito vs simplicidade)
5. **CSS modular:** `global.css` (compartilhado) + `[pagina].css` (exclusivo)
6. **JS modular:** `global.js` + `[pagina].js`
7. **Mapa Google Maps via iframe** (sem JavaScript API)
8. **Formulário sem backend** — envia via WhatsApp pré-preenchido

---

## 🎨 IDENTIDADE VISUAL

### Cores (em `:root` do `global.css`)
```
--mb-bg:         #0F1116
--mb-bg-soft:    #181B22
--mb-bg-deep:    #10100A
--mb-card:       #20242D
--mb-paper:      #F2ECE0
--mb-azul:       #4A8BD6
--mb-vinho:      #C44B55
--mb-ouro:       #D4A96A
--mb-muted:      #8B8F99
--mb-line:       #2E3340
--mb-green:      #7FC291
```

Cores customizadas no título da home:
- `.titulo-master` → `#3276b9`
- `.titulo-bord` → `#8c2d2e`

### Fontes
- **Bauhaus** — display/títulos
- **Inter** — UI/texto
- **JetBrains Mono** — técnicos/monoespaçado
- **Playfair Display** — serif itálico
- **Font Awesome 6.5.0** — ícones

### Estilo geral
- Dark mode industrial/técnico
- Tags `[ TEXTO ]` via CSS `::before`/`::after`
- Grid técnica de fundo (`.tech-grid`)
- Logo SVG inline (não é texto)

---

## 🏗️ ESTRUTURA ATUAL

```
master-bord/
├── index.html          ✅ HOME — totalmente refinada
├── sobre.html          ✅ Sessão 3 (não revisada)
├── produtos.html       ✅ Sessão 3
├── produto-etiqueta.html  ✅ Sessão 3
├── produto-bordado.html   ✅ Sessão 3
├── produto-laser.html     ✅ Sessão 3
├── catalogo.html       ✅ Sessão 3
├── contato.html        ✅ Revisado Sessão 4 (Google Maps)
├── css/
│   ├── global.css      ✅ Variáveis, header, footer, componentes
│   ├── index.css       ✅ Hero + carrossel + Ken Burns + galeria + logos
│   ├── sobre.css       ✅ Sessão 3
│   ├── produtos.css    ✅ Sessão 3
│   ├── produto.css     ✅ Compartilhado (cor via body[data-cor])
│   ├── catalogo.css    ✅ Sessão 3
│   └── contato.css     ✅ Revisado Sessão 4
├── js/
│   ├── global.js       ✅ Header scroll
│   ├── index.js        ✅ Carrossel hero + galeria filtrada + carrossel logos
│   ├── catalogo.js     ✅ Filtro por categoria
│   └── contato.js      ✅ Validação + WhatsApp
└── img/
    ├── ia1.png, ia2.png, laser.png      (carrossel hero)
    ├── operador-*.png                    (sobre)
    ├── et[1-5].jpg, br[1-5].jpg, la[1-5].jpg  (galeria)
    └── clientes/                         (logos + avatares depoimentos)
```

---

## ✅ TUDO QUE FOI FEITO ATÉ AGORA

### Sessão 1 — Planejamento
- Repo criado, JSX do designer recebidos
- Decisão inicial Vite/React (depois revertida)

### Sessão 2 — Fundação
- Decisão final: HTML + CSS + JS puro
- Home criada com 6 seções, CSS/JS separados

### Sessão 3 — 7 páginas restantes (outra conversa)
- Sobre, Produtos, 3 produto-*, Catálogo, Contato
- Truque `body[data-cor]` pros 3 produtos compartilharem CSS
- Contato com WhatsApp integrado

### Sessão 4 — Refinamentos visuais e interativos (HOJE)

**Home (`index.html` + `index.css` + `js/index.js`):**

1. **Fluid design desktop** com `clamp()` em padding, fonte do título, stats, ficha técnica
2. **Carrossel do hero** — 3 slides (Barudan, Tear Muller, Prisma Laser) automático 8s + bolinhas + pausa hover
3. **Efeito Ken Burns** nos slides (3 keyframes diferentes + `prefers-reduced-motion`)
4. **Título animado** com `tracking-in-expand 3s`
5. **Header atualizado** — logo SVG, ícones Font Awesome, links sociais reais, telefone real
6. **Stats reais** — 30+ anos, 10k+ clientes, 250+/mês, 100% qualidade
7. **Lead atualizado** — tecnologia Suíça, Japonesa, Brasileira
8. **Galeria filtrada** com array de 15 imagens em 3 categorias (etiqueta/bordado/laser) + fade na troca
9. **Padrão `.section-head`** corrigido na seção Processo
10. **Avatares dos depoimentos** com fotos reais redondas + link Instagram + tooltip
11. **Logos de clientes** transformados em círculos (mesmo padrão dos avatares)
12. **Tooltip CSS** com nome no hover (em todos os logos)
13. **Carrossel infinito** dos logos (com 32 logos = 16 reais + 16 cópia + JS controlando)

**Página Contato:**
- **Mapa Google Maps** real integrado via iframe
- **Bug do pino fake removido** (estava em `position: absolute` no centro da tela, não acompanhava endereço)

**Configurações úteis:**
- DevTools com dispositivo customizado "Notebook 13" (1280×720)

---

## 🐛 PROBLEMA ATUAL — RESOLVER NA PRÓXIMA SESSÃO

### Sintoma
No carrossel infinito de logos, o usuário vê uma **"demora" de ~1,6 segundos** entre o último logo (Rede D'or) sair pela esquerda e o primeiro (Dress To) aparecer pela direita. Parece que tem um "espaço vazio" entre o final e o reinício.

### Causa diagnosticada — NÃO É BUG TÉCNICO
**É a estética dos gradientes laterais funcionando como projetado.**

No `index.css`:
```css
.section-logos-track::before,
.section-logos-track::after {
  width: 80px;
  /* ::before — fade esquerdo */
  /* ::after — fade direito */
}
```

**Como funciona:**
- O gradiente esquerdo (`::before`) cobre 80px na borda esquerda — logos saindo dissolvem nesses 80px
- O gradiente direito (`::after`) cobre 80px na borda direita — logos entrando aparecem dissolvendo nesses 80px

**Cálculo do tempo de "aparição":**
- Velocidade JS: `50px/segundo`
- Largura do gradiente: `80px`
- Tempo pra atravessar o gradiente: `80 ÷ 50 = 1,6 segundos`

**É isso que o usuário está vendo como "demora".** Não é bug — é o fade-in/fade-out funcionando como deveria. Mas está calibrado lento demais.

### CSS e JS estão tecnicamente CORRETOS

- HTML: 32 logos (16 + 16 cópia idêntica) ✅
- CSS: sem `:last-child margin: 0`, sem `:nth-child(16)`, padding lateral 0 ✅
- JS: usa `getBoundingClientRect()` pra cálculo exato do reset (logo 1 vs logo 17) ✅
- Reset matematicamente perfeito (verificado) ✅

**O carrossel funciona perfeitamente. O que precisa é ajuste estético do fade.**

### Soluções possíveis (escolher uma)

**Opção A — Diminuir o gradiente lateral (recomendado):**
```css
.section-logos-track::before,
.section-logos-track::after {
  width: 40px;   /* era 80px, agora 40px */
}
```
Resultado: fade visível mas atravessa em 0,8s.

**Opção B — Aumentar velocidade:**
```javascript
// js/index.js
const VELOCIDADE = 80;   // era 50, agora 80
```
Resultado: tudo mais rápido, fade atravessa em 1s.

**Opção C — Combinar A + B (mais agressivo):**
```css
width: 40px;   /* gradiente menor */
```
```javascript
const VELOCIDADE = 60;   // velocidade 20% maior
```
Resultado: atravessa em 0,67s. Praticamente imperceptível.

**Opção D — Tirar gradiente totalmente:**
```css
.section-logos-track::before,
.section-logos-track::after {
  display: none;
}
```
Resultado: logos aparecem/somem bruscamente nas bordas. Sem fade. **Não recomendo** — perde o polimento.

### Decisão pendente

**Davi precisa testar a Opção A (recomendada) e decidir.**

---

## 🚧 DADOS FICTÍCIOS A SUBSTITUIR

Marcados com `[SUBSTITUIR: X]` em várias páginas:
- [ ] `[SUBSTITUIR: EMAIL]`
- [ ] `[SUBSTITUIR: RUA, NÚMERO]`
- [ ] `[SUBSTITUIR: CEP]`
- [ ] `[SUBSTITUIR: CNPJ]`

**Já substituído:**
- ✅ Telefone (24) 2231-7666
- ✅ Cidade/UF Petrópolis-RJ
- ✅ Instagram + Facebook (@masterbordbordados)
- ✅ Coordenadas mapa
- ✅ WhatsApp (5524223176660)

**Confirmar com Master Bord:**
- [ ] Datas timeline (1995, 2003, 2011, 2018)
- [ ] Estatísticas (2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês)
- [ ] Depoimentos (Juliana Farah, Rafael Teixeira, Clara Moretti = nomes inventados)

---

## 📍 PRÓXIMAS MISSÕES (em ordem de prioridade)

### 1. Resolver o "delay" do carrossel
Aplicar **Opção A** (gradiente 40px). Testar em ~3 voltas completas. Se ainda incomodar, escalar pra Opção C.

### 2. Aplicar fluid design nas outras 7 páginas
Replicar padrão da home (`@media min-width: 900px` + `clamp()`):
- [ ] sobre.html / sobre.css
- [ ] produtos.html / produtos.css
- [ ] produto-*.html / produto.css
- [ ] catalogo.html / catalogo.css
- [ ] contato.html / contato.css

### 3. Substituir dados fictícios pelos reais
Email, endereço, CEP, CNPJ, datas, estatísticas, nomes depoimentos.

### 4. Limpar lixo técnico
- Font Awesome carregado 2x no `index.html` (linhas ~14 e ~20-22) → remover duplicata

### 5. Testes finais
8 páginas em 4 resoluções: 1920×1080, 1280×720, 768px, 375px.

### 6. Deploy
- Commit final na `nova-interface`
- Push pro GitHub
- Merge pra `main` (ou release)
- Verificar GitHub Pages publicado em https://daviobl2014-hub.github.io/Site-Master-Bord

### 7. Opcional — Paleta mais clara
Só se Master Bord pedir. Mexer no `:root` de `global.css`.

---

## 🐛 ARMADILHAS APRENDIDAS NESTA SESSÃO 4

### Carrossel infinito CSS-only NÃO é confiável
`translateX(-50%)` depende de matemática exata do CSS. Qualquer `padding` ou `margin` quebra o cálculo. **Use JavaScript com `getBoundingClientRect()`** pra cálculo preciso.

### `mask-image` afeta tooltips e descendentes
`mask-image` aplica transparência em **TODOS** os filhos. Tooltip dentro fica cortado. Solução: use `::before/::after` com gradientes em vez de mask.

### `overflow: hidden` corta tooltip que sobe
Pra carrossel: `overflow: hidden` no PAI (pra evitar scroll horizontal do site), `overflow: visible` no track interno (pra tooltip vazar).

### Quando algo "passa por cima" → use z-index, não margin
Margin empurra. Z-index empilha. Combinado com `background: cor-sólida`, cobre o que está atrás visualmente.

### Layout horizontal vs vertical
Quando dois elementos competem pelo mesmo eixo (ex: label fixo + carrossel rolando no eixo X), considere mudar pra **vertical** (label em cima). Resolve sem hacks.

### `:nth-child(N)` é frágil
Se conteúdo muda, regra quebra. Prefira `:first-child`/`:last-child` ou JavaScript dinâmico.

### Gradientes laterais criam "delay" perceptível
Gradiente de 80px + velocidade 50px/s = 1,6s "fantasma". Calibrar conforme velocidade da animação.

### Hotlinking de CDN do Instagram quebra
URLs `instagram.fsdu37-1.fna.fbcdn.net/...` expiram em dias. Sempre baixar local.

### JPG não funciona com `filter: brightness(0) invert(1)`
JPG sempre tem fundo branco. O filtro vira tudo branco sólido. Use **PNG transparente** ou **círculo redondo com `background-image`** (esconde o fundo branco).

### Google Maps iframe — pino customizado é gambiarra
HTML overlay no centro da tela não acompanha o endereço quando usuário arrasta. Use **só o marcador oficial** do Google.

### Padding lateral em lista com loop quebra cálculo
`padding: 10px 35px` na `.section-logos-list` deslocava o início. Pra animação funcionar, padding lateral deve ser 0.

---

## 🔧 COMANDOS GIT — REFERÊNCIA RÁPIDA

```bash
# ANTES de começar trabalho (em qualquer máquina)
git status
git pull origin nova-interface

# Durante o trabalho (a cada feature)
git add .
git commit -m "feat: descrição"

# ANTES de sair / trocar máquina
git push origin nova-interface

# Diagnosticar
git log --oneline -10
git branch
```

---

## ⚠️ LEMBRETES IMPORTANTES

1. **Push antes de sair, pull ao chegar** — em qualquer máquina
2. **NUNCA apagar `.git`** — perde histórico
3. **Trabalhar na `nova-interface`** até estar 100% pronto
4. **Mobile (<900px) está bom** — não mexer sem motivo forte
5. **Atualizar este MD** ao final de cada sessão
6. **Fonte de verdade é o Git**, não o MD
7. **Ao abrir nova conversa com Claude:** envia este MD primeiro

---

## 🎯 COMO RETOMAR NA PRÓXIMA SESSÃO

1. **Sincroniza Git** primeiro (push do trabalho → pull no notebook ou vice-versa)
2. **Envia este MD** pro Claude
3. **Envia o `index.css` e `js/index.js` atuais**
4. **Diga:** "Quero aplicar a Opção A do problema documentado — gradiente 40px"
5. **Testa, ajusta se preciso, segue pras próximas missões**

---

**Status final da sessão 4:** Home tecnicamente completa. Falta calibrar 1 detalhe estético (gradiente) e aplicar fluid design nas outras 7 páginas. ~75% do projeto concluído.
