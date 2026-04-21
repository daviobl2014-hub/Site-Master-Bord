# 🎠 GUIA — Adicionar Carrossel no Hero da Home

> **O que é este arquivo:** passo a passo pra implementar o carrossel automático no hero do `index.html`.
> **Tempo estimado:** 10-15 minutos.
> **Pré-requisito:** ter testado a home atual e estar com Live Server rodando.

---

## 📋 O QUE VAMOS CONSTRUIR

Um carrossel na coluna direita do hero da home, com:
- ✅ **3 imagens** (ia1.png, ia2.png, laser.png)
- ✅ **Troca automática** a cada 5 segundos
- ✅ **Transição fade** (imagem desaparece suavemente, outra aparece)
- ✅ **Bolinhas clicáveis** embaixo pra ir direto num slide
- ✅ **Legenda** embaixo de cada imagem
- ✅ **Pausa ao passar o mouse** em cima
- ✅ **Acessível** (aria-labels pra leitores de tela)

---

## 📁 ARQUIVOS QUE VÃO MUDAR

| Arquivo | O que fazer |
|---|---|
| `index.html` | Editar (trocar bloco do carrossel + adicionar tag `<script>`) |
| `css/index.css` | Editar (apagar CSS antigo do carrossel, colar o novo) |
| `js/index.js` | **Criar arquivo novo** (não existe ainda) |

---

## 🚀 PASSO 1 — VERIFICAR SE AS IMAGENS ESTÃO NA PASTA

Antes de começar, confirme que estas 3 imagens existem em `img/`:

```
img/
├── ia1.png
├── ia2.png
└── laser.png
```

**Se alguma não existir:** coloque qualquer imagem de teste com esse nome, ou o carrossel vai mostrar um X quebrado. Você troca a imagem depois.

---

## 🚀 PASSO 2 — EDITAR O `index.html`

### 2.1 — Trocar o bloco do carrossel

Abra o `index.html` e procure este trecho (dentro de `<div class="hero-spec-card">`):

```html
<div class="hero-spec-header">
  <div class="carousel">
    <img src="/img/ia2.png" alt="" />
    <!-- <img src="/img/ia1.png" alt="" />
    <img src="/img/laser.png" alt="" />
  </div> -->
</div>
```

**Substitua TODO esse bloco por:**

```html
<div class="carousel" id="mbCarousel">
  <!-- Slide 1 -->
  <div class="carousel-slide active">
    <img src="/img/ia1.png" alt="Etiqueta tecida em cetim" />
    <div class="carousel-caption">Etiqueta tecida em cetim</div>
  </div>

  <!-- Slide 2 -->
  <div class="carousel-slide">
    <img src="/img/ia2.png" alt="Tear Barudan em produção" />
    <div class="carousel-caption">Tear Barudan em produção</div>
  </div>

  <!-- Slide 3 -->
  <div class="carousel-slide">
    <img src="/img/laser.png" alt="Corte laser de precisão" />
    <div class="carousel-caption">Corte laser de precisão</div>
  </div>

  <!-- Bolinhas de controle -->
  <div class="carousel-dots">
    <button class="carousel-dot active" data-slide="0" aria-label="Ver slide 1"></button>
    <button class="carousel-dot" data-slide="1" aria-label="Ver slide 2"></button>
    <button class="carousel-dot" data-slide="2" aria-label="Ver slide 3"></button>
  </div>
</div>
```

> ⚠️ **ATENÇÃO:** note que eu **removi** o `<div class="hero-spec-header">` externo, porque ele virou redundante. O novo `.carousel` fica direto dentro do `.hero-spec-card`.

### 2.2 — Personalizar as legendas (opcional)

Se quiser mudar os textos, edite a linha `<div class="carousel-caption">...</div>` de cada slide.

**Dicas de legenda curta e profissional:**
- "Etiqueta tecida em cetim"
- "Tear Barudan de alta definição"
- "Corte a laser com precisão 0,1mm"
- "Bordado industrial Mucad"

Máximo recomendado: **5 palavras** por legenda.

### 2.3 — Adicionar a tag do JavaScript

No final do `index.html`, **antes da linha `</body>`**, procure:

```html
<script src="js/global.js"></script>
```

**Logo abaixo**, adicione:

```html
<script src="js/index.js"></script>
```

Deve ficar assim no final:

```html
<script src="js/global.js"></script>
<script src="js/index.js"></script>
</body>
</html>
```

---

## 🚀 PASSO 3 — EDITAR O `css/index.css`

### 3.1 — Apagar o CSS antigo do carrossel

Procure estas duas regras no arquivo atual:

```css
/* container do carrossel */
.carousel {
  position: absolute;
  inset: 0;
  margin: 10px;
}

/* imagens */
.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel img:first-child {
  opacity: 1;
}
```

