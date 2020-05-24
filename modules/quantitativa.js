import { media, moda, porcentagem, mult, medianaquant } from "./calcs.js";
import { coluna, table } from "./tables.js";
import { convertNumber } from "./conversor.js";
function criarTabela() {
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
  const medianav = medianaquant(
    linhaTxt,
    valores,
    vetN.length,
    coluna4,
    xiv,
    linhas
  );
  const header = ["Variavel", "Fi", "xi", "xi.fi", "FR %", "Fac", "Fac %"];
  const id = document.getElementById("table");
  const col4 = porcentagem(valores, vetN.length);
  const col6 = porcentagem(coluna4, vetN.length);
  const col3 = mult(xiv, valores);
  table(header, id, linhaTxt, valores, xiv, col3, col4, coluna4, col6);

  resul.innerHTML += `Média= ${mediav} / Moda= ${modav} / Mediana= ${medianav}`;
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

export { criarTabela };
