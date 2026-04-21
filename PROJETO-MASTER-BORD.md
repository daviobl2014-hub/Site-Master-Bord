# 📘 PROJETO MASTER BORD — CONTEXTO

> **Arquivo de continuidade entre conversas com Claude.**
> Sempre que iniciar nova conversa, envie este arquivo primeiro.
> Atualize ao final de cada sessão de trabalho.

---

## 🎯 OBJETIVO DO PROJETO

Construir o site institucional da **Master Bord** (empresa de etiquetas tecidas, bordados e corte a laser) em **HTML + CSS + JavaScript puro**, sem frameworks, sem build tools, sem dependências.

Características:
- Estrutura de pastas organizada (css/, js/, imagens/)
- CSS separado em `global.css` + CSS por página
- JS separado em `global.js` + JS por página quando necessário
- Zero build — arquivos abrem direto no navegador
- Publicação no GitHub Pages
- Projeto aprovado formalmente pela Master Bord

---

## 👤 CONTEXTO DO DESENVOLVEDOR

- **Nome:** Davi
- **Empresa:** Dono de tecelagem em Petrópolis-RJ (produz para Master Bord como cliente externo)
- **Relação:** Master Bord é cliente da tecelagem; Davi está refazendo o site deles com aprovação formal
- **Perfil:** Desenvolvedor iniciante-intermediário. Aprendeu Git, HTML/CSS/JS e Python por conta própria. Entende conceitos mas precisa de passo a passo em ferramentas novas.
- **Estilo preferido:** Direto, sem rodeios, com desafio honesto. Aprende melhor iterando visualmente. Prefere entender o padrão antes de replicar em escala.
- **Idioma:** Português brasileiro

---

## 🗂️ ESTRUTURA DE BRANCHES GIT

- **Repositório:** https://github.com/daviobl2014-hub/Site-Master-Bord
- **`main`** → site antigo HTML/CSS puro (publicado em GitHub Pages)
- **`nova-interface`** → branch de desenvolvimento da nova versão

**URL do site antigo publicado:** https://daviobl2014-hub.github.io/Site-Master-Bord

---

## 💻 AMBIENTES DE TRABALHO

| Máquina | Sistema | Node | Uso |
|---|---|---|---|
| PC trabalho (Petrópolis) | Windows 7 | v13 (desatualizado) | Edição HTML/CSS/JS direta |
| Notebook casa | Windows 10 | v24.11.0 | Edição HTML/CSS/JS direta |

**Vantagem da escolha atual (HTML puro):** os dois ambientes funcionam igual, sem necessidade de Node.js para desenvolver.

---

## 🎨 IDENTIDADE VISUAL (tokens originais do mb-theme.jsx)

> ⚠️ **NOTA:** Davi fez ajustes visuais (cores, textos) no `index.html`, `global.css` e `index.css` após a geração inicial. As cores/textos reais do site podem divergir dos valores abaixo. **Fonte de verdade: os arquivos atuais no repositório Git (branch `nova-interface`).** Consulte-os antes de qualquer mudança visual.

### Cores base (valores iniciais — podem ter sido alterados)
```
bg:         #0F1116   (fundo escuro principal)
bgSoft:     #181B22   (fundo secundário)
bgDeep:     #0A0C10   (fundo mais escuro)
card:       #20242D   (cartões)
paper:      #F2ECE0   (texto claro - papel)
paperDim:   #D4CFC3   (texto claro suave)
azul:       #4A8BD6   (cor primária 1)
azulGlow:   #6BA8E8   (azul brilhante)
vinho:      #C44B55   (cor primária 2 - CTA)
vinhoGlow:  #E56670   (vinho brilhante)
ouro:       #D4A96A   (destaque terciário)
muted:      #8B8F99   (texto secundário)
line:       #2E3340   (linhas/bordas)
green:      #7FC291   (status online)
```

**Todas as cores vivem em `css/global.css` dentro do `:root`.** Mudança global = editar uma linha.

### Fontes
- **Bauhaus** (display/títulos) — via fontes.cdnfonts.com
- **Inter** (UI/texto) — Google Fonts
- **JetBrains Mono** (monoespaçado/técnicos) — Google Fonts
- **Playfair Display** (itálicos serifados) — Google Fonts
- **Space Grotesk** (fallback de Bauhaus) — Google Fonts

