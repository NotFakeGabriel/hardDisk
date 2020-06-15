import { normal, linha } from "./vetor.js";

function probNormal() {
  const media = document.getElementById("media").value;
  const desvio = document.getElementById("desvio").value;
  const select = document.getElementById("normalSelect").value;
  const quant = document.getElementById("quantidade").value;
  const resul = document.getElementById("normalResul");
  resul.innerHtml = "";
  let numZ;
  switch (select) {
    case "entre":
      const de = document.getElementById("de").value;
      const ate = document.getElementById("ate").value;
      let deZ = numberZ(de, media, desvio);
      let ateZ = numberZ(ate, media, desvio);

      if (de < media) {
        resul.innerText = `Probabilidade = ${(deZ + ateZ) * 100}%`;
      } else if (de == media) {
        resul.innerText = `Probabilidade = ${ateZ * 100}%`;
      } else {
        resul.innerText = `Probabilidade = ${(ateZ - deZ) * 100}%`;
      }
      break;
    case "maior":
      if (quant > media) {
        numZ = numberZ(quant, media, desvio);
        resul.innerText = `Probabilidade = ${(0.5 - numZ) * 100}%`;
      } else {
        numZ = numberZ(quant, media, desvio);
        resul.innerText = `Probabilidade = ${(0.5 + numZ) * 100}%`;
      }

      break;
    case "menor":
      if (quant < media) {
        numZ = numberZ(quant, media, desvio);
        resul.innerText = `Probabilidade = ${(0.5 - numZ) * 100}%`;
      } else {
        numZ = numberZ(quant, media, desvio);
        resul.innerText = `Probabilidade = ${(0.5 + numZ) * 100}%`;
      }
      break;
  }
}
function numberZ(quant, media, desvio) {
  let z = ((quant - media) / desvio).toFixed(2);
  if (z < 0) {
    z = z * -1;
    z = z.toString();
  }

  let zNumber = [Number(z.substring(3, 0)), Number(z.substring(3))];

  let linhaN = linha.indexOf(zNumber[0]);
  return normal[linhaN][zNumber[1]];
}
export { probNormal };
