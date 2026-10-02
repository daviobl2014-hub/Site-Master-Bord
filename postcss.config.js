/* ================================================================
   POSTCSS — converte css-fonte/ (aninhado) em css/ (compatível)

   Navegadores-alvo: "browserslist" no package.json
   (Windows 7: Chrome/Edge 109 e Firefox 115 não entendem CSS aninhado).

   npm run watch:css  → converte a cada arquivo salvo
   npm run build:css  → converte tudo uma vez (rodar antes de subir o site)

   EDITE SÓ O css-fonte/. A pasta css/ é refeita a cada conversão.
   ================================================================ */

module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        // :has() precisa de um JS extra para funcionar em navegador antigo.
        // No rastreio, quem faz esse papel é o js/rastreio.js (--progresso).
        'has-pseudo-class': false,
      },
    },
  },
};
