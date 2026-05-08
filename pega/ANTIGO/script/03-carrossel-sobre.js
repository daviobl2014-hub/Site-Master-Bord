// ==========================================
// 03 - CARROSSEL SOBRE
// Controla o carrossel de imagens da fábrica
// na seção "Sobre" (operador-etiqueta,
// operador-bordado, operador-laser). Troca
// automática a cada 3.5 segundos.
// ==========================================

// Índice do slide atual
let sobreAtual = 0;

// Seleciona todos os slides e bolinhas do carrossel "Sobre"
const sobreSlides = document.querySelectorAll('.sobre-slide');
const sobreBolinhas = document.querySelectorAll('.sobre-bolinha');

// Inicia o timer para trocar de slide automaticamente a cada 3.5 segundos
let sobreTimer = setInterval(() => mudarSlideSobre(1), 3500);

// Exibe o slide da seção "Sobre" no índice informado e atualiza a bolinha ativa
function mostrarSlideSobre(i) {
  sobreSlides.forEach((s) => s.classList.remove('sobre-slide-ativo'));
  sobreBolinhas.forEach((b) => b.classList.remove('sobre-bolinha-ativa'));
  sobreAtual = (i + sobreSlides.length) % sobreSlides.length;
  sobreSlides[sobreAtual].classList.add('sobre-slide-ativo');
  sobreBolinhas[sobreAtual].classList.add('sobre-bolinha-ativa');
}

// Avança ou retrocede o slide "Sobre" e reinicia o timer
function mudarSlideSobre(dir) {
  clearInterval(sobreTimer);
  mostrarSlideSobre(sobreAtual + dir);
  sobreTimer = setInterval(() => mudarSlideSobre(1), 3500);
}

// Vai direto para um slide específico do "Sobre" e reinicia o timer
function irSlideSobre(i) {
  clearInterval(sobreTimer);
  mostrarSlideSobre(i);
  sobreTimer = setInterval(() => mudarSlideSobre(1), 3500);
}
