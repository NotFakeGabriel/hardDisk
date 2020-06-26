import { convert, obj } from "./conversor.js";
import { mixed } from "./charts.js";
import { somar, elev, mult } from "./calcs.js";

function correlacao() {
  const x = document.getElementById("correX").value;
  const y = document.getElementById("correY").value;

  let xVet = x.split(";");
  xVet = convert(xVet);
  let yVet = y.split(";");
  yVet = convert(yVet);

  let xy = mult(xVet, yVet);
  let n = xVet.length;
  let xQuad = elev(xVet);
  let yQuad = elev(yVet);
  let r1 = n * somar(xy) - somar(xVet) * somar(yVet);

  let r2 =
    Math.sqrt(n * somar(xQuad) - Math.pow(somar(xVet), 2)) *
    Math.sqrt(n * somar(yQuad) - Math.pow(somar(yVet), 2));
  let r = r1 / r2;
  let a =
    (n * somar(xy) - somar(xVet) * somar(yVet)) /
    (n * somar(xQuad) - Math.pow(somar(xVet), 2));

  let b = somar(yVet) / n - a * (somar(xVet) / n);

  a = a.toFixed(4);
  b = b.toFixed(3);
  const resul = document.getElementById("correResul");
  resul.innerHTML = `<p id="fut"> R= ${r.toFixed(4)} <br/>Y = ${a}X + ${b}</p>`;
  document.getElementById("fut").value = [a, b];
  const ctx = document.getElementsByClassName("mixed");
  let dados = obj(xVet, yVet);
  let vetorX = xVet.sort((a, b) => a - b);
  let vetorY = vetorX.map((x) => {
    if (Number(b) < 0) {
      return Number(a * x) + Number(b) * -1;
    } else {
      return Number(a * x) + Number(b);
    }
  });

  let reta = [
    vetorX[0],
    vetorY[0],
    vetorX[vetorX.length - 1],
    vetorY[vetorY.length - 1],
  ];
  mixed(ctx, dados, reta);
}

function futura() {
  let ab = document.getElementById("fut").value;
  let x = Number(document.getElementById("futuX").value);
  let y = Number(document.getElementById("futuY").value);
  const resul = document.getElementById("futuResul");

  if (x) {
    y = Number(ab[0]) * x + Number(ab[1]);
    resul.innerHTML = `<p> X = ${x} e Y = ${y}`;
  } else {
    x = (y - Number(ab[1])) / Number(ab[0]);
    resul.innerHTML = `<p> X = ${x} e Y = ${y}`;
  }
}
function correlacaoXlsx(array) {
  let novo = [];
  array.forEach((elem) => {
    novo.push(elem[0]);

    return novo;
  });
  let x = novo;
  novo = [];
  array.forEach((elem) => {
    novo.push(elem[1]);
    return novo;
  });
  let y = novo;

  let xVet = x.slice(1, x.length);
  xVet = convert(xVet);
  let yVet = y.slice(1, y.length);
  yVet = convert(yVet);

  let xy = mult(xVet, yVet);
  let n = xVet.length;
  let xQuad = elev(xVet);
  let yQuad = elev(yVet);
  let r1 = n * somar(xy) - somar(xVet) * somar(yVet);

  let r2 =
    Math.sqrt(n * somar(xQuad) - Math.pow(somar(xVet), 2)) *
    Math.sqrt(n * somar(yQuad) - Math.pow(somar(yVet), 2));
  let r = r1 / r2;
  let a =
    (n * somar(xy) - somar(xVet) * somar(yVet)) /
    (n * somar(xQuad) - Math.pow(somar(xVet), 2));

  let b = somar(yVet) / n - a * (somar(xVet) / n);

  a = a.toFixed(4);
  b = b.toFixed(3);
  const resul = document.getElementById("correResul");
  resul.innerHTML = `<p id="fut"> R= ${r.toFixed(4)} <br/>Y = ${a}X + ${b}</p>`;
  document.getElementById("fut").value = [a, b];
  const ctx = document.getElementsByClassName("mixed");
  let dados = obj(xVet, yVet);
  let vetorX = xVet.sort((a, b) => a - b);
  let vetorY = vetorX.map((x) => {
    return Number(a * x) + Number(b);
  });
  let reta = [
    vetorX[0],
    vetorY[0],
    vetorX[vetorX.length - 1],
    vetorY[vetorY.length - 1],
  ];
  mixed(ctx, dados, reta);
}
export { correlacao, futura, correlacaoXlsx };