**APAGUE tudo isso.**

### 3.2 — Colar o CSS novo

No lugar onde você apagou, cole este bloco completo:

```css
/* ────────────────────────────────────────────────────────────────
   CARROSSEL do hero — automático com fade + controles manuais
   ──────────────────────────────────────────────────────────────── */

/* Container do carrossel */
.carousel {
  position: absolute;
  inset: 10px;
  overflow: hidden;
}

/* Cada slide (imagem + legenda) empilhados no mesmo lugar */
.carousel-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  pointer-events: none;
}

/* Slide ativo: aparece */
.carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
}

/* Imagem ocupa todo o slide */
.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Legenda embaixo, sobre a imagem */
.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 20px 32px;
  background: linear-gradient(
    to top,
    rgba(15, 17, 22, 0.85),
    transparent
  );
  color: var(--mb-paper);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* Bolinhas de controle (embaixo, centralizadas) */
.carousel-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(242, 236, 224, 0.4);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.3s, transform 0.3s;
}

.carousel-dot:hover {
  background: rgba(242, 236, 224, 0.7);
  transform: scale(1.2);
}

.carousel-dot.active {
  background: var(--mb-ouro);
  transform: scale(1.3);
}
```

---

## 🚀 PASSO 4 — CRIAR O ARQUIVO `js/index.js`

Este arquivo **não existe ainda**. Você precisa criar.

### 4.1 — Criar o arquivo

1. No VS Code, abra a pasta `js/`
2. Clica com botão direito → "New File"
3. Nome: `index.js`

### 4.2 — Colar o conteúdo

Cole este código completo no arquivo novo:

```javascript
/* ================================================================
   INDEX.JS — Master Bord (página home)
   Scripts específicos da página inicial (index.html).

   Conteúdo:
   1. Carrossel do hero (automático com fade + controles manuais)
   ================================================================ */


/* ================================================================
   1. CARROSSEL DO HERO
   - Troca automática a cada 5 segundos
   - Clique nas bolinhas pra ir direto num slide específico
   - Pausa quando o mouse fica em cima
   - Retoma quando o mouse sai
   ================================================================ */

(function() {
  // Pega os elementos do HTML
  const carousel = document.getElementById('mbCarousel');
  if (!carousel) return;  // Se não tem carrossel, sai (evita erro em outras páginas)

  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.carousel-dot');

  // Configurações
  const INTERVALO = 5000;  // 5 segundos — muda aqui se quiser mais rápido/lento
  let slideAtual = 0;
  let timerAutomatico = null;

  /**
   * Troca pro slide de índice N.
   * Remove .active de todos e adiciona só no slide certo.
   */
  function irParaSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === n);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n);
    });
    slideAtual = n;
  }

  /**
   * Avança pro próximo slide (ciclicamente — volta pro 0 depois do último).
   */
  function proximoSlide() {
    const proximo = (slideAtual + 1) % slides.length;
    irParaSlide(proximo);
  }

  /**
   * Liga a troca automática.
   */
  function iniciarAutomatico() {
    pararAutomatico();  // Garante que não tem outro timer rodando
    timerAutomatico = setInterval(proximoSlide, INTERVALO);
  }

  /**
   * Desliga a troca automática.
   */
  function pararAutomatico() {
    if (timerAutomatico) {
      clearInterval(timerAutomatico);
      timerAutomatico = null;
    }
  }

  // Clique nas bolinhas → vai pro slide clicado e reinicia o timer
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const n = parseInt(dot.dataset.slide, 10);
      irParaSlide(n);
      iniciarAutomatico();  // Reinicia o timer pra dar 5s completos a partir daqui
    });
  });

  // Pausa quando o mouse fica em cima do carrossel
  carousel.addEventListener('mouseenter', pararAutomatico);
  carousel.addEventListener('mouseleave', iniciarAutomatico);

  // Começa tudo
  iniciarAutomatico();
})();
```

---

## ✅ PASSO 5 — TESTAR

1. **Salve todos os arquivos** (Ctrl+S em cada um)
2. **Recarregue o navegador com cache limpo:** Ctrl+Shift+R
3. Vá pra home (`http://127.0.0.1:5500/index.html`)
4. Observe o hero — o carrossel deve estar na coluna direita

### Checklist visual

Em ordem, verifica:

