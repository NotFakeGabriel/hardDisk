import { qualitativaNom } from "./modules/qualitativa.js";
import { excel } from "./modules/excel.js";
import { quantitativaCont, quantitativaDisc } from "./modules/quantitativa.js";
import { binomial } from "./modules/binomial.js";
import { probNormal } from "./modules/normal.js";

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
    de.classList.remove("hide");
    de.value = "";
    let ate = document.getElementById("ate");
    ate.classList.remove("hide");
    ate.value = "";
    let quant = document.getElementById("quantidade");
    quant.classList.add("hide");
    quant.value = "";
  } else {
    let de = document.getElementById("de");
    de.classList.add("hide");
    de.value = "";
    let ate = document.getElementById("ate");
    ate.classList.add("hide");
    ate.value = "";
    let quant = document.getElementById("quantidade");
    quant.classList.remove("hide");
    quant.value = "";
  }
});
