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
  let porcent = Browser.inputBox('Digite o percentil de 0 a 100')
  const medquali = medsepquali(linhaTxt,valores,vetN.length,coluna4,xiv,linhas,porcent)
  tabela(linhaTxt, valores, vetN.length, coluna4, xiv);

  resul.innerHTML += `Média= ${mediav} / Moda= ${modav} / Mediana= ${medianav} / Medida Separatriz = ${medquali}`;
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
function tabela(coluna1, coluna2, total, coluna4, xiv) {
  const idtab = document.getElementById("table");
  coluna1.forEach((func, i) => {
    let row = idtab.insertRow(i);
    let cell = row.insertCell(0);
    cell.innerHTML = coluna1[i];
    cell = row.insertCell(1);
    cell.innerHTML = coluna2[i];
    cell = row.insertCell(2);
    cell.innerHTML = xiv[i]; //xi
    cell = row.insertCell(3);
    cell.innerHTML = xiv[i] * coluna2[i]; //xi.fi
    cell = row.insertCell(4);
    cell.innerHTML = ((coluna2[i] * 100) / total).toFixed(2);
    cell = row.insertCell(5);
    cell.innerHTML = coluna4[i];
    cell = row.insertCell(6);
    cell.innerHTML = ((coluna4[i] * 100) / total).toFixed(2);
  });

  let header = ["Variavel", "Fi", "xi", "xi.fi", "FR %", "Fac", "Fac %"];
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
const convertNumber = (vetor) => {
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
function xi(val) {
  let vet = [];
  for (let i = 0; i <= val.length - 2; i++) {
    vet.push((val[i] + val[i + 1]) / 2);
  }
  return vet;
}
function media(xi, total) {
  let tot = 0;
  for (let i = 0; i < total.length; i++) {
    tot += total[i];
  }
  let soma = 0;
  for (let i = 0; i < xi.length; i++) {
    soma += xi[i] * total[i];
  }

  let resultado = soma / tot;
  return resultado;
}
function moda(valores, xi) {
  let maior = Math.max.apply(null, valores);
  let i = valores.indexOf(maior);
  return xi[i];
}

function medianaquant(coluna1, coluna2, total, coluna4, xiv, linhas) {
  let pos = Math.round(total / 2);
  console.log(pos);
  let fant;
  let li;
  let fimd;
  let indice;
  for (let i = 1; i <= coluna4.length - 1; i++) {
    if (pos < coluna4[1]) {
      fant = coluna4[0];
      i = coluna4.length - 1;
    }
    if (pos < coluna4[i] && pos > coluna4[i - 1]) {
      fant = coluna4[i - 1];
    } else if (pos == coluna4[i - 1]) {
      fant = coluna4[i - 1];
    }
  }
  for (var j = 0; j <= coluna4.length - 1; j++) {
    if (pos < coluna4[0]) {
      indice = 0;
      j = coluna4.length - 1;
    }
    if (pos < coluna4[j] && pos > coluna4[j - 1]) {
      indice = j;
    } else if (pos == coluna4[j - 1]) {
      indice = j;
    }
  }
  li = linhas[indice];
  fimd = coluna2[indice];
  let h = linhas[1] - linhas[0];
  let mediana = li + ((total / 2 - fant) / fimd) * h;
  return mediana;
}
function medsepquant(coluna1, coluna2, total, coluna4, xiv, linhas,porc) {
  let pos = Math.round(total / 2);
  let divisor = 100/porc
  let fant;
  let li;
  let fimd;
  let indice;
  for (let i = 1; i <= coluna4.length - 1; i++) {
    if (pos < coluna4[1]) {
      fant = coluna4[0];
      i = coluna4.length - 1;
    }
    if (pos < coluna4[i] && pos > coluna4[i - 1]) {
      fant = coluna4[i - 1];
    } else if (pos == coluna4[i - 1]) {
      fant = coluna4[i - 1];
    }
  }
  for (var j = 0; j <= coluna4.length - 1; j++) {
    if (pos < coluna4[0]) {
      indice = 0;
      j = coluna4.length - 1;
    }
    if (pos < coluna4[j] && pos > coluna4[j - 1]) {
      indice = j;
    } else if (pos == coluna4[j - 1]) {
      indice = j;
    }
  }
  li = linhas[indice];
  fimd = coluna2[indice];
  let h = linhas[1] - linhas[0];
  let mediana = li + ((total / divisor - fant) / fimd) * h;
  return mediana;
}

//Qualitativa!!!!!!!!!!!!!!!!!

function qualitativa() {
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
  let porcent = Browser.inputBox('Digite o percentil (0 a 100)')
  let medsepV = medsepquali(coluna0, coluna2,porcent);
  criar(coluna0, coluna1, coluna2);

  resul.innerHTML += `Média= ${mediaV} / Moda= ${modaV} / Mediana= ${medianaV} / Medida Separatriz = ${medsepV}`;
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
function criar(coluna0, coluna1, coluna2) {
  const idtab = document.getElementById("table1");
  coluna1.forEach((func, i) => {
    let row = idtab.insertRow(i);
    let cell = row.insertCell(0);
    cell.innerHTML = coluna0[i];
    cell = row.insertCell(1);
    cell.innerHTML = coluna1[i];
    cell = row.insertCell(2);
    cell.innerHTML = coluna2[i];
  });

  let header = ["xi", "fi", "fac"];
  let row = idtab.insertRow(0);
  header.forEach((head, i) => {
    row.insertCell(i).outerHTML = "<th>" + head + "</th>";
  });
}

function medianaquali(col0, col2) {
console.log(col0)
console.log(col2)
  let lastpos = col2[col2.length - 1];
  if (lastpos % 2 == 1) {
    var pos1 = lastpos / 2;
    pos1 = Math.round(pos1);
    var pos2 = pos1;
  } else {
    var pos1 = lastpos / 2;
    var pos2 = pos1 + 1;
  }
  let med1;
  let med2;
  for (let i = 0; i <= col2.length - 1; i++) {
    if (pos1 < col2[0]) {
      med1 = col0[0];
      i = col2.length - 1;
    }
    if (pos2 < col2[0]) {
      med2 = col0[0];
      i = col2.length - 1;
    }
    if (pos1 < col2[i] && pos1 > col2[i - 1]) {
      med1 = col0[i];
    }
    if (pos2 < col2[i] && pos2 > col2[i - 1]) {
      med2 = col0[i];
    }
  }
  if (med1 == med2) {
    return med1;
  } else {
    return med1 + " e " + med2;
  }
}

function medsepquali(col0, col2,porc) {
  let divisor = 100/porc
    let lastpos = col2[col2.length - 1];
    if (lastpos % 2 == 1) {
      var pos1 = lastpos / divisor;
      pos1 = Math.round(pos1);
      var pos2 = pos1;
    } else {
      var pos1 = lastpos / divisor;
      var pos2 = pos1 + 1;
    }
    let med1;
    let med2;
    for (let i = 0; i <= col2.length - 1; i++) {
      if (pos1 < col2[0]) {
        med1 = col0[0];
        i = col2.length - 1;
      }
      if (pos2 < col2[0]) {
        med2 = col0[0];
        i = col2.length - 1;
      }
      if (pos1 < col2[i] && pos1 > col2[i - 1]) {
        med1 = col0[i];
      }
      if (pos2 < col2[i] && pos2 > col2[i - 1]) {
        med2 = col0[i];
      }
    }
    if (med1 == med2) {
      return med1;
    } else {
      return med1 + " e " + med2;
    }
  }