- [ ] A primeira imagem (ia1.png) aparece com a legenda "Etiqueta tecida em cetim"
- [ ] Depois de 5 segundos, troca suavemente pra ia2.png (fade)
- [ ] Depois de mais 5s, troca pra laser.png
- [ ] Depois do último, volta pra primeira (ciclo infinito)
- [ ] Embaixo tem 3 bolinhas — a bolinha da imagem atual está **dourada**, as outras brancas/transparentes
- [ ] **Passa o mouse em cima da imagem** → o carrossel **pausa**
- [ ] Tira o mouse → volta a trocar sozinho
- [ ] **Clica numa bolinha** → pula direto pra aquela imagem
- [ ] Depois de clicar, a contagem de 5s **reinicia** do zero

Se todos os itens ficaram ✅, você terminou.

---

## 🐛 PROBLEMAS COMUNS E SOLUÇÕES

### Imagem não aparece (X quebrado)

**Causa provável:** caminho `/img/ia1.png` não funciona sem Live Server.

**Solução:** troca `/img/` por `img/` (sem a barra do começo) nas 3 imagens no HTML:

```html
<!-- ANTES -->
<img src="/img/ia1.png" />

<!-- DEPOIS (se não usa Live Server) -->
<img src="img/ia1.png" />
```

### Carrossel aparece mas não troca sozinho

**Causa provável:** `js/index.js` não está carregando.

**Como diagnosticar:**
1. Abre DevTools (F12)
2. Aba **Console**
3. Se tem erro em vermelho tipo "Failed to load resource: js/index.js" → **caminho errado**
4. Se não tem erro mas não troca → **verifica se colou o `<script src="js/index.js"></script>`** no HTML

### Bolinhas não clicam

**Causa provável:** mesmo problema acima — JS não carregou.

Verifica no DevTools → aba **Network** → filtra por "js" → vê se `index.js` aparece com status 200 (OK) ou 404 (não encontrado).

### Legenda aparece ilegível ou cortada

**Causa provável:** imagem muito clara embaixo, gradiente não cobre o suficiente.

**Solução:** no CSS `.carousel-caption`, aumenta o preto do gradiente:

```css
background: linear-gradient(
  to top,
  rgba(15, 17, 22, 0.95),  /* era 0.85, agora 0.95 */
  transparent
);
```

### Transição muito rápida ou muito lenta

**No CSS** (`.carousel-slide`), muda o `0.8s`:

```css
transition: opacity 0.8s ease-in-out;
/*                 ^^^
   0.5s = bem rápido | 0.8s = padrão | 1.2s = elegante | 2s = exagerado */
```

### Quero mudar o tempo de troca (5s → outro)

**No JS** (`js/index.js`), muda a linha:

```javascript
const INTERVALO = 5000;  // 5000ms = 5s. Use 3000 pra 3s, 7000 pra 7s.
```

---

## 🎯 PERSONALIZAÇÕES FÁCEIS DEPOIS

Depois que tudo estiver funcionando, você pode ajustar:

### Adicionar mais imagens
1. **HTML:** copia um bloco `.carousel-slide` e muda `src` e `alt`
2. **HTML:** adiciona mais uma `<button class="carousel-dot" data-slide="3" ...>`
3. Pronto — o JS detecta automaticamente quantos slides existem

### Trocar ordem das imagens
Só reordena os blocos `.carousel-slide` no HTML. A primeira com `active` é a que aparece ao carregar a página.

### Tirar as bolinhas (só automático)
Apaga o bloco `<div class="carousel-dots">` no HTML. O JS continua funcionando normal.

### Tirar a pausa no hover
No `js/index.js`, comenta estas 2 linhas:

```javascript
// carousel.addEventListener('mouseenter', pararAutomatico);
// carousel.addEventListener('mouseleave', iniciarAutomatico);
```

---

## 📚 O QUE VOCÊ ESTÁ APRENDENDO

Esse componente ensina **5 padrões essenciais** de JS vanilla:

1. **IIFE** — `(function() { ... })()` encapsula código sem poluir o escopo global
2. **setInterval / clearInterval** — timers repetitivos
3. **classList.toggle(classe, condição)** — adiciona/remove classe baseado em boolean
4. **dataset** — ler `data-slide="2"` do HTML no JS
5. **Guard clause** — `if (!carousel) return` evita erro quando o elemento não existe

Você vai usar esses 5 padrões em **qualquer componente interativo** que fizer daqui pra frente (menu hambúrguer, modal, filtro, accordion, etc).

---

## ✅ QUANDO TERMINAR

1. Testa o checklist visual acima
2. Se tudo OK, faz commit no Git:

```bash
git add index.html css/index.css js/index.js
git commit -m "feat(home): carrossel automático no hero com fade + controles"
git push origin nova-interface
```

3. Avisa o Claude na próxima sessão:
   - "Carrossel OK, bora pra paleta de cores" (missão 3)
   - Ou "Carrossel OK, bora aplicar fluid design nas outras páginas"

---

**Criado em:** Sessão 4 (21/04/2026)
**Status:** pronto pra executar
