import { sFact } from "./calcs.js";

function binomial() {
  let n = Number(document.getElementById("n").value);
  let p = Number(document.getElementById("p").value);
  let q = Number(document.getElementById("q").value);
  let k = Number(document.getElementById("k").value);

  let P = bino(n, k) * Math.pow(p, k) * Math.pow(q, n - k);

  const resul = document.getElementById("resulBino");
  resul.innerText = `Probabilidade = ${(P * 100).toFixed(2)}%`;
}

function bino(n, k) {
  return (sFact(n) / sFact(n - k)) * sFact(k);
}

export { binomial };
