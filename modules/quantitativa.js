import {
  media,
  moda,
  porcentagem,
  mult,
  medianaCont,
  mediana,
  variancia,
  separasTestes,
} from "./calcs.js";
import { coluna, table, col1, linha } from "./tables.js";
import { convertNumber } from "./conversor.js";
import { bar } from "./charts.js";
import { quickSort } from "./quick-sort.js";

function quantitativaCont() {
  const resul = document.getElementById("resultados");
  resul.innerHTML = "";
  document.getElementById("table").innerHTML = "";
  const dados = document.getElementById("dados").value;
  let vet = dados.split(" ");
  let vetN = convertNumber(vet);
  let maior = Math.max.apply(null, vetN);
  let menor = Math.min.apply(null, vetN);
  let at = maior - menor + 1;
  let k = Math.sqrt(vetN.length);
  k = Math.trunc(k);
  let infos = infoTab(at, k);
  const linhas = linhasTab(vetN, infos[1], infos[0]);
  const valores = valoresTab(vetN, linhas);
  const linhaTxt = textosColuna1(linhas);
  const coluna4 = coluna(valores);
  const xiv = xi(linhas);
  const mediav = media(xiv, valores);
  const modav = moda(valores, xiv);
  const medianav = medianaCont(
    linhaTxt,
    coluna4,
    vetN.length,
    infos[1],
    valores
  );
  const header = ["Variavel", "Fi", "xi", "xi.fi", "FR %", "Fac", "Fac %"];
  const id = document.getElementById("table");
  const col4 = porcentagem(valores, vetN.length);
  const col6 = porcentagem(coluna4, vetN.length);
  const col3 = mult(xiv, valores);
  table(header, id, linhaTxt, valores, xiv, col3, col4, coluna4, col6);

  const medida = document.getElementById("separatrizQuant").value;
  const num = document.getElementById("numQuant").value;
  let separa = separasTestes(
    linhaTxt,
    coluna4,
    vetN.length,
    medida,
    num,
    true,
    infos[1],
    valores
  );
  let tipo = document.getElementsByName("tipoQuanti");
  tipo = tipo[0].checked ? "amostra" : "populacao";
  let vari = variancia(xiv, valores, vetN.length, mediav, tipo);
  resul.innerHTML += `Média= ${mediav} / Moda= ${modav} / ${medianav} / 
  ${separa} / 
  DP = ${vari[0]} / CV = ${vari[1]}`;
  const ctx = document.getElementsByClassName("bar");
  bar(ctx, valores, linhaTxt, true);
}

function textosColuna1(valores) {
  let vetor = [];
  for (let i = 0; i <= valores.length - 2; i++) {
    vetor.push(`${valores[i]} |---- ${valores[i + 1]}`);
  }
  return vetor;
}
function valoresTab(valor, linha) {
  let vetor = [];

  for (let i = 0; i <= linha.length - 2; i++) {
    let cont = 0;
    for (let b in valor) {
      if (valor[b] >= linha[i] && valor[b] < linha[i + 1]) {
        cont++;
      }
    }
    vetor.push(cont);
  }
  return vetor;
}

function linhasTab(vet, amp, linha) {
  let vetor = [];
  let min = vet[0];
  vetor.push(min);
  for (let i = 0; i <= linha - 1; i++) {
    vetor.push(vetor[i] + amp);
  }
  return vetor;
}

function infoTab(at, k) {
  let linha;
  let amp = null;

  do {
    if (Number.isInteger(at / (k - 1))) {
      linha = k - 1;
      amp = at / (k - 1);
    } else if (Number.isInteger(at / k)) {
      linha = k;
      amp = at / k;
    } else if (Number.isInteger(at / (k + 1))) {
      linha = k + 1;
      amp = at / (k + 1);
    } else {
      at++;
    }
  } while (amp == null);
  return [linha, amp];
}
function xi(val) {
  let vet = [];
  for (let i = 0; i <= val.length - 2; i++) {
    vet.push((val[i] + val[i + 1]) / 2);
  }
  return vet;
}

