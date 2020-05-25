//Qualitativa!!!!!!!!!!!!!!!!!
import { coluna, table, col1, linha } from "./tables.js";
import { moda, medianaquali } from "./calcs.js";

function qualitativaNom(ordem) {
  const resul = document.getElementById("resultados1");
  resul.innerHTML = "";
  document.getElementById("table1").innerHTML = "";
  const dados1 = document.getElementById("dados1").value;
  let vet = dados1.split(" ");
  vet.forEach((v, i) => {
    vet[i] = vet[i].toUpperCase();
  });
  let coluna0;
  if (ordem) {
    coluna0 = ordem.split(" ");
    coluna0.forEach((v, i) => {
      coluna0[i] = coluna0[i].toUpperCase();
    });
  } else {
    coluna0 = linha(vet);
  }

  let coluna1 = col1(coluna0, vet);
  let coluna2 = coluna(coluna1);
  let modaV = moda(coluna1, coluna0);
  let medianaV = medianaquali(coluna0, coluna2);
  const header = ["xi", "fi", "fac"];
  const id = document.getElementById("table1");
  table(header, id, coluna0, coluna1, coluna2);

  resul.innerHTML += `Moda= ${modaV} / Mediana= ${medianaV}`;
}

export { qualitativaNom };
