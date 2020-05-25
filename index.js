import { qualitativaNom } from "./modules/qualitativa.js";

import { quantitativaCont, quantitativaDisc } from "./modules/quantitativa.js";

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