### Estilo
- Dark mode industrial/técnico
- Elementos com aparência de "ficha técnica"
- Grid técnica de fundo (`.tech-grid`)
- Tags no formato `[ TEXTO ]` (via CSS `::before` e `::after`)
- Números com letter-spacing negativo

---

## 📐 DECISÃO TÉCNICA FINAL (sessão 2)

Foi tomada uma decisão de arquitetura **diferente** do plano original (que previa React + Vite). Histórico da decisão:

### O que foi considerado e descartado
1. **Vite + React + CSS Modules** — descartado por: SEO mais fraco, complexidade desnecessária, incompatibilidade com PC do trabalho (Win 7 / Node 13)
2. **Astro + TypeScript** — recomendado por Claude, mas descartado por: exigir Node moderno (trava o PC do trabalho), curva de aprendizado, trabalho de conversão dos JSX
3. **HTML + CSS + JS puro** — **escolhido** por: simplicidade máxima, funciona em qualquer máquina, Davi já conhece, zero dependência

### Trade-offs aceitos conscientemente
- **Duplicação de header/footer nas 8 páginas** — mudança em dados do header/footer precisa ser replicada em cada arquivo HTML. Davi aceitou esse custo em troca da simplicidade.
- **Perda dos 6 JSX do designer como código executável** — viraram referência visual para reescrita em HTML puro.
- **Filtros e interatividade reescritos em JS vanilla** — sem React, tudo com `addEventListener` + `classList`.

### Por que HTML puro funciona bem neste caso
- Site institucional de 8 páginas (não é app)
- SEO forte (Google ama HTML pronto)
- Só Davi edita (não precisa de CMS)
- Edição rara (quando muda algo importante) — duplicação de header dói pouco
- Deploy trivial no GitHub Pages

---

## 🏗️ ESTRUTURA DE PASTAS ATUAL

```
master-bord/
├── index.html              ← FEITA ✅ (home)
├── sobre.html              ← FEITA ✅
├── produtos.html           ← FEITA ✅ (índice dos 3 produtos)
├── produto-etiqueta.html   ← FEITA ✅
├── produto-bordado.html    ← FEITA ✅
├── produto-laser.html      ← FEITA ✅
├── catalogo.html           ← FEITA ✅
├── contato.html            ← FEITA ✅
├── css/
│   ├── global.css          ← FEITO ✅ (reset, :root, header, footer, componentes)
│   ├── index.css           ← FEITO ✅ (hero, produtos home, galeria, depoimentos, logos, processo)
│   ├── sobre.css           ← FEITO ✅
│   ├── produtos.css        ← FEITO ✅
│   ├── produto.css         ← FEITO ✅ (compartilhado pelos 3 — cor via body[data-cor])
│   ├── catalogo.css        ← FEITO ✅
│   └── contato.css         ← FEITO ✅
├── js/
│   ├── global.js           ← FEITO ✅ (header scroll)
│   ├── catalogo.js         ← FEITO ✅ (filtro por categoria)
│   └── contato.js          ← FEITO ✅ (validação + envio via WhatsApp)
└── img/                    ← pendente (fotos reais)
```

### Regra de separação CSS (importante para próximas páginas)
- **`global.css`** → tudo que aparece em **mais de uma página**: reset, variáveis, header, footer, botões (`.btn*`), tag (`.mb-tag`), título (`.mb-title`), card (`.mb-card`), grid (`.tech-grid`), logo (`.logo`), imagem placeholder (`.mb-image`), highlights de cor, section-head
- **`[pagina].css`** → só o que é **exclusivo** daquela página (hero da home, timeline do sobre, filtro do catálogo, formulário do contato, etc.)

---

## 📋 ARQUIVOS JSX ORIGINAIS (source de referência, não execução)

Os 6 JSX ficam na pasta do projeto apenas como **referência visual** para replicar design nas próximas páginas. Não são executados.

