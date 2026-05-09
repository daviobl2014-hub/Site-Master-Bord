# 📷 IMAGENS DO SITE — INSTRUÇÕES PRA SUBSTITUIÇÃO

> **Para quem desenha no Corel:** este arquivo lista TODAS as caixas de imagem do site, com tamanhos e legendas, pra você projetar em vetor antes de exportar e substituir.

> **Última atualização:** 09/05/2026

---

## 🧩 Pattern HTML usado em todas as caixas

Toda caixa de imagem segue este pattern (definido em `css/global.css`):

```html
<div class="mb-image">
  <div class="img-gradient" style="..."></div>   <!-- decorativo, pode sair -->
  <div class="img-pattern"  style="..."></div>   <!-- decorativo, pode sair -->
  <div class="img-border"   style="..."></div>   <!-- moldura tracejada, pode sair -->
  <div class="img-label">CÓDIGO · TEXTO</div>    <!-- texto canto superior esquerdo -->
</div>
```

Quando entrar imagem real, vira:

```html
<div class="mb-image">
  <img src="img/[nome].jpg" alt="..." />
  <div class="img-label">CÓDIGO · TEXTO</div>    <!-- texto continua por cima -->
</div>
```

⚠️ **A `img-label`** (texto branco no canto superior esquerdo) precisa de **espaço respirável na imagem nessa região** — evite colocar elemento visual importante lá.

---

## 📊 Resumo total

**42 caixas de imagem** distribuídas em 7 páginas:

| Página | Quantidade | Aspect mais comum |
|---|---|---|
| index.html | 6 | 5/3 + fullscreen |
| produtos.html | 3 | 5/4 |
| sobre.html | 3 | 16/10 + livre |
| produto-bordado.html | 6 | 3/4 + 1/1 |
| produto-etiqueta.html | 6 | 3/4 + 1/1 |
| produto-laser.html | 6 | 3/4 + 1/1 |
| catalogo.html | 12 | 1/1 |
| **TOTAL** | **42** | |

---

## 🎯 Cheat sheet rápido pro Corel

| Aspect | Tamanho 2x (Retina) | Bytes alvo (JPG q85) |
|---|---|---|
| 5/3 (HOME produtos) | **1200×720 px** | ~120 KB |
| 5/4 (produtos.html) | **1200×960 px** | ~150 KB |
| 16/10 (infra principal) | **2000×1250 px** | ~250 KB |
| Livre (infra secundária) | **1600×1000 px** | ~200 KB |
| 3/4 (produto hero) | **1200×1600 px** | ~200 KB |
| 1/1 (aplicações + catálogo) | **800×800 px** | ~80 KB |
| Hero fullscreen | **2400×1500 px** | ~350 KB |

**Formato:** JPG progressive, qualidade 85%. Para imagens com transparência ou logos, usar PNG.
**Cores:** sRGB (não Adobe RGB — quebra na web).

---

## 🏠 1. index.html — HOME

### Seção `02 / PRODUTOS` — 3 cards (`aspect 5/3`)

| Posição | img-label | Imagem atual | Sugestão |
|---|---|---|---|
| Esquerda | (sem label) | `img/etiqueta1.png` | **1200 × 720 px** |
| Centro | (sem label) | `img/bordado1.png` | **1200 × 720 px** |
| Direita | (sem label) | `img/laser1.png` | **1200 × 720 px** |

### Seção `01 / HERO` — Carrossel fullscreen (`aspect livre`)

| Slide | Caption sobreposta | Imagem atual | Sugestão |
|---|---|---|---|
| 1 | "Barudan – Bordados" | `img/ia1.png` | **2400 × 1500 px** |
| 2 | "Tear Barudan" | `img/ia2.png` | **2400 × 1500 px** |
| 3 | "Prisma – Corte laser" | `img/laser.png` | **2400 × 1500 px** |

