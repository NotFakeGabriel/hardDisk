import { qualitativaNom } from "./modules/qualitativa.js";
import { excel } from "./modules/excel.js";
import { quantitativaCont, quantitativaDisc } from "./modules/quantitativa.js";
import { binomial } from "./modules/binomial.js";
import { probNormal } from "./modules/normal.js";
import { probUniforme } from "./modules/uniforme.js";
import { correlacao, futura } from "./modules/correlacao.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", function criarTabela2() {
  let radio = document.getElementsByName("Qualitativa");
  let ordem = document.getElementById("ordem").value;
  if (radio[0].checked) {
    qualitativaNom();
  } else if (radio[1].checked) {
    qualitativaNom(ordem);
  }
});
const ordinal = document.getElementById("ordinal");
document
  .getElementById("radQualitativaOrd")
  .addEventListener("click", function () {
    ordinal.classList.remove("hide");
  });
document
  .getElementById("radQualitativaNom")
  .addEventListener("click", function () {
    ordinal.classList.add("hide");
    document.getElementById("ordem").value = "";
  });
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function criarTabela() {
  let radio = document.getElementsByName("Quantitativa");
  if (radio[0].checked) {
    quantitativaDisc();
  } else if (radio[1].checked) {
    quantitativaCont();
  }
});
var input = document.getElementById("upload");
input.addEventListener("change", function () {
  /*
  readXlsxFile(input.files[0]).then(function (test) {
    console.log(test);
  });
*/
  readXlsxFile(input.files[0], { getSheets: true }).then((sheets) => {
    sheets.forEach((sheet, i) => {
      let name = sheets[i].name;
      readXlsxFile(input.files[0], { sheet: name }).then((data) => {
        let obj = { name: name, data: data };
        excel(obj);
      });
    });
  });
});
var input1 = document.getElementById("upload1");
input1.addEventListener("change", function () {
  /*
  readXlsxFile(input.files[0]).then(function (test) {
    console.log(test);
  });
*/
  readXlsxFile(input1.files[0], { getSheets: true }).then((sheets) => {
    sheets.forEach((sheet, i) => {
      let name = sheets[i].name;
      readXlsxFile(input1.files[0], { sheet: name }).then((data) => {
        let obj = { name: name, data: data };
        excel(obj);
      });
    });
  });
});
const separa = document.getElementById("separatrizQuali");
const num = document.getElementById("numQuali");
separa.addEventListener("change", function () {
  let medida = separa.value;

  switch (medida) {
    case "Quartil":
      num.max = 4;
      num.value = 1;
      break;
    case "Quintil":
      num.max = 5;
      num.value = 1;
      break;
    case "Decil":
      num.max = 10;
      num.value = 1;
      break;
    case "Percentil":
      num.max = 100;
      num.value = 1;
      break;
  }
});
const separaQuant = document.getElementById("separatrizQuant");
const numquant = document.getElementById("numQuant");
separaQuant.addEventListener("change", function () {
  let medida = separaQuant.value;

  switch (medida) {
    case "Quartil":
      numquant.max = 4;
      numquant.value = 1;
      break;
    case "Quintil":
      numquant.max = 5;
      numquant.value = 1;
      break;
    case "Decil":
      numquant.max = 10;
      numquant.value = 1;
      break;
    case "Percentil":
      numquant.max = 100;
      numquant.value = 1;
      break;
  }
});

const binomialBtn = document.getElementById("binomialBtn");
binomialBtn.addEventListener("click", binomial);

const normalBtn = document.getElementById("normalBtn");
normalBtn.addEventListener("click", probNormal);

const normalSelect = document.getElementById("normalSelect");
normalSelect.addEventListener("change", function () {
  if (normalSelect.value == "entre") {
    let de = document.getElementById("de");
    de.style.display = "block";
    de.value = "";
    let ate = document.getElementById("ate");
    ate.style.display = "block";
    ate.value = "";
    let quant = document.getElementById("quantidade");
    quant.style.display = "none";
    quant.value = "";
  } else {
    let de = document.getElementById("de");
    de.style.display = "none";
    de.value = "";
    let ate = document.getElementById("ate");
    ate.style.display = "none";
    ate.value = "";
    let quant = document.getElementById("quantidade");
    quant.style.display = "block";
    quant.value = "";
  }
});