- `mb-theme.jsx` — cores, fontes, componentes base (MB, FONT, MBTag, MBTitle, etc)
- `mb-shell.jsx` — header e footer (MBHeader, MBFooter)
- `mb-home.jsx` — home completa (Hero, Produtos, Galeria, Depoimentos, Logos, Processo)
- `mb-sobre.jsx` — página sobre (Hero, Timeline, Certificados, Infra)
- `mb-produtos.jsx` — páginas de produto (ProdutoHero, Specs, Aplicações, Relacionados, ProdutosIndex)
- `mb-catalogo-contato.jsx` — catálogo (com filtros) e contato (com formulário)

---

## 🚧 DADOS FICTÍCIOS A SUBSTITUIR

Placeholders marcados com `[SUBSTITUIR: X]` — localizáveis com Ctrl+F:

- `[SUBSTITUIR: TELEFONE]`
- `[SUBSTITUIR: EMAIL]`
- `[SUBSTITUIR: RUA, NÚMERO]`
- `[SUBSTITUIR: CIDADE · UF]`
- `[SUBSTITUIR: CEP]`
- `[SUBSTITUIR: CNPJ]`

**Outros dados fictícios (não marcados ainda) que precisam confirmação da Master Bord:**
- Timeline anos: 1995, 2003, 2011, 2018 (verificar datas reais)
- Estatísticas: 2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês, 500+ marcas, 30+ anos
- Nomes de clientes nos logos: Atelier M., Farah&Co, Teixeira, Nórdica, Linha 14, Petit, Concreto, Brava, Kibon, Alma
- Depoimentos: Juliana Farah, Rafael Teixeira, Clara Moretti (são nomes inventados)
- Todas as imagens são placeholders CSS (retângulos com pattern diagonal)

---

## 📍 STATUS ATUAL

### ✅ CONCLUÍDO
- [x] Repositório GitHub criado e publicado
- [x] Branch `nova-interface` criada
- [x] Arquivos antigos removidos
- [x] 6 arquivos JSX recebidos como referência
- [x] **Decisão técnica final:** HTML + CSS + JS puro (sem React, sem Vite, sem Astro)
- [x] **Home (`index.html`)** com 6 seções: Hero, Produtos, Galeria, Depoimentos, Logos, Processo
- [x] **Sobre (`sobre.html`)** com Hero, Timeline (5 marcos), Certificados (4 cards), Infraestrutura
- [x] **Produtos índice (`produtos.html`)** — 3 cards linkando pras páginas de detalhe
- [x] **Produto Etiqueta / Bordado / Laser** — 3 páginas de detalhe com Hero + Specs + Aplicações + Relacionados
- [x] **Catálogo (`catalogo.html`)** — 12 itens com filtro sticky por categoria
- [x] **Contato (`contato.html`)** — Hero + formulário + mapa
- [x] **CSS:** `global.css` + 1 CSS por página (`sobre`, `produtos`, `produto` compartilhado pelos 3, `catalogo`, `contato`)
- [x] **JS:** `global.js` (header scroll) + `catalogo.js` (filtro) + `contato.js` (validação + envio via WhatsApp)
- [x] Header e footer fiéis ao design dos JSX, duplicados nas 8 páginas
- [x] Responsividade via `@media (max-width: 900px)` em todas as páginas
- [x] Truque do `body[data-cor="azul|vinho|ouro"]` em `produto.css` evita 3 CSS quase iguais
- [x] **Commit feito** (sessão 2) na branch `nova-interface` com Home

### 🔄 EM ANDAMENTO
- [ ] **Próxima ação:** testar as 7 páginas novas no navegador (desktop + mobile) e commitar

### 🎯 MUDANÇAS PEDIDAS PRA PRÓXIMA SESSÃO (Davi pediu, não fazer agora)
- [ ] **Carrossel na imagem central do `index.html`** — hoje é uma `<img>` única dentro de `.hero-spec-card .carousel` (linhas ~162-167 do `index.html`). Já existem comentadas referências a `ia1.png` e `laser.png`. Implementar troca automática (ou setas) entre 2-3 imagens.
- [ ] **Responsividade da imagem por seção** — garantir que cada hero/imagem caiba 100% na viewport sem cortar nem precisar scrollar lateral. Revisar especialmente seções de hero e galeria em telas pequenas/médias.
- [ ] **Esquema de cores mais claro pra todos os HTMLs** — testar uma paleta clara (fundo branco/off-white em vez do `#0F1116` atual) ou modo híbrido. Cores ficam centralizadas em `css/global.css :root` (linhas 20-44) — mudar só ali se mantiver os mesmos nomes de variáveis.

