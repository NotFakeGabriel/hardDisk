function criarTabela() {
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
  tabela(linhaTxt, valores, vetN.length, coluna4);
}
function coluna(valor) {
  let vet = [];
  for (i in valor) {
    let cont = 0;
    let b = i;
    do {
      cont += valor[b];
      b--;
    } while (b >= 0);
    vet.push(cont);
  }
  return vet;
}
function tabela(coluna1, coluna2, total, coluna4) {
  const idtab = document.getElementById("table");

  coluna1.forEach((func, i) => {
    let row = idtab.insertRow(i);
    let cell = row.insertCell(0);
    cell.innerHTML = coluna1[i];
    cell = row.insertCell(1);
    cell.innerHTML = coluna2[i];
    cell = row.insertCell(2);
    cell.innerHTML = ((coluna2[i] * 100) / total).toFixed(2);
    cell = row.insertCell(3);
    cell.innerHTML = coluna4[i];
    cell = row.insertCell(4);
    cell.innerHTML = ((coluna4[i] * 100) / total).toFixed(2);
  });

  let header = ["Variavel", "Fi", "FR %", "Fac", "Fac %"];
  let row = idtab.insertRow(0);
  header.forEach((head, i) => {
    row.insertCell(i).outerHTML = "<th>" + head + "</th>";
  });
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
    for (b in valor) {
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
const convertNumber = vetor => {
  let novo = [];
  vetor.forEach((vet, i) => {
    novo.push(Number(vet));
  });
  novo.sort((a, b) => a - b);
  return novo;
};
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
