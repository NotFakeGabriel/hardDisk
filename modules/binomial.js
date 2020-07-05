import { sFact } from "./calcs.js";
import { convert } from "./conversor.js";

function binomial() {
  let n = Number(document.getElementById("n").value);
  let p = Number(document.getElementById("p").value);
  let q = Number(document.getElementById("q").value);
  let k = document.getElementById("k").value;
  k = k.split(";");
  k = convert(k);

  let soma = 0;

  k.forEach((x) => {
    let P = bino(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
    soma += p * 100;
  });
  const resul = document.getElementById("resulBino");

  resul.innerText = `Probabilidade = ${soma.toFixed(2)}%`;
}

function bino(n, k) {
  return (sFact(n) / sFact(n - k)) * sFact(k);
}

export { binomial };
