const fontesDisponiveis = [
  { nome: "KG Primary Dots", valor: "KGPrimaryDots" },
  { nome: "Espaço Educar Pontilhada", valor: "EspacoEducarPontilhada" }
];

window.onload = () => {
  const selectFonte = document.getElementById("fonte");
  fontesDisponiveis.forEach(fonte => {
    const option = document.createElement("option");
    option.value = fonte.valor;
    option.textContent = fonte.nome;
    selectFonte.appendChild(option);
  });

  const inputTamanho = document.getElementById("tamanho-fonte");
  const labelTamanho = document.getElementById("label-tamanho");

  inputTamanho.addEventListener("input", () => {
    labelTamanho.textContent = inputTamanho.value;
  });
};

function gerarCaligrafia() {
  const texto = document.getElementById("input-texto").value;
  const fonte = document.getElementById("fonte").value;
  const tamanho = document.getElementBy