function quantitativaDisc() {
  const resul = document.getElementById("resultados");
  resul.innerHTML = "";
  document.getElementById("table").innerHTML = "";
  const dados1 = document.getElementById("dados").value;
  let vet = dados1.split(" ");
  let vetN = convertNumber(vet);
  let rol = vetN.sort((a, b) => a - b);
  //let rol = quickSort(vetN);

  let coluna0 = linha(rol);
  let coluna1 = col1(coluna0, rol);
  let coluna2 = coluna(coluna1);
  let frPorcen = porcentagem(coluna1, vetN.length);
  let facPorcen = porcentagem(coluna2, vetN.length);
  let mediaV = media(coluna0, coluna1);
  let modaV = moda(coluna1, coluna0);
  let medianaV = mediana(coluna0, coluna2, vetN.length);
  const header = ["xi", "fi", "fac", "FR%", "Fac%"];
  const id = document.getElementById("table");

  table(header, id, coluna0, coluna1, coluna2, frPorcen, facPorcen);

  const medida = document.getElementById("separatrizQuant").value;
  const num = document.getElementById("numQuant").value;
  let separa = separasTestes(coluna0, coluna2, vetN.length, medida, num);

  let tipo = document.getElementsByName("tipoQuanti");
  tipo = tipo[0].checked ? "amostra" : "populacao";
  let vari = variancia(coluna0, coluna1, vetN.length, mediaV, tipo);

  resul.innerHTML += `Média= ${mediaV} / Moda= ${modaV} / ${medianaV} / 
  ${separa} / 
  DP = ${vari[0]} / CV = ${vari[1]}`;
  const ctx = document.getElementsByClassName("bar");
  bar(ctx, coluna1, coluna0);
}

function quantitativaContXlsx(dados) {
  const resul = document.getElementById("continua");
  resul.innerHTML = "";
  document.getElementById("tableCon").innerHTML = "";

  let vet = dados.slice(1, dados.length);
  let vetN = convertNumber(vet);
  let maior = Math.max.apply(null, vetN);
  let menor = Math.min.apply(null, vetN);
  let at = maior - menor + 1;
  let k = Math.sqrt(vetN.length);
  k = Math.trunc(k);
  let infos = infoTab(at, k);
  const linhas = linhasTab(vetN, infos[1], infos[0]);
  const valores = valoresTab(vetN, linhas);
  const linhaTxt = textosColuna1(linhas);
  const coluna4 = coluna(valores);
  const xiv = xi(linhas);
  const mediav = media(xiv, valores);
  const modav = moda(valores, xiv);
  const medianav = medianaCont(
    linhaTxt,
    coluna4,
    vetN.length,
    infos[1],
    valores
  );
  const header = [`${dados[0]}`, "Fi", "xi", "xi.fi", "FR %", "Fac", "Fac %"];
  const id = document.getElementById("tableCon");
  const col4 = porcentagem(valores, vetN.length);
  const col6 = porcentagem(coluna4, vetN.length);
  const col3 = mult(xiv, valores);
  table(header, id, linhaTxt, valores, xiv, col3, col4, coluna4, col6);

  resul.innerHTML += `Média= ${mediav} / Moda= ${modav} / ${medianav}`;
  const ctx = document.getElementsByClassName("barXlsx");
  bar(ctx, valores, linhaTxt, true);
}

function quantitativaDiscXlsx(dados) {
  const resul = document.getElementById("discreta");
  resul.innerHTML += `<div id="tabela2"></div>`;

  document.getElementById("tableDisc").innerHTML = "";

  let vet = dados.slice(1, dados.length);
  let vetN = convertNumber(vet);
  let rol = vetN.sort((a, b) => a - b);
  let coluna0 = linha(rol);
  let coluna1 = col1(coluna0, rol);
  let coluna2 = coluna(coluna1);
  let frPorcen = porcentagem(coluna1, vetN.length);
  let facPorcen = porcentagem(coluna2, vetN.length);
  let mediaV = media(coluna0, coluna1);
  let modaV = moda(coluna1, coluna0);
  let medianaV = mediana(coluna0, coluna2, vetN.length);
  const header = [`${dados[0]} (xi)`, "fi", "fac", "FR%", "Fac%"];
  const id = document.getElementById("tableDisc");
  table(header, id, coluna0, coluna1, coluna2, frPorcen, facPorcen);

  resul.innerHTML += `Média= ${mediaV} / Moda= ${modaV} / ${medianaV}`;
  const ctx = document.getElementsByClassName("barDiscXlsx");
  bar(ctx, coluna1, coluna0);
}

export {
  quantitativaCont,
  quantitativaDisc,
  quantitativaContXlsx,
  quantitativaDiscXlsx,
};