⚠️ Hero tem **Ken Burns** (zoom até 1.18x + translate). Imagem precisa ter resolução pra aguentar zoom sem pixelar. Margem de segurança: deixar conteúdo importante longe das bordas (pode ser cortado pelo zoom).

---

## 📋 2. produtos.html — 3 cards principais (`aspect 5/4`)

| Posição | img-label | Sugestão |
|---|---|---|
| 01 Etiqueta | `SAMPLE ET` | **1200 × 960 px** |
| 02 Bordado | `SAMPLE BR` | **1200 × 960 px** |
| 03 Laser | `SAMPLE LA` | **1200 × 960 px** |

---

## 🏭 3. sobre.html — Seção `03 / INFRAESTRUTURA`

Layout: 1 imagem grande à esquerda + 2 menores empilhadas à direita.

| Container | Aspect | img-label + título | Sugestão |
|---|---|---|---|
| `.infra-img-principal` | **16/10** | `PLANTA · 2400M²` + título "Chão de fábrica" (canto inferior esquerdo, fonte 40px) | **2000 × 1250 px** |
| `.infra-img-secundaria` (topo direita) | livre (1fr) | `TEARES · BARUDAN` | **1600 × 1000 px** |
| `.infra-img-secundaria` (base direita) | livre (1fr) | `LASER · MUCAD` | **1600 × 1000 px** |

⚠️ Na principal, o título "Chão de fábrica" fica no **canto inferior esquerdo** com fonte grande — deixar essa região da imagem respirável.

---

## 🪡 4. produto-bordado.html

### Hero (1 imagem grande vertical, `aspect 3/4`)

| Container | img-label | Sugestão |
|---|---|---|
| `.produto-hero-img` | `SAMPLE BR-002` | **1200 × 1600 px** |

### 5 aplicações em grid (`aspect 1/1`)

| # | img-label | Título sobreposto | Sugestão |
|---|---|---|---|
| 1 | `01/05` | Uniformes corporativos | **800 × 800 px** |
| 2 | `02/05` | Jaquetas | **800 × 800 px** |
| 3 | `03/05` | Bonés | **800 × 800 px** |
| 4 | `04/05` | Camisas polo | **800 × 800 px** |
| 5 | `05/05` | Peças promocionais | **800 × 800 px** |

⚠️ Em cada aplicação, o título (Uniformes, Jaquetas, etc.) fica no **canto inferior** sobre a imagem. Deixar essa faixa inferior respirável.

---

## 🏷️ 5. produto-etiqueta.html

### Hero (`aspect 3/4`)

| Container | img-label | Sugestão |
|---|---|---|
| `.produto-hero-img` | `SAMPLE ET-001` | **1200 × 1600 px** |

### 5 aplicações (`aspect 1/1`)

| # | img-label | Título | Sugestão |
|---|---|---|---|
| 1 | `01/05` | Roupas de autor | **800 × 800 px** |
| 2 | `02/05` | Uniformes | **800 × 800 px** |
| 3 | `03/05` | Acessórios | **800 × 800 px** |
| 4 | `04/05` | Decoração | **800 × 800 px** |
| 5 | `05/05` | Produtos artesanais | **800 × 800 px** |

---

## ⚡ 6. produto-laser.html

### Hero (`aspect 3/4`)

| Container | img-label | Sugestão |
|---|---|---|
| `.produto-hero-img` | `SAMPLE LA-003` | **1200 × 1600 px** |

### 5 aplicações (`aspect 1/1`)

| # | img-label | Título | Sugestão |
|---|---|---|---|
| 1 | `01/05` | Patches | **800 × 800 px** |
| 2 | `02/05` | Tags pendentes | **800 × 800 px** |
| 3 | `03/05` | Rótulos | **800 × 800 px** |
| 4 | `04/05` | Apliques | **800 × 800 px** |
| 5 | `05/05` | Embalagens premium | **800 × 800 px** |

---

