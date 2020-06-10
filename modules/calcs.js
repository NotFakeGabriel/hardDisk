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
  let teste = [];
  valores.filter((x, i) => {
    if (x == maior) {
      teste.push(xi[i]);
    }
  });
  let retorno;
  teste.forEach((txt) => {
    if (retorno == undefined) {
      retorno = `${txt}`;
    } else {
      retorno += `, ${txt}`;
    }
  });
  return retorno;
}

function mediana(col0, col2, tot) {
  if (tot % 2 == 0) {
    let med = [tot / 2, tot / 2 + 1];
    let fac = [];
    col2.forEach((x, i) => {
      if (med[0] < x && med[0] > col2[i - 1]) {
        fac.push(i);
      }
    });
    col2.forEach((x, i) => {
      if (med[1] < x && med[1] > col2[i - 1]) {
        fac.push(i);
      }
    });
    if (fac[0] == fac[1]) {
      return `mediana = ${col0[fac[0]]}`;
    } else {
      return `mediana = ${col0[fac[0]]} e ${col0[fac[1]]}`;
    }
  } else {
    let med = Math.trunc(tot / 2);
    let fac;
    col2.forEach((x, i) => {
      if (med <= x && med > col2[i - 1]) {
        fac = i;
      }
    });
    return `mediana = ${col0[fac]}`;
  }
}

function separasTestes(col0, col2, tot, medida, num) {
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

  let med = Math.trunc(tot * num1);

  let fac;
  col2.forEach((x, i) => {
    if (i == 0) {
      if (med <= x) {
        fac = i;
      }
    } else {
      if (med <= x && med > col2[i - 1]) {
        fac = i;
      }
    }
  });

  return `${medida} ${num}= ${col0[fac]}`;
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
function medianaCont(col0, col2, tot, h, fi) {
  if (tot % 2 == 0) {
    let med = [tot / 2, tot / 2 + 1];
    let fac = [];
    col2.forEach((x, i) => {
      if (med[0] <= x && med[0] > col2[i - 1]) {
        fac.push(i);
      }
    });

    col2.forEach((x, i) => {
      if (med[1] <= x && med[1] > col2[i - 1]) {
        fac.push(i);
      }
    });

    if (fac[0] == fac[1]) {
      let l = col0[fac[0]].split("|", 2);
      l = Number(l[0]);
      let fant = col2[fac[0] - 1];
      let find = fi[fac[0]];
      let md = l + ((tot / 2 - fant) / find) * h;
      return `mediana = ${md.toFixed(2)}`;
    } else {
      let l = col0[fac[0]].split("|", 2);
      l = Number(l[0]);
      let fant = col2[fac[0] - 1];
      let find = fi[fac[0]];
      let md = [l + ((tot / 2 - fant) / find) * h];
      //segunda mediana

      l = col0[fac[1]].split("|", 2);
      l = Number(l[0]);
      fant = col2[fac[1] - 1];
      find = fi[fac[1]];
      md.push(l + ((tot / 2 - fant) / find) * h);
      return `mediana = ${md[0].toFixed(2)} e ${md[1].toFixed(2)}`;
    }
  } else {
    let med = Math.trunc(tot / 2);
    let fac;
    col2.forEach((x, i) => {
      if (med <= x && med > col2[i - 1]) {
        fac = i;
      }
    });
    let l = col0[fac].split("|", 2);
    l = Number(l[0]);
    let fant = col2[fac - 1];
    let find = fi[fac];
    let md = l + ((tot / 2 - fant) / find) * h;
    return `mediana = ${md.toFixed(2)}`;
  }
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
  mediana,
  porcentagem,
  mult,
  medianaCont,
  separatriz,
  separasTestes,
};
