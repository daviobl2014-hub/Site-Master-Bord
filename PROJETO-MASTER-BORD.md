# 📘 PROJETO MASTER BORD — CONTEXTO

> **Arquivo de continuidade entre conversas com Claude.**
> Sempre que iniciar nova conversa, envie este arquivo primeiro.
> Atualize ao final de cada sessão de trabalho.

---

## 🎯 OBJETIVO DO PROJETO

Migrar o site institucional da **Master Bord** (empresa de etiquetas tecidas, bordados e corte a laser) de um HTML + Babel-no-navegador para um projeto **React + Vite** profissional, com:

- Estrutura de pastas organizada
- CSS e JS separados
- Imports corretos (sem `window.X`)
- Fácil edição e manutenção
- Publicação no GitHub Pages

---

## 👤 CONTEXTO DO DESENVOLVEDOR

- **Nome:** Davi
- **Empresa:** Dono de tecelagem em Petrópolis-RJ (produz para Master Bord como cliente externo)
- **Perfil:** Desenvolvedor iniciante-intermediário. Aprendeu Git, HTML/CSS/JS e Python por conta própria. Entende conceitos mas precisa de passo a passo em ferramentas novas.
- **Estilo preferido:** Direto, sem rodeios, com desafio honesto. Aprende melhor iterando visualmente.
- **Idioma:** Português brasileiro

---

## 🗂️ ESTRUTURA DE BRANCHES GIT

- **Repositório:** https://github.com/daviobl2014-hub/Site-Master-Bord
- **`main`** → site antigo HTML/CSS puro (publicado em GitHub Pages)
- **`nova-interface`** → branch de desenvolvimento da nova versão React/Vite

**URL do site antigo publicado:** https://daviobl2014-hub.github.io/Site-Master-Bord

---

## 💻 AMBIENTES DE TRABALHO

| Máquina | Sistema | Node | Uso |
|---|---|---|---|
| PC trabalho (Petrópolis) | Windows 7 | v13 (desatualizado) | Apenas edição HTML/CSS — **não roda Vite** |
| Notebook casa | Windows 10 | v24.11.0 | **Máquina principal para Vite/React** |

**Caminho do projeto Vite (notebook casa):** `C:\Users\DAVI\Desktop\mb-vite`
**Caminho do repositório Git:** `C:\Users\DAVI\Desktop\SITE NOVO` (ainda com JSX antigos)

---

## 🎨 IDENTIDADE VISUAL (tokens do mb-theme.jsx)

### Cores
```
bg:         #0F1116   (fundo escuro principal)
bgSoft:     #181B22   (fundo secundário)
bgDeep:     #0A0C10   (fundo mais escuro)
card:       #20242D   (cartões)
paper:      #F2ECE0   (texto claro - papel)
paperDim:   #D4CFC3   (texto claro suave)
azul:       #4A8BD6   (cor primária 1)
vinho:      #C44B55   (cor primária 2 - CTA)
ouro:       #D4A96A   (destaque terciário)
muted:      #8B8F99   (texto secundário)
line:       #2E3340   (linhas/bordas)
green:      #7FC291   (status online)
```

### Fontes
- **Bauhaus** (display/títulos) — via fontes.cdnfonts.com
- **Inter** (UI/texto) — Google Fonts
- **JetBrains Mono** (monoespaçado/específicos técnicos) — Google Fonts
- **Playfair Display** (itálicos serifados) — Google Fonts

### Estilo
- Dark mode industrial/técnico
- Elementos com aparência de "ficha técnica"
- Grid técnica de fundo (`MBTechGrid`)
- Tags no formato `[ TEXTO ]`
- Números com letter-spacing negativo

---

## 📋 ARQUIVOS JSX ORIGINAIS (source)

### 1. `mb-theme.jsx` — Fundação
**Exporta via window:**
- `MB` (objeto de cores)
- `FONT` (objeto de fontes)
- `MBTag` — tag técnica "[ TEXTO ]"
- `MBTitle` — título grande industrial (sizes: xl, lg, md, sm)
- `MBDivider` — linha divisória
- `MBButton` — botão (variants: primary, secondary, ghost, gold)
- `MBCard` — card com faixa colorida lateral
- `MBTechGrid` — grid técnica de fundo
- `MBLogo` — logo "MasterBord." com cores
- `MBImage` — placeholder de imagem com pattern CSS
- `MBSpecRow` — linha de especificação (key: value)

### 2. `mb-shell.jsx` — Header e Footer
- `MBHeader` — header sticky com utility strip + nav
- `MBFooter` — footer com CTA + 3 colunas + copyright

### 3. `mb-home.jsx` — Página Home
⚠️ **AINDA NÃO ENVIADO PELO DAVI** — pendente para iniciar migração completa

### 4. `mb-sobre.jsx` — Página Sobre
- `SobreHero` — hero da página sobre
- `SobreTimeline` — linha do tempo (1995, 2003, 2011, 2018, 2026)
- `SobreCertificados` — 4 cards (ABVTEX, Barudan, Mucad, ISO)
- `SobreInfra` — imagens da planta + estatísticas
- `SobrePage` — compõe todos acima

### 5. `mb-produtos.jsx` — Páginas de Produto
- `PRODUTOS_DATA` — dados dos 3 produtos (etiqueta, bordado, laser)
- `ProdutoHero` — hero do produto individual
- `ProdutoSpecs` — ficha técnica
- `ProdutoAplicacoes` — grid de aplicações
- `ProdutoRelacionados` — outros produtos
- `ProdutosIndex` — listagem de produtos
- `ProdutoPage` — página completa de um produto