## 📚 7. catalogo.html — Grid de produtos (`aspect 1/1`)

12 itens em grid de 3-4 colunas:

| # | Categoria | img-label | Sugestão |
|---|---|---|---|
| 1 | Etiqueta | `ET-012` | **800 × 800 px** |
| 2 | Etiqueta | `ET-016` | **800 × 800 px** |
| 3 | Etiqueta | `ET-022` | **800 × 800 px** |
| 4 | Bordado | `BR-001` | **800 × 800 px** |
| 5 | Bordado | `BR-003` | **800 × 800 px** |
| 6 | Bordado | `BR-005` | **800 × 800 px** |
| 7 | Bordado | `BR-007` | **800 × 800 px** |
| 8 | Laser | `LA-001` | **800 × 800 px** |
| 9 | Laser | `LA-003` | **800 × 800 px** |
| 10 | Laser | `LA-005` | **800 × 800 px** |
| 11 | Laser | `LA-007` | **800 × 800 px** |
| 12 | Mix | `MX-001` | **800 × 800 px** |

---

## 📁 Onde salvar as imagens novas

Pasta de destino: **`img/`** (raiz do projeto, ao lado do `index.html`).

Nomes sugeridos pra novas imagens:

```
img/
├── hero-1.jpg / hero-2.jpg / hero-3.jpg          ← carrossel home
├── home-etiqueta.jpg / home-bordado.jpg /        ← cards 02/PRODUTOS home
│   home-laser.jpg
├── infra-fabrica.jpg                              ← sobre.html principal (16:10)
├── infra-teares.jpg / infra-laser.jpg            ← sobre.html secundárias
├── prod-etiqueta-hero.jpg                        ← produto-etiqueta hero
├── prod-etiqueta-app-1.jpg ... -5.jpg            ← 5 aplicações etiqueta
├── prod-bordado-hero.jpg
├── prod-bordado-app-1.jpg ... -5.jpg
├── prod-laser-hero.jpg
├── prod-laser-app-1.jpg ... -5.jpg
└── catalogo/
    ├── ET-012.jpg, ET-016.jpg, ET-022.jpg
    ├── BR-001.jpg, BR-003.jpg, BR-005.jpg, BR-007.jpg
    ├── LA-001.jpg, LA-003.jpg, LA-005.jpg, LA-007.jpg
    └── MX-001.jpg
```

> Ou pode reusar nomes existentes (etiqueta1.png, bordado1.png, etc.) se quiser substituir sem mexer no HTML.

---

## ✅ Checklist do Davi (Corel → web)

Pra cada imagem:

- [ ] **Aspect-ratio correto** (consultar tabela acima)
- [ ] **Tamanho 2x** (HiDPI/Retina) — ex: se a caixa tem 600×360, exporta 1200×720
- [ ] **sRGB** (não CMYK nem Adobe RGB)
- [ ] **JPG q85 progressive** (ou PNG se transparência)
- [ ] **Conteúdo importante longe das bordas** (texto/labels sobrepõem)
- [ ] **Canto superior esquerdo respirável** pra `img-label`
- [ ] **Canto inferior esquerdo respirável** se a caixa tiver título grande (ex: infra principal "Chão de fábrica", produto-aplicações)
- [ ] **Compressão alvo:** 80-350 KB por imagem (ver tabela)

---

## 🐛 Bug pequeno pra arrumar quando colocar imagens

Em [css/index.css:460](css/index.css#L460) tem:

```css
img-border {  /* ❌ falta o ponto! */
  width: 300px;
  height: 200px;
  border: 2px solid rgba(74, 139, 214, 0.3);
  overflow: hidden;
}
```

Deve ser `.img-border` (com ponto). Atualmente esse seletor não pega nada porque não existe tag HTML chamada `img-border`. Quando colocar `<img>` real nos cards de produto da home, este bug pode atrapalhar — vale corrigir.
