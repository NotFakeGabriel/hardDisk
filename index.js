import { qualitativaNom } from "./modules/qualitativa.js";
import { excel } from "./modules/excel.js";
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
var input = document.getElementById("upload");
input.addEventListener(
  "change",

  function () {
    /*
  readXlsxFile(input.files[0]).then(function (test) {
    console.log(test);
  });
*/
    readXlsxFile(input.files[0], { getSheets: true }).then((sheets) => {
      console.log(sheets);
      sheets.forEach((sheet, i) => {
        let name = sheets[i].name;
        readXlsxFile(input.files[0], { sheet: name }).then((data) => {
          let obj = { name: name, data: data };
          excel(obj);
        });
      });
    });
  }
);
