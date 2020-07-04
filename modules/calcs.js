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
      return `Mediana = ${col0[fac[0]]}`;
    } else {
      return `Mediana = ${col0[fac[0]]} e ${col0[fac[1]]}`;
    }
  } else {
    let med = Math.trunc(tot / 2);
    let fac;
    col2.forEach((x, i) => {
      if (med <= x && med > col2[i - 1]) {
        fac = i;
      }
    });
    return `Mediana = ${col0[fac]}`;
  }
}

function separasTestes(
  col0,
  col2,
  tot,
  medida,
  num,
  cont = false,
  h = 0,
  fi = 0
) {
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
  if (cont) {
    let l = col0[fac].split("|", 2);
    l = Number(l[0]);
    let fant = fac == 0 ? 0 : col2[fac - 1];
    let find = fi[fac];
    let md = l + ((med - fant) / find) * h;
    return `${medida} ${num}= ${md.toFixed(2)}`;
  } else {
    console.log(col2, fac, med);
    return `${medida} ${num}= ${
      isNaN(col0[fac]) ? col0[fac] : col0[fac].toFixed(2)
    }`;
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
      let fant = fac[0] == 0 ? 0 : col2[fac[0] - 1];
      let find = fi[fac[0]];
      let md = l + ((tot / 2 - fant) / find) * h;
      return `mediana = ${md.toFixed(2)}`;
    } else {
      let l = col0[fac[0]].split("|", 2);
      l = Number(l[0]);
      let fant = fac[0] == 0 ? 0 : col2[fac[0] - 1];
      let find = fi[fac[0]];
      let md = [l + ((tot / 2 - fant) / find) * h];
      //segunda mediana

      l = col0[fac[1]].split("|", 2);
      l = Number(l[0]);
      fant = fac[1] == 0 ? 0 : col2[fac[1] - 1];
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
    let fant = fac == 0 ? 0 : col2[fac - 1];
    let find = fi[fac];
    let md = l + ((tot / 2 - fant) / find) * h;
    return `mediana = ${md.toFixed(2)}`;
  }
}

function variancia(xi, fi, total, media, tipo) {
  let dp = 0;
  xi.forEach((x, i) => {
    dp += (x - media) ** 2 * fi[i];
  });
  if (tipo === "amostra") {
    dp = Math.sqrt(dp / (total - 1)).toFixed(2);
  } else {
    dp = Math.sqrt(dp / total).toFixed(2);
  }

  let cv = (dp / media) * 100;

  return [dp, cv.toFixed(0)];
}
function sFact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
}

function somar(vet) {
  let soma = 0;
  vet.forEach((x) => {
    soma += x;
  });
  return soma;
}

function elev(vet) {
  let quad = [];
  vet.forEach((x) => quad.push(x * x));
  return quad;
}

export {
  somar,
  elev,
  media,
  moda,
  mediana,
  porcentagem,
  mult,
  medianaCont,
  separasTestes,
  variancia,
  sFact,
};
