const fontesDisponiveis = [
  { nome: "Abjad Stars Kid Dotted", valor: "AbjadStarsKidDottLineReg-m2P92" },
  { nome: "BMD Letters Dots Hatted J", valor: "BmdLettersForLearnersDotsHattedJ-WXBE" },
  { nome: "BMD Letters Hatted J", valor: "BmdLettersForLearnersHattedJ-aZmR" },
  { nome: "BMD Letters Lined Dots Hatted J", valor: "BmdLettersForLearnersLinedDotsHattedJ-ElDn" },
  { nome: "BMD Letters Lined Hatted J", valor: "BmdLettersForLearnersLinedHattedJ-O2D4" },
  { nome: "Cole Carreira", valor: "ColeCarreira" },
  { nome: "Cursif", valor: "Cursif" },
  { nome: "Cursifl", valor: "Cursifl" },
  { nome: "Cursive Standard Bold", valor: "Cursive standard Bold" },
  { nome: "Cursive Standard", valor: "Cursive standard" },
  { nome: "Ecolier", valor: "Ecolier-ZpAx" },
  { nome: "Ecolier CP", valor: "EcolierCp-aYRo" },
  { nome: "Ecolier CP Pontilhado", valor: "EcolierCpPointilles-e9rg" },
  { nome: "Ecolier Linhas", valor: "EcolierLignes-Wpx4" },
  { nome: "Ecolier Linhas Pontilhado", valor: "EcolierLignesPointilles-E4wz" },
  { nome: "Ecolier Pontilhado", valor: "EcolierPointilles-OG08" },
  { nome: "Espaço Educar Pontilhada", valor: "EspacoEducarPontilhada" },
  { nome: "Gaston Demo", valor: "GastonDemo" },
  { nome: "Jardotty", valor: "Jardotty-R946" },
  { nome: "KG Primary Dots (variação 1)", valor: "KgPrimaryDots-Pl0E" },
  { nome: "KG Primary Dots", valor: "KGPrimaryDots" },
  { nome: "KG Primary Dots Lined (1)", valor: "KgPrimaryDotsLined-LGX4" },
  { nome: "KG Primary Dots Lined", valor: "KGPrimaryDotsLined" },
  { nome: "KG Primary Dots Lined Alt 1", valor: "KgPrimaryDotsLinedAlt-XMxK" },
  { nome: "KG Primary Dots Lined Alt", valor: "KGPrimaryDotsLinedAlt" },
  { nome: "KG Primary Dots Lined No Space (1)", valor: "KgPrimaryDotsLinedNospace-geY6" },
  { nome: "KG Primary Dots Lined No Space", valor: "KGPrimaryDotsLinedNOSPACE" },
  { nome: "Learning Curve (1)", valor: "LearningCurve-2wJ3" },
  { nome: "Learning Curve (2)", valor: "Learningcurve-Pv7Z" },
  { nome: "Learning Curve", valor: "LearningCurve" },
  { nome: "Learning Curve Bold (1)", valor: "LearningcurveBold-7Z9B" },
  { nome: "Learning Curve Bold (2)", valor: "LearningCurveBold-voDy" },
  { nome: "Learning Curve Dashed (1)", valor: "Learningcurvedashed-m5W2" },
  { nome: "Learning Curve Dashed (2)", valor: "LearningCurveDashed-w4DP" },
  { nome: "Learning Curve Dashed", valor: "LearningCurveDashed" },
  { nome: "Learning Curve Dings (1)", valor: "LearningCurveDings-7Lzw" },
  { nome: "Learning Curve Dings (2)", valor: "Learningcurvedings-dpAx" },
  { nome: "Letters For Learners", valor: "LettersForLearners-A7wL" },
  { nome: "Letters For Learners Dots", valor: "LettersForLearnersDots-q932" },
  { nome: "Letters For Learners Lined", valor: "LettersForLearnersLined-VKqz" },
  { nome: "Letters For Learners Lined Dots", valor: "LettersForLearnersLinedDots-J0aa" },
  { nome: "Maria Lucia", valor: "Maria_lucia" },
  { nome: "Mv Jadheedh Trace", valor: "MvJadheedhTrace-M97e" },
  { nome: "Nealfont", valor: "Nealfont-1jWB" },
  { nome: "Quicksand Bold Oblique", valor: "QuicksandboldobliqueRegular-XE3o" },
  { nome: "Quicksand Bold", valor: "QuicksandboldRegular-44B9" },
  { nome: "Quicksand Book Oblique", valor: "QuicksandbookobliqueRegular-e1Zx" },
  { nome: "Quicksand Book", valor: "QuicksandbookRegular-0gW4" },
  { nome: "Quicksand Dash", valor: "QuicksanddashRegular-oMwV" },
  { nome: "Quicksand Light Oblique", valor: "QuicksandlightobliqueRegular-gBxY" },
  { nome: "Quicksand Light", valor: "QuicksandlightRegular-WJpz" },
  { nome: "Teaching Print Dotted", valor: "TeachingPrintDotted-OVKlp" },
  { nome: "Teaching Print Dotted Lined", valor: "TeachingPrintDottedLined-Ea6W8" },
  { nome: "Trace", valor: "Trace-lxy0" }
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
  const tamanho = document.getElementById("tamanho-fonte").value + "px";
  const tamanhoPx = parseInt(document.getElementById("tamanho-fonte").value);
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

    if (tipoTreino === "linha") {
      const linhaTreino = document.createElement("div");
      linhaTreino.className = "linha-treino treino-linha";
      linhaTreino.style.fontSize = tamanho;
      linhaTreino.style.height = (tamanhoPx * 1.2) + "px";
      linhaTreino.textContent = "_".repeat(texto.length);
      folha.appendChild(linhaTreino);
    } else if (tipoTreino === "guia") {
      const linhaGuia = document.createElement("div");
      linhaGuia.className = "linha-treino treino-guia";
      linhaGuia.style.fontSize = tamanho;
      linhaGuia.textContent = texto;
      folha.appendChild(linhaGuia);
    }
  }
}
