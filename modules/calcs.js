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

function medianaquali(col0, col2) {
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

function porcentagem(vet, tot) {
  let novo = [];
  vet.forEach((valor) => {
    novo.push(((valor * 100) / tot).toFixed(2));
  });
  return novo;
}

function mult(a, b) {
  let novo = [];
  a.forEach((val, i) => {
    novo.push(val * b[i]);
  });
  return novo;
}

function medianaquant(coluna1, coluna2, total, coluna4, xiv, linhas) {
  let pos = Math.round(total / 2);
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
  let mediana = (li + ((total / 2 - fant) / fimd) * h).toFixed(2);
  return mediana;
}

function separatriz(col1, col2, fac, medida, num, teste = false) {
  let num1;
  switch (medida) {
    case "Quartil":
      num1 = (num * 25) / 100;
      break;
    case "Quintil":
      num1 = (num * 20) / 100;
      break;
    case "Decil":
      num1 = (num * 10) / 100;
      break;
    case "Percentil":
      num1 = num / 100;
      break;
  }
  let somar = 0;
  col2.forEach((x) => (somar += x));
  let separatriz;
  let final;
  if (teste) {
  } else {
    separatriz = somar / num1;
    fac.forEach((x, i) => {
      if (separatriz < x + 1) {
      } else {
        final = col1[i];
      }
    });
  }
  final = `${medida} ${num}= ${final}`;
  return final;
}
export {
  media,
  moda,
  medianaquali,
  porcentagem,
  mult,
  medianaquant,
  separatriz,
};