const uniformeBtn = document.getElementById("uniformeBtn");
uniformeBtn.addEventListener("click", probUniforme);

const uniformeSelect = document.getElementById("uniformeSelect");
const deUni = document.getElementById("deUniforme");
const ateUni = document.getElementById("ateUniforme");
const quantUni = document.getElementById("quantidadeUniforme");
uniformeSelect.addEventListener("change", function () {
  if (uniformeSelect.value == "entre") {
    deUni.style.display = "block";
    deUni.value = "";

    ateUni.style.display = "block";
    ateUni.value = "";

    quantUni.style.display = "none";
    quantUni.value = "";
  } else {
    deUni.style.display = "none";
    deUni.value = "";

    ateUni.style.display = "none";
    ateUni.value = "";

    quantUni.style.display = "block";
    quantUni.value = "";
  }
});

const correBtn = document.getElementById("correBtn");
if (correBtn) {
  correBtn.addEventListener("click", correlacao);
}

const futuBtn = document.getElementById("futuBtn");
if (futuBtn) {
  futuBtn.addEventListener("click", futura);
}

document.getElementById("navbtdesc").addEventListener("click", opendesc);
document.getElementById("cardbtdesc").addEventListener("click", opendesc);

function opendesc() {
  document.getElementById("divdesc").style.display = "block";
  document.getElementById("divprob").style.display = "none";
  document.getElementById("divcorr").style.display = "none";
  document.getElementById("homepage").style.display = "none";
}

document.getElementById("navbtprob").addEventListener("click", openprob);
document.getElementById("cardbtprob").addEventListener("click", openprob);

function openprob() {
  document.getElementById("divdesc").style.display = "none";
  document.getElementById("divprob").style.display = "block";
  document.getElementById("divcorr").style.display = "none";
  document.getElementById("homepage").style.display = "none";
}

document.getElementById("navbtcorr").addEventListener("click", opencorr);
document.getElementById("cardbtcorr").addEventListener("click", opencorr);

function opencorr() {
  document.getElementById("divdesc").style.display = "none";
  document.getElementById("divprob").style.display = "none";
  document.getElementById("divcorr").style.display = "block";
  document.getElementById("homepage").style.display = "none";
}

document.getElementById("navbthome").addEventListener("click", function () {
  document.getElementById("divdesc").style.display = "none";
  document.getElementById("divprob").style.display = "none";
  document.getElementById("divcorr").style.display = "none";
  document.getElementById("homepage").style.display = "block";
});

document.getElementById("btnshowquali").addEventListener("click", function () {
  document.getElementById("divquali").style.display = "block";
  document.getElementById("divquant").style.display = "none";
  document.getElementById("divupload").style.display = "block";
});

document.getElementById("btnshowquant").addEventListener("click", function () {
  document.getElementById("divquali").style.display = "none";
  document.getElementById("divquant").style.display = "block";
  document.getElementById("divupload").style.display = "block";
});

document.getElementById("btnshownorm").addEventListener("click", function () {
  document.getElementById("normal").style.display = "block";
  document.getElementById("uniforme").style.display = "none";
  document.getElementById("binomial").style.display = "none";
});
document.getElementById("btnshowunif").addEventListener("click", function () {
  document.getElementById("normal").style.display = "none";
  document.getElementById("uniforme").style.display = "block";
  document.getElementById("binomial").style.display = "none";
});
document.getElementById("btnshowbino").addEventListener("click", function () {
  document.getElementById("normal").style.display = "none";
  document.getElementById("uniforme").style.display = "none";
  document.getElementById("binomial").style.display = "block";
});

document.getElementById("numQuali").addEventListener("input", mudarValorBarra1);
function mudarValorBarra1() {
  let range = document.getElementById("numQuali");
  let valor = range.value;
  let selec = document.getElementById("separatrizQuali").value;
  document.getElementById("showrangequali").innerHTML = selec + " " + valor;
}

document.getElementById("numQuant").addEventListener("input", mudarValorBarra2);
function mudarValorBarra2() {
  let range = document.getElementById("numQuant");
  let valor = range.value;
  let selec = document.getElementById("separatrizQuant").value;
  document.getElementById("showrangequant").innerHTML = selec + " " + valor;
}
