# CLAUDE.md

Este arquivo orienta o Claude Code (claude.ai/code) ao trabalhar com o código deste repositório.

## Visão Geral do Projeto

Site estático da **Master Bord** — empresa brasileira especializada em etiquetas tecidas, bordados e corte a laser desde 1995. O site é uma página única (single-page), feito com HTML/CSS/JS puro, sem frameworks, build tools ou gerenciador de pacotes.

## Desenvolvimento

Abra o `index.html` diretamente no navegador — não precisa de servidor nem build. O site é servido como arquivos estáticos.

## Arquitetura

- `index.html` — Layout de página única com seções: Home (hero), Carrossel, Sobre. A navegação usa links âncora com scroll suave.
- `css/style.css` — Todos os estilos em um único arquivo. Usa glassmorfismo (backdrop-filter + blur), animações CSS com keyframes (tracking-in, ken-burns, cursor de digitação), e breakpoints responsivos em 900px e 600px. Dimensionamento usa `clamp()` em todo o CSS.
- `script/main.js` — Todo o JS em um único arquivo. Controla dois carrosséis independentes (principal + seção "Sobre"), submenu dropdown de produtos, animações de revelação via IntersectionObserver (`.escondido` → `.revelar`), efeito de digitação (typewriter) no título "Sobre", e replay de animações ao clicar no menu.
- `font/` — Fonte customizada Bauhaus (BAUHAUSM.TTF).
- `imagem/` — Todas as imagens (fundos, fotos de produtos, logos de certificação).
- `Originals/` — Versão anterior do site para referência.

## Convenções Importantes

- **Idioma do código**: Todas as classes HTML, variáveis JS, IDs e comentários são em português. Manter essa convenção — usar português para nomes de classes, IDs, variáveis e comentários.
- **Cores da marca**: Azul `#3276b9` (Master) e vermelho escuro `#8c2d2e` (Bord) — usadas consistentemente em todo o site.
- **Sistema de animação**: Elementos começam com a classe `escondido` (opacity: 0), depois `revelar` é adicionada pelo IntersectionObserver para disparar uma animação de fade-in com blur. Cards usam animation-delay escalonado via `:nth-child`.
- **Padrão de carrossel**: Os dois carrosséis (principal e "Sobre") seguem o mesmo padrão — avanço automático com `setInterval`, navegação manual reinicia o timer.
- **Sem frameworks**: HTML/CSS/JS puro (vanilla). Google Fonts (Montserrat) carregada via CDN.

## Seções Ainda Não Implementadas

A navegação referencia seções que ainda não existem no HTML: Produtos (Etiqueta, Bordado, Laser), Contato, Catálogo, Atendimento.
