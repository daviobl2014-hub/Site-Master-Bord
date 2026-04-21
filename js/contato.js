/* ================================================================
   CONTATO.JS — Master Bord
   JavaScript da PÁGINA CONTATO (contato.html).
   Carregado depois do global.js.

   O que faz:
   1. Valida o formulário (nome, e-mail, telefone, mensagem)
   2. Mostra erros inline embaixo de cada campo
   3. Ao enviar válido: monta mensagem e abre WhatsApp com tudo preenchido
      (jeito mais simples de receber leads sem backend nem serviço externo)
   ================================================================ */

(function () {
  /* ↓ TROCAR pelo número de WhatsApp da Master Bord (formato internacional, só dígitos)
     Ex: 5524223176660 → 55 (Brasil) + 24 (DDD) + 22317666 (número)            */
  const WHATSAPP_NUMERO = '5524223176660';

  const form = document.getElementById('contatoForm');
  if (!form) return;

  const sucesso = document.getElementById('formSucesso');

  /* ----------------------------------------------------------------
     Validação de um campo
     Retorna string com mensagem de erro, ou '' se estiver válido.
     ---------------------------------------------------------------- */
  function validarCampo(input) {
    const valor = input.value.trim();

    if (input.required && !valor) {
      return 'Campo obrigatório';
    }

    if (input.type === 'email' && valor) {
      // Regex simples: alguma_coisa@alguma_coisa.alguma_coisa
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
      if (!emailOk) return 'E-mail inválido';
    }

    if (input.type === 'tel' && valor) {
      // Aceita números, espaços, parênteses, traços e +. Mínimo 8 dígitos.
      const apenasDigitos = valor.replace(/\D/g, '');
      if (apenasDigitos.length < 8) return 'Telefone muito curto';
    }

    return '';
  }

  /* ----------------------------------------------------------------
     Mostra/esconde erro de um campo
     ---------------------------------------------------------------- */
  function aplicarErro(input, mensagem) {
    const erroEl = form.querySelector(`[data-erro-de="${input.name}"]`);
    if (mensagem) {
      input.classList.add('invalid');
      if (erroEl) erroEl.textContent = mensagem;
    } else {
      input.classList.remove('invalid');
      if (erroEl) erroEl.textContent = '';
    }
  }

  /* ----------------------------------------------------------------
     Validação ao sair do campo (UX: feedback enquanto preenche)
     ---------------------------------------------------------------- */
  form.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('blur', () => {
      aplicarErro(input, validarCampo(input));
    });
  });

  /* ----------------------------------------------------------------
     Submissão: valida tudo, monta mensagem e abre WhatsApp
     ---------------------------------------------------------------- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let temErro = false;
    form.querySelectorAll('input, textarea').forEach((input) => {
      const erro = validarCampo(input);
      aplicarErro(input, erro);
      if (erro) temErro = true;
    });

    if (temErro) return;

    // Coleta os dados
    const dados = new FormData(form);
    const nome = dados.get('nome');
    const email = dados.get('email');
    const empresa = dados.get('empresa') || '—';
    const telefone = dados.get('telefone');
    const produtos = dados.getAll('produto');
    const mensagem = dados.get('mensagem');

    // Monta texto do WhatsApp
    const texto = [
      `*Novo orçamento — site Master Bord*`,
      ``,
      `*Nome:* ${nome}`,
      `*E-mail:* ${email}`,
      `*Empresa:* ${empresa}`,
      `*Telefone:* ${telefone}`,
      `*Produto(s):* ${produtos.length ? produtos.join(', ') : '—'}`,
      ``,
      `*Mensagem:*`,
      mensagem,
    ].join('\n');

    // Abre WhatsApp em nova aba
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

    if (sucesso) {
      sucesso.hidden = false;
      setTimeout(() => {
        sucesso.hidden = true;
      }, 4000);
    }

    window.open(url, '_blank');
  });
})();
