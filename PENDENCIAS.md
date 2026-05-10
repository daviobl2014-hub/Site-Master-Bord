# 📌 PENDÊNCIAS — Master Bord

> Lista de melhorias técnicas e ajustes de polimento.
> Para visão geral do projeto e sessões: ver `PROJETO-MASTER-BORD.md`.
> Para inventário de imagens: ver `IMAGENS-INSTRUCOES.md`.

**Última atualização:** 10/05/2026

---

## ✅ RESOLVIDAS

### Cleanup técnico (Sessão 12 — limpeza geral)

- ✅ **Bug `img-border` sem ponto** em `css/index.css` — regra morta removida (tratava como tag, não classe).
- ✅ **Inline styles eliminados** — ~242 `style=""` removidos das 9 páginas de produção. Movidos pra CSS via modifier classes `.is-{cor}`.
- ✅ **Ângulos do pattern padronizados** por cor (canônico do site inteiro):
  - Azul = `0deg`
  - Vinho = `35deg`
  - Ouro = `-70deg` (invertido)
  - Vinho-glow = `35deg` (segue cor base)
  - Azul-glow = `0deg` (segue cor base)
- ✅ **JS dormente da galeria filtrada** removido (~115 linhas em `js/index.js`) — substituído por comentário explicativo.
- ✅ **Font Awesome duplicado** em `index.html` linhas 19-22 removido — economiza 1 request HTTP.
- ✅ **Comentário desatualizado** em `css/index.css` atualizado — não mencionava mais "ficha técnica" que não existe desde sessão 8.

### Polimento UX (Sessão 13 — refatoração + tooltip depoimentos)

- ✅ **Class `border-baixo` extinta + filtros da galeria aprovados como decorativos** — era usada só nos 3 spans dos filtros da galeria. Fundi tudo no seletor `.galeria-filtros span` + `::after`. HTML mais limpo, escopo claro. Os spans seguem sem função de clique (decorativos puros, aprovado pelo Davi).
- ✅ **Typos acidentais consertados** em `index.html` — `it  <head>` (linha 3) e `g        <!-- Item 1 -->` (linha 320) inseridos por erro de digitação.
- ✅ **Tooltip dos depoimentos refatorado** (3 melhorias):
  1. **Centralizado pelo card** — antes ancorava no `<a>` (largura do trecho de texto), agora ancora no `<p>` (largura do card).
  2. **Card inteiro clicável + cursor pointer** — técnica "stretched link" via `::before` do `<a>` cobrindo o card via `inset: 0`. Footer com `z-index: 2` mantém avatar do Instagram do autor clicável independentemente.
  3. **Hover no card todo dispara tooltip** — `.depoimento-card:hover .depoimento-texto::after` em vez de `:hover` no `<a>`.
  4. **Tooltip aparece acima do TEXTO** (não acima do card todo) — `data-tooltip` no `<p>` com âncora `position: relative` no próprio parágrafo.
  5. **`.depoimento-card { overflow: visible }`** — override do `.mb-card` (que tem `overflow: hidden`) pro tooltip não ser cortado.

---

## 🔥 PRÓXIMA — alta prioridade

### 1. Criar variáveis CSS centrais para as 5 cores principais

**Problema atual:** as cores ainda aparecem como `rgba(74, 139, 214, X)` literal espalhadas em vários arquivos CSS. Pra mudar uma cor (ex: trocar tom do azul), precisa caçar em `index.css`, `catalogo.css`, `produtos.css`, `sobre.css`, `produto.css` e atualizar manualmente.

**Solução proposta:** centralizar as 5 cores + suas variantes RGB + ângulos em variáveis CSS no `:root` do `global.css`. Mudar uma variável uma vez = atualiza site inteiro.

**Estado desejado:**

```css
/* css/global.css :root */
:root {
  /* === Cores principais (já existem) === */
  --mb-azul: #4a8bd6;
  --mb-vinho: #c44b55;
  --mb-ouro: #d4a96a;
  --mb-azul-glow: #6ba8e8;
  --mb-vinho-glow: #e56670;

  /* === NOVAS: RGB triples pra usar dentro de rgba() === */
  --mb-azul-rgb: 74, 139, 214;
  --mb-vinho-rgb: 196, 75, 85;
  --mb-ouro-rgb: 212, 169, 106;
  --mb-azul-glow-rgb: 107, 168, 232;
  --mb-vinho-glow-rgb: 229, 102, 112;

  /* === NOVAS: ângulos canônicos do pattern por cor === */
  --angle-azul: 0deg;
  --angle-vinho: 35deg;
  --angle-ouro: -70deg;
  --angle-azul-glow: 0deg; /* segue cor base */
  --angle-vinho-glow: 35deg; /* segue cor base */
}
```

**Como ficam as regras CSS depois:**

