// ==========================================
// 04 - ANIMAÇÕES
// Observers que revelam elementos ao aparecer
// na tela, efeito typewriter no título "Sobre",
// e replay das animações ao clicar no menu.
// ==========================================

// ==========================================
// OBSERVER - Revela elementos ao aparecerem na tela
// ==========================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revelar');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Aplica o observer no carrossel e nas bolinhas externas
document
  .querySelectorAll('.carrossel-secao.escondido, .bolinhas-externas.escondido')
  .forEach((el) => {
    observer.observe(el);
  });

// ==========================================
// TYPEWRITER - Efeito de digitação no título "Sobre"
// ==========================================

// Seleciona o título que terá o efeito de digitação
const sobreTitulo = document.querySelector('.sobre-titulo[data-texto]');

// Digita o texto letra por letra no elemento, e executa o callback ao terminar
function typewriter(el, texto, velocidade, callback) {
  el.classList.add('digitando');
  el.textContent = '';
  let i = 0;
  function digitar() {
    if (i < texto.length) {
      el.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, velocidade);
    } else {
      el.classList.remove('digitando');
      if (callback) callback();
    }
  }
  digitar();
}

// Revela o texto e os cards da seção "Sobre" com animação em cascata
function revelarConteudoSobre() {
  const texto = document.querySelector('.sobre-texto');
  const grid = document.querySelector('.sobre-grid');

  // Revela o parágrafo de texto
  if (texto) texto.classList.add('revelar');

  // Revela o grid com um pequeno atraso
  if (grid) {
    setTimeout(() => {
      grid.classList.add('revelar');
    }, 300);
  }

  // Revela cada card um após o outro com intervalo de 150ms
  document.querySelectorAll('.sobre-card').forEach((card, index) => {
    card.classList.add('escondido');
    setTimeout(() => {
      card.classList.add('revelar');
    }, 500 + index * 150);
  });
}

// Observer que dispara a animação da seção "Sobre" quando ela aparece na tela
const observerTitulo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        rodarAnimacaoSobre();
        observerTitulo.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

// Ativa o observer no título "Sobre" se ele existir
if (sobreTitulo) {
  observerTitulo.observe(sobreTitulo);
}

// ==========================================
// FUNÇÕES DE RESET E REPLAY
// ==========================================

// Força re-trigger de uma animação CSS removendo e readicionando a classe
function reanimarElemento(el, classe) {
  el.classList.remove(classe);
  void el.offsetWidth; // força o navegador a recalcular o layout (reflow)
  el.classList.add(classe);
}

// Reinicia todas as animações da seção Home (título, subtítulos e carrossel)
function rodarAnimacaoHome() {
  const master = document.querySelector('.titulo-master');
  const bord = document.querySelector('.titulo-bord');
  const subLogo = document.querySelector('.subtitulo-logo');
  const subtitulo = document.querySelector('.subtitulo');

  // Reseta e reinicia a animação de cada elemento do título
  if (master) {
    master.style.animation = 'none';
    void master.offsetWidth;
    master.style.animation = '';
  }
  if (bord) {
    bord.style.animation = 'none';
    void bord.offsetWidth;
    bord.style.animation = '';
  }
  if (subLogo) {
    subLogo.style.animation = 'none';
    void subLogo.offsetWidth;
    subLogo.style.animation = '';
  }
  if (subtitulo) {
    subtitulo.style.animation = 'none';
    void subtitulo.offsetWidth;
    subtitulo.style.animation = '';
  }

  // Reinicia a animação do carrossel e das bolinhas
  const carrossel = document.querySelector('.carrossel-secao');
  const bolinhasExt = document.querySelector('.bolinhas-externas');
  if (carrossel) reanimarElemento(carrossel, 'revelar');
  if (bolinhasExt) reanimarElemento(bolinhasExt, 'revelar');
}

// Reinicia todas as animações da seção "Sobre" (typewriter, texto, grid e cards)
function rodarAnimacaoSobre() {
  const texto = document.querySelector('.sobre-texto');
  const grid = document.querySelector('.sobre-grid');

  // Limpa o título e remove as animações anteriores
  if (sobreTitulo) sobreTitulo.textContent = '';
  if (texto) texto.classList.remove('revelar');
  if (grid) grid.classList.remove('revelar');

  // Remove animações dos cards
  document.querySelectorAll('.sobre-card').forEach((card) => {
    card.classList.remove('revelar', 'escondido');
  });

  // Inicia o efeito typewriter novamente e depois revela o conteúdo
  if (sobreTitulo) {
    const textoTitulo = sobreTitulo.getAttribute('data-texto');
    typewriter(sobreTitulo, textoTitulo, 60, revelarConteudoSobre);
  }
}

// ==========================================
// CLIQUE NO MENU - Replay das animações
// ==========================================

// Ao clicar em "Home" no menu, scrolla suave e reinicia as animações da Home
document.querySelectorAll('.cabecalho-nav a[href="#home"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    rodarAnimacaoHome();
  });
});

// Ao clicar em "Sobre" no menu, scrolla suave e reinicia as animações do Sobre
document.querySelectorAll('.cabecalho-nav a[href="#sobre"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
    setTimeout(rodarAnimacaoSobre, 400);
  });
});
