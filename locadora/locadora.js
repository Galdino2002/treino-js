const botao = document.getElementById("calcular");
botao.addEventListener("click", calcularServico);

function calcularServico() {
  const carroSelecionado = document.querySelector('input[name="veiculo"]:checked');
  if (!carroSelecionado) {
    alert("Por favor, selecione um tipo de veículo");
    return;
  }

  const valorAluguel = Number(carroSelecionado.value);

  // Detalhes da Locação
  const qtDias = Number(document.getElementById("dias").value) || 0;
  const qtQuilometros = Number(document.getElementById("km").value) || 0;
  const qtQuilometrosValor = qtQuilometros * 0.75;

  // Serviços adicionais
  const adicionais = document.querySelectorAll('input[name="extra"]:checked');
  let servicosAdicionais = 0;
  let listagemServicos = [];

  adicionais.forEach((item) => {
    const valorUnitario = Number(item.value);
    const label = document.querySelector(`label[for="${item.id}"]`);
    const nome = label ? label.textContent.trim() : "Serviço extra";

    servicosAdicionais += valorUnitario;
    listagemServicos.push(`${nome}: R$ ${valorUnitario.toFixed(2)}`);
  });

  // Cálculo parcial
  const totalDiarias = valorAluguel * qtDias;
  let totalGeral = totalDiarias + qtQuilometrosValor + servicosAdicionais;

  // Forma de pagamento
  const metodoPagamento = document.getElementById("pagamento").value;
  let descontoTexto = "0%";
  let taxaTexto = "0%";

  if (metodoPagamento === "pix") {
    totalGeral *= 0.90; // 10% de desconto
    descontoTexto = "10%";
  } else if (metodoPagamento === "cartao") {
    totalGeral *= 1.05; // 5% de taxa
    taxaTexto = "5%";
  }

  // --- EXIBIÇÃO DO RESULTADO ---
  const divResultado = document.getElementById("resultado");

  if (divResultado) {
    divResultado.innerHTML = `
      <h3>Resumo da Locação</h3>
      <p><strong>Total das Diárias (${qtDias} dia(s)):</strong> R$ ${totalDiarias.toFixed(2)}</p>
      <p><strong>Custo de Quilometragem (${qtQuilometros} km):</strong> R$ ${qtQuilometrosValor.toFixed(2)}</p>
      <p><strong>Serviços Adicionais:</strong> ${listagemServicos.length > 0 ? listagemServicos.join(", ") : "Nenhum"}</p>
      <p><strong>Forma de Pagamento:</strong> ${metodoPagamento.toUpperCase()}</p>
      <p><strong>Desconto Aplicado:</strong> ${descontoTexto}</p>
      <p><strong>Taxa Aplicada:</strong> ${taxaTexto}</p>
      <hr>
      <h4><strong>Valor Total Final: R$ ${totalGeral.toFixed(2)}</strong></h4>
    `;
  }
}