```css
/* Antes */
.produto-card.is-laser .img-pattern {
  background: repeating-linear-gradient(
    -70deg,
    transparent 0 6px,
    rgba(212, 169, 106, 0.13) 6px 7px
  );
}

/* Depois */
.produto-card.is-laser .img-pattern {
  background: repeating-linear-gradient(
    var(--angle-ouro),
    transparent 0 6px,
    rgba(var(--mb-ouro-rgb), 0.13) 6px 7px
  );
}
```

**Onde aplicar (arquivos que precisam ser refatorados):**

- `css/global.css` — adicionar as novas variáveis no `:root`
- `css/index.css` — `.produto-card.is-X` (3 cores), `.galeria-item.is-X` (5 cores) = 8 blocos
- `css/produtos.css` — `.produto-index-card.is-X` = 3 blocos
- `css/catalogo.css` — `.catalogo-item[data-cat="X"]` = 4 blocos
- `css/sobre.css` — `.certificado-card.is-X` (4) + `.infra-img-*` (3) = 7 blocos
- `css/produto.css` — já usa `--cor-produto-rgb`, mas pode ser refatorado pra usar as novas variáveis globais

**Bônus dessa refatoração:**

1. **Mudar uma cor = mudar 1 linha** no `global.css` — propaga pro site inteiro.
2. Cliente pediu tons mais claros/escuros? Trivial.
3. Possível criar "tema alternativo" no futuro só sobrescrevendo `:root` em uma class.
4. CSS fica mais legível — `var(--mb-azul-rgb)` é mais semântico que `74, 139, 214`.

**Esforço estimado:** 30-45 min.

---

## 🔧 PEQUENAS — quando der tempo

### 2. Calibrar `.carousel-caption` (legenda dos slides do hero)

Tamanho/posição/cor sobre a imagem ainda pode receber polimento fino — ver Sessão 8/9 do `PROJETO-MASTER-BORD.md`.

---

## 🌐 CONTEÚDO — depende do cliente

### 3. Substituir dados fictícios

Marcados como `[SUBSTITUIR: X]` ou inventados:

- [ ] EMAIL real
- [ ] RUA, NÚMERO completo
- [ ] CEP
- [ ] CNPJ
- [ ] Datas da timeline em `sobre.html` (1995, 2003, 2011, 2018)
- [ ] Estatísticas de `sobre.html` (2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês)
- [ ] Depoimentos REAIS (atualmente Juliana Farah, Rafael Teixeira, Clara Moretti = inventados)

### 4. Decisões pendentes com o cliente Master Bord

- [ ] Aprovar perda da "moldura técnica certificada" (cantos dourados removidos da `hero-spec-card`)
- [ ] Decidir entre pattern do `pega/` (imagem fixa global blur) **ou** manter fullscreen carousel atual

---

## 🖼️ IMAGENS — sessão dedicada (próxima fase)

### 5. Substituir os 42 placeholders por imagens reais

Detalhamento completo em `IMAGENS-INSTRUCOES.md`:

- [ ] Criar caixas no Corel seguindo aspect-ratios da tabela
- [ ] Exportar (sRGB, JPG q85 progressive, tamanhos 2x)
- [ ] Salvar em `img/` com nomes definidos
- [ ] Trocar `<div class="mb-image">...</div>` por `<img>` reais nos 7 HTMLs

---

## 🏗️ ESTRUTURAL — sessão dedicada

### 6. Aplicar fluid design nas outras 7 páginas

Replicar `@media (min-width: 900px)` + `clamp()` que está em `css/index.css` para:

- `sobre.html` / `sobre.css`
- `produtos.html` / `produtos.css`
- `produto-bordado.html` + `produto-etiqueta.html` + `produto-laser.html` (compartilham `produto.css`)
- `catalogo.html` / `catalogo.css`
- `contato.html` / `contato.css`

---

## 🧪 FINAL — testes + deploy

### 7. Testes em 4 viewports

- [ ] 1920×1080 (desktop grande)
- [ ] 1280×720 (notebook 13")
- [ ] 768px (tablet)
- [ ] 375px (mobile)

### 8. Deploy

- [ ] Commit final em `nova-interface`
- [ ] Push origin
- [ ] Merge na `main`
- [ ] Verificar GitHub Pages funcionando

### 9. (Opcional) Paleta mais clara

Só se cliente solicitar.

---

## 📊 Resumo do progresso

| Categoria | Status |
|---|---|
| 🐛 Bugs/cleanup técnico | ✅ **8/8 resolvidos** (sessão 12+13) |
| 🎨 Polimento UX (tooltip depoimentos + class extinta + typos + filtros limpos) | ✅ **4/4 resolvidos** (sessão 13) |
| 🔥 Variáveis CSS centrais | 🟡 Pendente (próxima alta prioridade) |
| 🔧 Polimento restante (caption do carrossel) | 🟡 1 pendente |
| 🌐 Conteúdo cliente | 🔴 9 pendentes (bloqueado pelo cliente) |
| 🖼️ Imagens reais | 🔴 42 caixas pendentes (próxima fase) |
| 🏗️ Fluid design 7 páginas | 🔴 Pendente |
| 🧪 Testes + Deploy | 🔴 Pendente |
