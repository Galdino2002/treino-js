const botao = document.getElementById("calcular");
botao.addEventListener("click", calcularHospedagem);

function calcularHospedagem() {
  // 1. Quarto
  const quartoSelecionado = document.querySelector('input[name="quarto"]:checked');
  if (!quartoSelecionado) {
    alert("Por favor, selecione um tipo de quarto.");
    return;
  }
  const valorQuarto = Number(quartoSelecionado.value);

  // 2. Dados numéricos da estadia
  const diarias = Number(document.getElementById("diarias").value) || 0;
  const adultos = Number(document.getElementById("adultos").value) || 0;
  const criancas = Number(document.getElementById("criancas").value) || 0;
  const totalPessoas = adultos + criancas;

  // 3. Adicionais
  const adicionais = document.querySelectorAll('input[name="adicionais"]:checked');
  let totalAdicionais = 0;
  let listaServicos = [];

  adicionais.forEach((item) => {
    const valorUnitario = Number(item.value);
    const tipo = item.getAttribute("data-tipo");
    const nome = item.getAttribute("data-nome");
    
    let subtotal = 0;
    if (tipo === "por-pessoa-dia") {
      subtotal = valorUnitario * totalPessoas * diarias;
    } else if (tipo === "por-dia") {
      subtotal = valorUnitario * diarias;
    } else {
      subtotal = valorUnitario; // taxa fixa
    }

    totalAdicionais += subtotal;
    listaServicos.push(nome);
  });

  // 4. Cálculos base
  const totalQuarto = valorQuarto * diarias;
  let totalGeral = totalQuarto + totalAdicionais;

  // 5. Pagamento, Descontos e Taxas
  const metodoPagamento = document.getElementById("pagamento").value;
  let descontoTexto = "0%";
  let taxaTexto = "0%";

  if (diarias > 10 && metodoPagamento === "pix") {
    totalGeral *= 0.75; // 25% OFF
    descontoTexto = "25%";
  } else if (diarias > 10) {
    totalGeral *= 0.90; // 10% OFF
    descontoTexto = "10%";
  } else if (metodoPagamento === "pix") {
    totalGeral *= 0.95; // 5% OFF
    descontoTexto = "5%";
  }

  if (metodoPagamento === "credito") {
    totalGeral *= 1.04; // 4% Taxa
    taxaTexto = "4%";
  }

  // 6. Troco
  const valorPago = Number(document.getElementById("valorPago").value) || 0;
  const troco = valorPago - totalGeral;

  // 7. Exibição no Recibo
  document.getElementById("rNome").textContent = document.getElementById("nome").value;
  document.getElementById("rCpf").textContent = document.getElementById("cpf").value;
  document.getElementById("rCidade").textContent = document.getElementById("cidade").value;
  document.getElementById("rQuarto").textContent = quartoSelecionado.getAttribute("data-nome");
  document.getElementById("rDiarias").textContent = `${diarias} dias`;
  document.getElementById("rAdultos").textContent = adultos;
  document.getElementById("rCriancas").textContent = criancas;
  document.getElementById("rValorDiarias").textContent = `R$ ${totalQuarto.toFixed(2)}`;
  document.getElementById("rServicos").textContent = listaServicos.length > 0 ? `${listaServicos.join(", ")} (R$ ${totalAdicionais.toFixed(2)})` : "Nenhum";
  document.getElementById("rDesconto").textContent = descontoTexto;
  document.getElementById("rTaxa").textContent = taxaTexto;
  document.getElementById("rTotal").textContent = `R$ ${totalGeral.toFixed(2)}`;
  document.getElementById("rPagamento").textContent = metodoPagamento.toUpperCase() || "Não informado";
  document.getElementById("rValorPago").textContent = `R$ ${valorPago.toFixed(2)}`;
  document.getElementById("rTroco").textContent = `R$ ${troco.toFixed(2)}`;
  document.getElementById("rStatus").textContent = adultos > 5 ? "Muita gente" : "Pouca gente";
}