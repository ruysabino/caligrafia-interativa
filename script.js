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

const tamanhoPx = parseInt(document.getElementById("tamanho-fonte").value);
linhaTreino.style.fontSize = tamanho;
linhaTreino.style.lineHeight = "1";
linhaTreino.style.height = (tamanhoPx * 1.2) + "px"; // ajusta a altura
};

function gerarCaligrafia() {
  const texto = document.getElementById("input-texto").value;
  const fonte = document.getElementById("fonte").value;
  const tamanho = document.getElementById("tamanho-fonte").value + "px";
  const qtdLinhas = parseInt(document.getElementById("qtd-linhas").value);
  const tipoTreino = document.getElementById("tipo-treino").value;

  const folha = document.getElementById("folha");
  folha.innerHTML = "";

  for (let i = 0; i < qtdLinhas; i++) {
    const linhaModelo = document.createElement("div");
    linhaModelo.className = "linha-pontilhada";
    linhaModelo.style.fontFamily = fonte;
    linhaModelo.style.fontSize = tamanho;
    linhaModelo.textContent = texto;
    folha.appendChild(linhaModelo);

const tamanhoPx = parseInt(document.getElementById("tamanho-fonte").value);

if (tipoTreino === "linha") {
  const linhaTreino = document.createElement("div");
  linhaTreino.className = "linha-treino treino-linha";
  linhaTreino.style.fontSize = tamanho;
  linhaTreino.style.height = (tamanhoPx * 1.2) + "px";
  linhaTreino.textContent = "_".repeat(texto.length);
  folha.appendChild(linhaTreino);
}
    } else if (tipoTreino === "guia") {
      const linhaGuia = document.createElement("div");
      linhaGuia.className = "linha-treino treino-guia";
      linhaGuia.style.fontSize = tamanho;
      linhaGuia.textContent = texto;
      folha.appendChild(linhaGuia);
    }
  }
}