### ⏳ PENDENTE
- [ ] **Trocar `WHATSAPP_NUMERO` em `js/contato.js:14`** pelo número real da Master Bord (formato `5524XXXXXXXX`)
- [ ] Substituir os `[SUBSTITUIR: ...]` pelos dados reais (telefone, email, endereço, CEP, CNPJ)
- [ ] Confirmar com a Master Bord os dados ainda fictícios: anos da timeline, estatísticas (2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês), nomes nos depoimentos, logos de clientes
- [ ] Adicionar fotos reais da fábrica/produtos em `img/` (todas as imagens hoje são placeholders CSS)
- [ ] Testar todas as 8 páginas em desktop e mobile
- [ ] Merge da branch `nova-interface` para `main` quando tudo estiver pronto
- [ ] Publicação no GitHub Pages

---

## 💡 DECISÕES TÉCNICAS TOMADAS

1. **HTML + CSS + JS puro** — sem frameworks, sem build
2. **Arquivos separados** — `index.html` limpo, sem `<style>` ou `<script>` grandes inline
3. **CSS global + CSS por página** — evita duplicação massiva
4. **Variáveis CSS no `:root`** — mudança de cor em todo o site = 1 linha editada
5. **Header/footer duplicados em cada HTML** — custo aceito em troca da simplicidade
6. **Classes BEM-inspired** — padrão `bloco-elemento` (`.hero-title`, `.produto-card`, `.etapa-numero`)
7. **Responsividade por `@media`** — breakpoint em 900px, substituiu a prop `mobile` dos JSX
8. **Fontes via CDN** — Google Fonts + cdnfonts.com (trade-off: precisa de internet)
9. **Sem TypeScript** — JS vanilla simples
10. **Sem React Router** — navegação via `<a href>` tradicional, 1 página = 1 arquivo HTML

---

## 🔧 COMANDOS ÚTEIS

```bash
# Git - trocar branch
git checkout nova-interface
git checkout main

# Git - salvar e enviar
git add .
git commit -m "mensagem descritiva"
git push origin nova-interface

# Git - baixar do GitHub
git pull

# Testar site localmente
# Basta abrir index.html no navegador (duplo-clique)
# Não precisa de servidor, Node ou build
```

---

## 📝 PADRÃO PARA PRÓXIMAS PÁGINAS (template mental)

Ao criar `sobre.html` (e outras), seguir esta estrutura:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Meta + fontes (igual index.html) -->
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/sobre.css">  ← CSS específico desta página
</head>
<body>
  <!-- HEADER (copiar do index.html, mudar class="active" para o link correto) -->
  <!-- SEÇÕES ESPECÍFICAS DA PÁGINA -->
  <!-- FOOTER (copiar do index.html idêntico) -->
  <script src="js/global.js"></script>
  <!-- Se a página tiver JS próprio: <script src="js/sobre.js"></script> -->