### 6. `mb-catalogo-contato.jsx` — Catálogo e Contato
- `CATALOGO_ITEMS` — 12 itens do catálogo
- `CatalogoPage` — página de catálogo com filtros
- `ContatoPage` — página de contato com formulário

---

## 🚧 DADOS FICTÍCIOS A SUBSTITUIR

⚠️ Todos os dados abaixo são **placeholders** — precisam ser trocados pelos reais:

- **Telefone:** (11) 9 0000‑0000
- **E-mail:** contato@masterbord.com
- **Endereço:** R. da Indústria, 1995 · São Paulo · SP
- **CEP:** 00000‑000
- **CNPJ:** 00.000.000/0001‑00
- **Timeline anos:** 1995, 2003, 2011, 2018 (verificar datas reais)
- **Estatísticas:** 2.400m², 32 máquinas, 48 colaboradores, 120k peças/mês
- **Todas as imagens** são placeholders CSS (substituir por fotos reais)

---

## 📍 STATUS ATUAL

### ✅ CONCLUÍDO
- [x] Repositório GitHub criado e publicado
- [x] Branch `nova-interface` criada
- [x] Arquivos antigos (design-canvas, home-v1/v2/v3, Redesign) removidos
- [x] 6 arquivos JSX identificados e recebidos (exceto mb-home.jsx)
- [x] Node.js v24 instalado no notebook de casa
- [x] Projeto Vite criado em `C:\Users\DAVI\Desktop\mb-vite`
- [x] Vite rodando (localhost:5173) com template React padrão

### 🔄 EM ANDAMENTO
- [ ] **FASE 1:** Migrar `mb-theme.jsx` → componentes React modernos com imports/exports

### ⏳ PENDENTE
- [ ] Davi enviar o arquivo `mb-home.jsx`
- [ ] **FASE 1:** Migrar `mb-shell.jsx` (Header + Footer)
- [ ] **FASE 2:** Migrar página Home
- [ ] **FASE 2:** Migrar página Sobre
- [ ] **FASE 2:** Migrar página Produtos (index + detalhe)
- [ ] **FASE 2:** Migrar página Catálogo
- [ ] **FASE 2:** Migrar página Contato
- [ ] **FASE 3:** Substituir dados fictícios pelos reais
- [ ] **FASE 3:** Adicionar fotos reais da fábrica/produtos
- [ ] **FASE 3:** Configurar roteamento React Router (substituir setPage + localStorage)
- [ ] **FASE 3:** Build e publicação no GitHub Pages

---

## 🏗️ ESTRUTURA DE PASTAS PLANEJADA (Vite)

```
mb-vite/
├── public/
│   └── (imagens, fonts, favicon)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── theme/
│   │   ├── colors.js          (MB - objeto de cores)
│   │   └── fonts.js           (FONT - objeto de fontes)
│   ├── components/
│   │   ├── MBTag.jsx
│   │   ├── MBTitle.jsx
│   │   ├── MBButton.jsx
│   │   ├── MBCard.jsx
│   │   ├── MBTechGrid.jsx
│   │   ├── MBLogo.jsx
│   │   ├── MBImage.jsx
│   │   ├── MBDivider.jsx
│   │   ├── MBSpecRow.jsx
│   │   ├── MBHeader.jsx
│   │   └── MBFooter.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── SobrePage.jsx
│   │   ├── ProdutosIndex.jsx
│   │   ├── ProdutoPage.jsx
│   │   ├── CatalogoPage.jsx
│   │   └── ContatoPage.jsx
│   └── data/
│       ├── produtos.js
│       └── catalogo.js
└── index.html
```

---

## 💡 DECISÕES TÉCNICAS TOMADAS

1. **React + Vite** em vez de Create React App (Vite é mais rápido e moderno)
2. **JavaScript puro**, não TypeScript (simplicidade para Davi)
3. **Estilos inline** inicialmente (como original) — migrar para CSS Modules ou styled depois se for o caso
4. **Roteamento simples** com `useState` inicialmente — migrar para React Router na FASE 3
5. **Sem dependências externas** além do Vite/React no começo — adicionar só quando precisar

---

## 🔧 COMANDOS ÚTEIS

```bash
# Rodar servidor de desenvolvimento
cd C:\Users\DAVI\Desktop\mb-vite
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Git - trocar branch
git checkout nova-interface
git checkout main

# Git - salvar e enviar
git add .
git commit -m "mensagem"
git push origin nova-interface

# Git - baixar do GitHub
git pull
```

---

## 📝 HISTÓRICO DE SESSÕES

### Sessão 1 — 20/04/2026
- Discussão inicial sobre design do site Master Bord
- Análise do site antigo publicado em GitHub Pages
- Criação de mockup HTML com seções faltantes (catálogo, contato, rodapé)
- Decisão de migrar para React/Vite com arquivos JSX do designer
- Limpeza da branch `nova-interface`
- Criação do projeto Vite no notebook de casa
- **Próxima etapa:** iniciar FASE 1 (migrar mb-theme.jsx)

### Sessão 2 — [data]
- (preencher ao final da próxima sessão)

---

## ⚠️ LEMBRETES IMPORTANTES

1. **Push antes de sair, pull ao chegar** — sempre sincronizar entre máquinas
2. **NUNCA apagar a pasta `.git`** — contém todo o histórico
3. **Trabalhar SEMPRE na branch `nova-interface`** até estar 100% pronto
4. **Só fazer merge para `main` quando tudo estiver testado**
5. **Dados fictícios precisam ser substituídos** antes de publicar

---

**Última atualização:** 20/04/2026
