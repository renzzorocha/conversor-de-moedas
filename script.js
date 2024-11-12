
const taxasDeCambio = {
  BRL: 1,
  USD: 5.2,  // Exemplo: 1 USD = 5.2 BRL
  EUR: 5.6,  // Exemplo: 1 EUR = 5.6 BRL
  GBP: 6.5,  // Exemplo: 1 GBP = 6.5 BRL
  JPY: 0.04  // Exemplo: 1 JPY = 0.04 BRL
};

// Função para converter moedas
function converterMoeda(valor, origem, destino) {
  if (origem === destino) return valor;

  const valorEmBrl = valor / taxasDeCambio[origem];
  return valorEmBrl * taxasDeCambio[destino];
}

function exibirResultado(resultado, origem, destino) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `Resultado: ${resultado.toFixed(2)} ${destino} (Taxa de ${taxasDeCambio[destino]})`;
}

document.getElementById("converter").addEventListener("click", function () {
  const valor = parseFloat(document.getElementById("valor").value);
  const moedaOrigem = document.getElementById("moedaOrigem").value;
  const moedaDestino = document.getElementById("moedaDestino").value;

  if (isNaN(valor) || valor <= 0) {
    alert("Por favor, insira um valor válido para conversão.");
    return;
  }
  if (!moedaOrigem || !moedaDestino) {
    alert("Por favor, selecione as moedas de origem e destino.");
    return;
  }

  const resultado = converterMoeda(valor, moedaOrigem, moedaDestino);
  exibirResultado(resultado, moedaOrigem, moedaDestino);
});
