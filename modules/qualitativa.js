//Qualitativa!!!!!!!!!!!!!!!!!
import { coluna, table, col1, linha } from "./tables.js";
import { moda, porcentagem, separasTestes } from "./calcs.js";
import { pie } from "./charts.js";

function qualitativaNom(ordem) {
  const resul = document.getElementById("resultados1");
  resul.innerHTML = "";
  document.getElementById("table1").innerHTML = "";
  const dados1 = document.getElementById("dados1").value;
  let vet = dados1.split(";");
  vet.forEach((v, i) => {
    vet[i] = vet[i].toUpperCase();
  });
  let coluna0;
  if (ordem) {
    coluna0 = ordem.split(";");
    coluna0.forEach((v, i) => {
      coluna0[i] = coluna0[i].toUpperCase();
    });
  } else {
    coluna0 = linha(vet);
  }

  let coluna1 = col1(coluna0, vet);
  let coluna2 = coluna(coluna1);
  let frPorcen = porcentagem(coluna1, vet.length);
  let facPorcen = porcentagem(coluna2, vet.length);
  let modaV = moda(coluna1, coluna0);
  let medianaV = separasTestes(coluna0, coluna2, vet.length, "Quartil", 2);
  const header = ["xi", "fi", "fac", "FR%", "Fac%"];
  const id = document.getElementById("table1");
  const medida = document.getElementById("separatrizQuali").value;
  const num = document.getElementById("numQuali").value;

  let separa = separasTestes(coluna0, coluna2, vet.length, medida, num);
  table(header, id, coluna0, coluna1, coluna2, frPorcen, facPorcen);

  resul.innerHTML += `Moda = ${modaV} / Mediana = ${medianaV[1]} / ${separa[0]}`;
  const ctx = document.getElementsByClassName("pie");
  pie(ctx, frPorcen, coluna0);
}

function qualitativaXls(dados1, ordem) {
  const resul = document.getElementById("resultados1");
  resul.innerHTML = "";
  document.getElementById("table1").innerHTML = "";

  let vet = dados1.slice(1, dados.length);
  vet.forEach((v, i) => {
    vet[i] = vet[i].toUpperCase();
  });
  let coluna0;
  if (ordem) {
    coluna0 = ordem.split(";");
    coluna0.forEach((v, i) => {
      coluna0[i] = coluna0[i].toUpperCase();
    });
  } else {
    coluna0 = linha(vet);
  }

  let coluna1 = col1(coluna0, vet);
  let coluna2 = coluna(coluna1);
  let frPorcen = porcentagem(coluna1, vet.length);
  let facPorcen = porcentagem(coluna2, vet.length);
  let modaV = moda(coluna1, coluna0);
  let medianaV = separasTestes(coluna0, coluna2, vet.length, "Quartil", 2);
  const header = [`${dados1[0]} (xi)`, "fi", "fac", "FR%", "Fac%"];
  const id = document.getElementById("table1");
  const medida = document.getElementById("separatrizQuali").value;
  const num = document.getElementById("numQuali").value;

  let separa = separasTestes(coluna0, coluna2, vet.length, medida, num);
  table(header, id, coluna0, coluna1, coluna2, frPorcen, facPorcen);

  resul.innerHTML += `Moda= ${modaV} / Mediana = ${medianaV[1]} / ${separa[0]}`;
  const ctx = document.getElementsByClassName("pie");
  pie(ctx, frPorcen, coluna0);

  // const resul = document.getElementById("nominal");
  // resul.innerHTML = "";
  // document.getElementById("tableNom").innerHTML = "";
  // let vet = dados.slice(1, dados.length);
  // vet.forEach((v, i) => {
  //   vet[i] = vet[i].toUpperCase();
  // });
  // let coluna0;

  // coluna0 = linha(vet);

  // let coluna1 = col1(coluna0, vet);
  // let coluna2 = coluna(coluna1);
  // let frPorcen = porcentagem(coluna1, vet.length);
  // let facPorcen = porcentagem(coluna2, vet.length);
  // let modaV = moda(coluna1, coluna0);
  // let medianaV = mediana(coluna0, coluna2, vet.length);
  // const header = [`${dados[0]} (xi)`, "fi", "fac", "FR%", "Fac%"];
  // const id = document.getElementById("tableNom");
  // table(header, id, coluna0, coluna1, coluna2, frPorcen, facPorcen);

  // resul.innerHTML += `Moda= ${modaV} / ${medianaV}`;
  // const ctx = document.getElementsByClassName("pieXlsx");

  // pie(ctx, coluna1, coluna0);
}

export { qualitativaNom, qualitativaXls };