</body>
</html>
```

**Regras:**
- Usar classes do `global.css` sempre que possível (`.mb-tag`, `.mb-title`, `.mb-card`, `.btn-primary`, etc.)
- Criar classes novas **só** para o que é exclusivo da página
- Media query mobile em 900px mantém consistência
- Marcar link ativo do menu com `class="active"`

---

## 📖 HISTÓRICO DE SESSÕES

### Sessão 1 — 20/04/2026 (manhã)
- Discussão inicial sobre design do site Master Bord
- Análise do site antigo publicado em GitHub Pages
- Criação de mockup HTML com seções faltantes
- Decisão inicial de migrar para React/Vite
- Limpeza da branch `nova-interface`
- Criação do projeto Vite no notebook de casa
- 6 arquivos JSX identificados e recebidos

### Sessão 2 — 20/04/2026 (tarde) — **ATUAL**
**Conversa debatida com Claude como coach técnico. Mudanças importantes:**
1. Claude desafiou o plano inicial React/Vite apontando furos:
   - Styles inline são anti-padrão em 2026
   - SPA é handicap para SEO em site institucional
   - JSX "sem TypeScript" esconde bugs
   - React Router deveria entrar na FASE 1, não 3
2. Davi considerou Astro (recomendado por Claude), depois escolheu **HTML + CSS + JS puro** por simplicidade e compatibilidade com PC de trabalho (Win 7 / Node 13)
3. Master Bord confirmada como cliente com projeto **aprovado formalmente**
4. Claude gerou `index.html` completo com tudo inline
5. Davi pediu separação em arquivos
6. Claude refez em 4 arquivos: `index.html` + `css/global.css` + `css/index.css` + `js/global.js`
7. Davi fez ajustes visuais posteriores (cores, textos) nos arquivos — **commit já feito** na branch `nova-interface`
8. MD atualizado para refletir a nova realidade do projeto

**Próxima etapa:** criar `sobre.html` seguindo o padrão estabelecido.

### Sessão 3 — 20/04/2026 (noite) — **ATUAL**
**Geradas todas as 7 páginas restantes em uma sessão.** Decisões e marcos:

1. **`sobre.html` + `css/sobre.css`** — Hero, Timeline (5 marcos: 1995→2026), Certificados (4 cards), Infraestrutura (3 imagens placeholder + 4 stats)
2. **Discussão sobre header/footer compartilhado** — Davi perguntou se dava pra fazer 1 arquivo só. Claude apresentou as opções (JS fetch quebra SEO, SSI não roda no GitHub Pages, build precisa Node) e recomendou manter duplicado. **Decisão mantida:** duplicação aceita.
3. **`produtos.html` + `css/produtos.css`** — índice com 3 cards linkando pras páginas de detalhe
4. **Davi pediu pular pra `contato.html` antes dos detalhes de produto** — feito:
   - `contato.html` — Hero com texto+info à esquerda, formulário à direita, mapa abaixo
   - `css/contato.css` — estilos do form (inputs, checks, erros)
   - `js/contato.js` — **decisão tomada por Claude:** validação inline + abrir WhatsApp com mensagem montada (sem backend, mais útil que só "obrigado"). Davi precisa trocar `WHATSAPP_NUMERO` na linha 14.
5. **`catalogo.html` + `css/catalogo.css` + `js/catalogo.js`** — 12 itens hardcoded no HTML (melhor SEO que renderizar via JS), filtro sticky com 5 categorias, contador dinâmico, mensagem de "vazio"
6. **3 páginas de produto + `css/produto.css` compartilhado** — usadas variáveis CSS via `body[data-cor="azul|vinho|ouro"]` pra reusar 100% do CSS entre etiqueta/bordado/laser. Cada página: Hero (breadcrumb + ET/BR/LA + título + sample), Specs (8 itens em 2 colunas), Aplicações (5 quadrados), Outros Produtos (links pras outras 2)
7. **Limite do plano original mantido:** zero JS framework, zero build, tudo abre direto no navegador

**Próxima etapa:** Davi vai testar visualmente no navegador e commitar as mudanças.

---

## ⚠️ LEMBRETES IMPORTANTES

1. **Push antes de sair, pull ao chegar** — sempre sincronizar entre máquinas
2. **NUNCA apagar a pasta `.git`** — contém todo o histórico
3. **Trabalhar SEMPRE na branch `nova-interface`** até estar 100% pronto
4. **Só fazer merge para `main` quando tudo estiver testado**
5. **Dados fictícios precisam ser substituídos** antes de publicar
6. **Fonte de verdade para código atual é o Git, não este MD** — o MD descreve intenção e decisões; o código tem o estado real
7. **Sempre atualizar este MD ao final de cada sessão** — linhas 1-2 no Histórico bastam
8. **Ao abrir nova conversa com Claude:** enviar este MD primeiro, depois arquivos editados

---

## 🎯 COMO RETOMAR NA PRÓXIMA SESSÃO

Se você voltar a conversar comigo (Claude) em outro dia:

1. **Envie este MD** como primeiro anexo
2. **Envie os arquivos atuais** (`index.html`, `css/global.css`, `css/index.css`, `js/global.js`) — eu preciso ver o estado real, não o que gerei originalmente
3. **Diga o que quer fazer** — ex: "quero criar o sobre.html agora"

Se você quiser só consultar/debater sem código novo:
1. Envie este MD
2. Faça a pergunta

---

**Última atualização:** 20/04/2026 (final da Sessão 3 — todas as 8 páginas geradas)
