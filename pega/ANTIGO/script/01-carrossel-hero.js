// ==========================================
// 01 - CARROSSEL HERO (Principal)
// Controla o carrossel de 3 slides da home:
// Etiquetas, Bordados e Laser. Inclui troca
// automática a cada 8 segundos.
// ==========================================

// Índice do slide atual
let slideAtual = 0;

// Seleciona todos os slides e bolinhas do carrossel principal
const slides = document.querySelectorAll('.slide');
const bolinhas = document.querySelectorAll('.bolinha');

// Inicia o timer para trocar de slide automaticamente a cada 8 segundos
let timer = setInterval(() => mudarSlide(1), 8000);

// Exibe o slide no índice informado e atualiza a bolinha ativa
function mostrarSlide(i) {
  slides.forEach((s) => s.classList.remove('ativo'));
  bolinhas.forEach((b) => b.classList.remove('ativa'));
  slideAtual = (i + slides.length) % slides.length;
  slides[slideAtual].classList.add('ativo');
  bolinhas[slideAtual].classList.add('ativa');
}

// Avança ou retrocede o slide pela direção (+1 ou -1) e reinicia o timer
function mudarSlide(dir) {
  clearInterval(timer);
  mostrarSlide(slideAtual + dir);
  timer = setInterval(() => mudarSlide(1), 8000);
}

// Vai direto para um slide específico pelo índice e reinicia o timer
function irSlide(i) {
  clearInterval(timer);
  mostrarSlide(i);
  timer = setInterval(() => mudarSlide(1), 8000);
}
