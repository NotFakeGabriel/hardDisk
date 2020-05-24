import { qualitativaNom } from "./modules/qualitativa.js";

import { quantitativaCont, quantitativaDisc } from "./modules/quantitativa.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", function criarTabela2() {
  let radio = document.getElementsByName("Qualitativa");
  if (radio[0].checked) {
    qualitativaNom();
  } else if (radio[1].checked) {
  }
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
