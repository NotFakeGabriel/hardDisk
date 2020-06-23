import { convert } from "./conversor.js";

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
}
function mult(a, b) {
  let vet = [];
  a.forEach((x, i) => {
    vet.push(x * b[i]);
  });
  return vet;
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
export { correlacao };
