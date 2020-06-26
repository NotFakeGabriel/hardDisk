import { qualitativaXls } from "./qualitativa.js";
import { quantitativaContXlsx, quantitativaDiscXlsx } from "./quantitativa.js";
import { correlacaoXlsx } from "./correlacao.js";
//monta os arrays para gerar a tabela

function excel(obj) {
  let vetor = [];
  obj.data.forEach((valor, i) => {
    if (valor[1] === undefined) {
      vetor.push(valor[0]);
    } else {
      vetor.push(valor);
    }
  });
  //console.log(vetor);
  escolha(obj.name, vetor);
}

function escolha(nome, vet) {
  switch (nome) {
    case "Modelo Qualitativo":
      qualitativaXls(vet);
      break;
    case "Modelo Discreto":
      quantitativaDiscXlsx(vet);
      break;
    case "Modelo Continuo":
      quantitativaContXlsx(vet);
      break;
    case "Correlacao":
      console.log(vet);
      correlacaoXlsx(vet);
      break;
  }
}

export { excel };
