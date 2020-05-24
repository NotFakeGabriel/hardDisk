//Qualitativa!!!!!!!!!!!!!!!!!
import { convertNumber } from "./conversor.js";
import { coluna, table } from "./tables.js";
import { media, moda, medianaquali } from "./calcs.js";

export function qualitativa() {
  const resul = document.getElementById("resultados1");
  resul.innerHTML = "";
  document.getElementById("table1").innerHTML = "";
  const dados1 = document.getElementById("dados1").value;
  let vet = dados1.split(" ");
  let vetN = convertNumber(vet);
  let rol = vetN.sort((a, b) => a - b);
  let coluna0 = linha(rol);
  let coluna1 = col1(coluna0, rol);
  let coluna2 = coluna(coluna1);
  let mediaV = media(coluna0, coluna1);
  let modaV = moda(coluna1, coluna0);
  let medianaV = medianaquali(coluna0, coluna2);
  const header = ["xi", "fi", "fac"];
  const id = document.getElementById("table1");
  table(header, id, coluna0, coluna1, coluna2);

  resul.innerHTML += `Média= ${mediaV} / Moda= ${modaV} / Mediana= ${medianaV}`;
}

function linha(rol) {
  let vet = [];
  let verif;
  for (let i = 0; i < rol.length; i++) {
    if (i == 0) {
      vet.push(rol[i]);
      verif = rol[i];
    } else {
      if (verif == rol[i]) {
      } else {
        vet.push(rol[i]);
        verif = rol[i];
      }
    }
  }
  return vet;
}

function col1(col0, rol) {
  let vet = [];
  let sum = 0;
  for (let i = 0; i < col0.length; i++) {
    sum = 0;
    for (let j = 0; j < rol.length; j++) {
      if (col0[i] == rol[j]) {
        sum++;
      }
    }
    vet.push(sum);
  }
  return vet;
}
