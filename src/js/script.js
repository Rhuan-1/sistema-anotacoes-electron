var notas = [];

function salvarNota() {
  // 1. Capturar o valor digitado no textarea
  const campoNota = document.getElementById("nota");
  const textoNota = campoNota.value.trim();

  // 2. Verificar se o valor não está vazio
  if (textoNota === "") {
    alert("Por favor, digite uma nota antes de salvar.");
    return;
  }

  // 3. Adicionar ao array notas[]
  notas.push(textoNota);

  // 4. Limpar o campo
  campoNota.value = "";

  // Atualizar a lista exibida
  carregarNotas();
}

/** NÃO MEXA NA FUNÇÃO CARREGAR NOTAS */
function carregarNotas() {
  const lista = document.getElementById('listaNotas');
  lista.innerHTML = "";

  notas.forEach((nota) => {
    const li = document.createElement('li');
    li.textContent = nota;
    lista.appendChild(li);
  });
}
