function probUniforme() {
  const minimo = Number(document.getElementById("minimo").value);
  const maximo = Number(document.getElementById("maximo").value);
  const select = document.getElementById("uniformeSelect").value;
  const quant = Number(document.getElementById("quantidadeUniforme").value);
  const de = Number(document.getElementById("deUniforme").value);
  const ate = Number(document.getElementById("ateUniforme").value);
  const resul = document.getElementById("uniformeResul");

  let int;
  if (select == "entre") {
    int = ate - de;
  } else if (select == "maior") {
    int = maximo - quant;
  } else {
    int = quant - minimo;
  }
  let prob = ((1 / (maximo - minimo)) * int * 100).toFixed(2);
  let media = (maximo + minimo) / 2;
  let vari = (Math.pow(maximo - minimo, 2) / 12).toFixed(2);
  let dp = Math.sqrt(vari).toFixed(2);
  let cv = ((dp / media) * 100).toFixed(2);

  resul.innerText = `Probabilidade = ${prob}% , CV = ${cv} , DP = ${dp} 
  , Variancia = ${vari} e Média = ${media}`;
}

export { probUniforme };
