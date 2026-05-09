# 📌 PENDÊNCIAS — Master Bord

> Lista de melhorias técnicas e ajustes pequenos de polimento.
> Para visão geral do projeto e sessões: ver `PROJETO-MASTER-BORD.md`.
> Para inventário de imagens: ver `IMAGENS-INSTRUCOES.md`.

**Última atualização:** 09/05/2026

---

## ✅ Resolvidas

### ~~1. Bug `img-border` sem ponto em `css/index.css`~~

**Estava:** seletor `img-border {}` sem ponto na linha ~462 — regra morta (tratava como tag, não como classe).
**Resolvido em:** Sessão de cleanup de inline styles. Regra removida; comportamento real estava em `.mb-image .img-border` (global.css).

---

## 🔥 Próxima — alta prioridade

### 2. Criar variáveis CSS centrais para as 5 cores principais

**Problema atual:** as cores ainda aparecem como `rgba(74, 139, 214, X)` literal espalhadas em vários arquivos CSS. Pra mudar uma cor (ex: trocar tom do azul), precisa caçar em `index.css`, `catalogo.css`, `produtos.css`, `sobre.css`, `produto.css` e atualizar manualmente em vários lugares.

**Solução proposta:** centralizar as 5 cores + suas variantes RGB em variáveis CSS no `:root` do `global.css`. Mudar uma variável uma vez = atualiza site inteiro.

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
  /* glow segue cor base: */
  --angle-azul-glow: 0deg;
  --angle-vinho-glow: 35deg;
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

/* Depois (uma única regra serve pra qualquer cor) */
.is-laser .img-pattern {
  background: repeating-linear-gradient(
    var(--angle-ouro),
    transparent 0 6px,
    rgba(var(--mb-ouro-rgb), 0.13) 6px 7px
  );
}
```

**Onde aplicar (arquivos que precisam ser atualizados):**

- `css/global.css` — adicionar as novas variáveis no `:root`
- `css/index.css` — `.produto-card.is-X`, `.galeria-item.is-X` (8 blocos)
- `css/produtos.css` — `.produto-index-card.is-X` (3 blocos)
- `css/catalogo.css` — `.catalogo-item[data-cat="X"]` (4 blocos)
- `css/sobre.css` — `.certificado-card.is-X`, `.infra-img-*` (7 blocos)
- `css/produto.css` — já usa `--cor-produto-rgb` mas pode ser refatorado pra usar as novas variáveis globais

**Bônus dessa refatoração:**
1. **Mudar uma cor = mudar 1 linha** no `global.css` — propaga pro site inteiro.
2. Se um dia o cliente pedir tons mais claros/escuros/diferentes, é trivial.
3. Possível criar um modo "tema alternativo" no futuro só sobrescrevendo `:root` em uma class.
4. CSS fica mais legível — `var(--mb-azul-rgb)` é mais semântico que `74, 139, 214`.

**Esforço estimado:** 30-45 min.

---

## 🔧 Pequenas — quando der tempo

### 3. Filtros decorativos da galeria sem função

[index.html:320-324](index.html#L320-L324) tem 3 spans de filtros que não fazem nada (era controlado pelo JS removido).

```html
<div class="galeria-filtros">
  <span class="border-baixo">Bordados</span>
  <span class="border-baixo">Etiquetas</span>
  <span class="border-baixo">Laser</span>
</div>
```

**Opções:**

- (a) Remover o bloco inteiro — limpa o HTML.
- (b) Manter visualmente mas sem clique (decoração).
- (c) Re-implementar como filtro que esconde/mostra os 5 cards via CSS `display: none` ou JS leve.

### ~~4. Font Awesome duplicado em `index.html`~~

~~Linhas 14 e 19-22 carregavam o mesmo CSS 2x.~~ ✅ **Resolvido** — duplicata removida.

### 5. Calibrar `.carousel-caption` (legenda dos slides do hero)

Tamanho/posição/cor sobre a imagem ainda pode receber polimento fino — ver Sessão 8/9 do `PROJETO-MASTER-BORD.md`.

---

## 🌐 Conteúdo (depende do cliente)

### 6. Substituir dados fictícios

Marcados como `[SUBSTITUIR: X]` ou inventados:

- [ ] EMAIL real
- [ ] RUA, NÚMERO completo
- [ ] CEP
- [ ] CNPJ
- [ ] Datas da timeline em `sobre.html` (1995, 2003, 2011, 2018)
- [ ] Estatísticas de `sobre.html` (2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês)
- [ ] Depoimentos REAIS (atualmente Juliana Farah, Rafael Teixeira, Clara Moretti são inventados)

### 7. Decidir com o cliente Master Bord

- [ ] Aprovar perda da "moldura técnica certificada" (cantos dourados removidos da hero-spec-card)
- [ ] Decidir entre pattern do `pega/` (imagem fixa global blur) **ou** manter fullscreen carousel atual

---

## 🏗️ Estrutural — sessão dedicada

### 8. Aplicar fluid design nas outras 7 páginas

Replicar `@media (min-width: 900px)` + `clamp()` que está em `css/index.css` para:

- `sobre.html` / `sobre.css`
- `produtos.html` / `produtos.css`
- `produto-bordado.html` + `produto-etiqueta.html` + `produto-laser.html` (compartilham `produto.css`)
- `catalogo.html` / `catalogo.css`
- `contato.html` / `contato.css`

---

## 🧪 Final — testes + deploy

### 9. Testes em 4 viewports

- [ ] 1920×1080 (desktop grande)
- [ ] 1280×720 (notebook 13")
- [ ] 768px (tablet)
- [ ] 375px (mobile)

### 10. Deploy

- [ ] Commit final `nova-interface`
- [ ] Push origin
- [ ] Merge na `main`
- [ ] Verificar GitHub Pages funcionando

### 11. (Opcional) Paleta mais clara — só se cliente solicitar
