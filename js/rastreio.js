/* ================================================================
   RASTREIO.JS — Master Bord (página rastreio.html)

   Lê o código (do link ?p=MB-XXXXXX ou do campo), busca o arquivo
   pedidos/MB-XXXXXX.json e monta a linha do tempo com as mesmas classes
   do rastreio.css (--concluido / --atual / futura).

   Os JSON são gerados pelo TEAR (exportar_rastreio.py) — só datas,
   nenhum dado do cliente. Os TEXTOS das etapas ficam aqui: trocar uma
   frase não exige exportar nada de novo.

   Formato do JSON:
     { "codigo": "MB-7K2QXP", "pedido": "26/001756", "etiqueta": "SACADA",
       "entrega": "envio",
       "cancelado": false, "atualizado_em": "2026-09-29T18:00",
       "datas": { "recebido", "em_producao", "finalizado", "despachado" } }
   ================================================================ */

(function () {
  // Mesmo alfabeto do TEAR (pedidos.py): sem 0/O, 1/I/L
  const FORMATO_CODIGO = /^[ABCDEFGHJKMNPQRSTUVWXYZ2-9]{6}$/;
  const PASTA_PEDIDOS = 'pedidos/';
  // Envio do arquivo é manual (1x por dia): se esquecerem, avisa em vez de mostrar dado velho como atual
  const DIAS_PARA_AVISO = 2;
  // Pedido enviado/pronto para retirada há mais que isso sai da linha do tempo
  // e vira só a mensagem "concluído" (os JSON antigos podem ficar no servidor)
  const DIAS_PARA_CONCLUIR = 30;

  const MENSAGENS = {
    formato: 'O código tem 6 letras e números depois de "MB-". Ex.: MB-7K2QXP.',
    naoEncontrado: 'Não encontramos esse pedido. Confira o código e tente de novo.',
    cancelado: 'Este pedido foi cancelado. Em caso de dúvida, fale com o nosso atendimento.',
    conexao: 'Não conseguimos consultar agora. Verifique sua internet e tente de novo.',
    concluido: (data) =>
      `Este pedido foi concluído em ${data}. Em caso de dúvida, fale com o nosso atendimento.`,
  };

  const form = document.getElementById('formRastreio');
  const campo = document.getElementById('codigo');
  const botao = document.getElementById('botaoBuscar');
  const erro = document.getElementById('erroBusca');
  const resultado = document.getElementById('resultado');

  // ---------- Código ----------

  // Aceita "mb-7k2qxp", "MB 7K2QXP", "7K2QXP"... e devolve "MB-7K2QXP" (ou null)
  function normalizarCodigo(texto) {
    let limpo = String(texto || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (limpo.startsWith('MB') && limpo.length === 8) limpo = limpo.slice(2);
    return FORMATO_CODIGO.test(limpo) ? 'MB-' + limpo : null;
  }

  // ---------- Datas ----------

  function dataCurta(iso) {
    const [a, m, d] = String(iso || '').slice(0, 10).split('-');
    return d ? `${d}/${m}` : '';
  }

  function diasDesde(iso) {
    return (Date.now() - new Date(iso).getTime()) / 86400000;
  }

  function atualizadoEm(iso) {
    const [data, hora] = String(iso || '').split('T');
    if (!data) return '';
    const [, m, d] = data.split('-');
    return `Atualizado em ${d}/${m}` + (hora ? ` às ${hora.slice(0, 5).replace(':', 'h')}` : '');
  }

  // ---------- Etapas ----------

  function montarEtapas(p) {
    const d = p.datas || {};
    const retirada = p.entrega === 'retirada';
    return [
      { titulo: 'Pedido recebido', icone: 'pedido-recebido', data: d.recebido, feito: true },
      { titulo: 'Aguardando produção', icone: 'aguardando', data: d.recebido, feito: !!d.em_producao,
        obs: 'Seu pedido está na fila da fábrica.' },
      { titulo: 'Em produção', icone: 'producao', data: d.em_producao, feito: !!d.finalizado,
        obs: 'Sua etiqueta está sendo produzida.' },
      { titulo: 'Produção finalizada', icone: 'finalizado', data: d.finalizado, feito: !!d.despachado,
        obs: 'Pronto! Seu produto está finalizado e em fase final de preparo.' },
      // Retirada: a fábrica não sabe quando o cliente vem buscar, então a
      // última etapa é "pronto" e a frase orienta onde retirar
      { titulo: retirada ? 'Pronto para retirada' : 'Enviado', icone: 'enviado', data: d.despachado, feito: !!d.despachado,
        obs: retirada
          ? 'Seu produto está pronto! Retire na fábrica: R. São Sebastião, 269 — Petrópolis.'
          : 'Seu pedido está a caminho.' },
    ];
  }

  function htmlEtapa(e, estado) {
    const classe = 'resultado__passo' + (estado ? ` resultado__passo--${estado}` : '');
    // Etapa futura não mostra data, mesmo que exista
    const data = estado && e.data
      ? `<time datetime="${e.data.slice(0, 10)}">${dataCurta(e.data)}</time>`
      : '<span class="sem-data">—</span>';
    const obs = e.obs ? `<p class="resultado__observacao">${e.obs}</p>` : '';
    return `
      <li class="${classe}">
        <div class="resultado__circulo"><img src="img/${e.icone}.svg" alt="" /></div>
        <h3>${e.titulo}</h3>
        ${data}
        ${obs}
      </li>`;
  }

  function mostrarPedido(p) {
    const etapas = montarEtapas(p);
    // Atual = primeira etapa ainda não feita. Tudo feito (enviado/retirado) → nenhuma atual.
    const atual = etapas.findIndex((e) => !e.feito);

    const lista = document.getElementById('resultadoPassos');
    lista.innerHTML = etapas
      .map((e, i) => htmlEtapa(e, i === atual ? 'atual' : e.feito ? 'concluido' : ''))
      .join('');
    // Quantos trechos da linha pintar. O CSS calcula o mesmo com :has(),
    // mas o Firefox 115 (Windows 7) não entende :has() — aqui vale para todos.
    lista.style.setProperty('--progresso', atual === -1 ? etapas.length - 1 : atual);
    // Pedido terminado (enviado/retirado): não há passo atual, então o CSS
    // usa esta classe para mostrar a observação da última etapa
    lista.classList.toggle('resultado__passos--terminado', atual === -1);
    // textContent (e não innerHTML): o nome da etiqueta é digitado no TEAR,
    // um "<" ou "&" nele não pode virar HTML
    document.getElementById('resultadoPedido').textContent =
      [p.pedido ? `Pedido ${p.pedido}` : 'Pedido', p.etiqueta].filter(Boolean).join(' · ');
    document.getElementById('resultadoCodigo').textContent = p.codigo;
    const atualizado = document.getElementById('resultadoAtualizado');
    // Pedido terminado não muda mais: o arquivo parado não é "desatualizado"
    const velho = atual !== -1 && diasDesde(p.atualizado_em) > DIAS_PARA_AVISO;
    atualizado.textContent = atualizadoEm(p.atualizado_em) +
      (velho ? ' · as informações podem estar desatualizadas, fale com o atendimento' : '');
    atualizado.classList.toggle('atualizado--velho', velho);

    resultado.hidden = false;
    resultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---------- Erro ----------

  function mostrarErro(chave) {
    erro.textContent = MENSAGENS[chave];
    erro.classList.remove('rastreio__erro--info');
    erro.hidden = false;
    campo.setAttribute('aria-invalid', 'true');
    resultado.hidden = true;
  }

  // Pedido concluído há mais de 30 dias: mesma área de mensagem do erro,
  // mas sem marcar o campo como inválido (o código está certo)
  function mostrarConcluido(dataIso) {
    erro.textContent = MENSAGENS.concluido(dataCurta(dataIso));
    // Não é erro: a classe deixa a mensagem azul em vez de vermelha
    erro.classList.add('rastreio__erro--info');
    erro.hidden = false;
    resultado.hidden = true;
  }

  function limparErro() {
    erro.hidden = true;
    campo.removeAttribute('aria-invalid');
  }

  // ---------- Busca ----------

  async function buscar(texto) {
    limparErro();
    const codigo = normalizarCodigo(texto);
    if (!codigo) return mostrarErro('formato');
    campo.value = codigo;

    botao.disabled = true;
    try {
      // no-store: o arquivo muda todo dia, não pode vir velho do cache
      const r = await fetch(PASTA_PEDIDOS + codigo + '.json', { cache: 'no-store' });
      if (r.status === 404) return mostrarErro('naoEncontrado');
      if (!r.ok) return mostrarErro('conexao');
      const pedido = await r.json();
      if (pedido.cancelado) return mostrarErro('cancelado');
      const despachado = pedido.datas && pedido.datas.despachado;
      if (despachado && diasDesde(despachado) > DIAS_PARA_CONCLUIR) {
        mostrarConcluido(despachado);
      } else {
        mostrarPedido(pedido);
      }

      // Deixa o endereço com ?p= (dá pra salvar/compartilhar o link)
      const url = new URL(location.href);
      url.searchParams.set('p', codigo);
      history.replaceState(null, '', url);
    } catch (e) {
      mostrarErro('conexao');
    } finally {
      botao.disabled = false;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buscar(campo.value);
  });
  campo.addEventListener('input', limparErro);

  // Link do WhatsApp: rastreio.html?p=MB-7K2QXP já abre com o pedido
  const doLink = new URLSearchParams(location.search).get('p');
  if (doLink) {
    campo.value = doLink;
    buscar(doLink);
  }
})();
