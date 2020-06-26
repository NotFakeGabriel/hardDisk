let comps, pass, trocas;

function troca(vet, i, j) {
  let aux = vet[i];
  vet[i] = vet[j];
  vet[j] = aux;
  trocas++;
}

// Parâmetros opcionais:
// posIni: se não for informado, assume o valor 0
// posFim: se não for informado, assume o tamanho do vetor - 1
function quickSort(vet, fnComp, posIni = 0, posFim = vet.length - 1) {
  pass++;
  // Condição de saída da recursividade: o subvetor
  // a ser ordenado precisa ter mais que um elemento
  if (posFim > posIni) {
    const posPivot = posFim;
    let posDiv = posIni - 1;
    // Percorre o vetor do início até a penúltima posição.
    // Quando o elemento atual for menor que o elemento pivô,
    // incrementa posDiv e faz a troca dos valores que estão
    // nas posições i e posDiv entre si.
    for (let i = posIni; i < posFim; i++) {
      comps++;
      // console.log({i, posDiv})

      /************************
          * 
            USO DE FUNÇÃO DE COMPARAÇÃO

            Para tornar o algoritmo de ordenação mais flexível e capaz de
            ordenar tipos de dados não comparáveis diretamente pela linguagem,
            é possivel passar uma função que será usada para comparar dois valores
            quaisquer. Essa função será chamada toda vez que for necessário comparar
            dois valores para ordenação.
         
         */

      /* COMPARAÇÃO EMBUTIDA: SÓ FUNCIONA PARA NÚMEROS E STRINGS */
      if (vet[i] < vet[posPivot] && i != posDiv) {
        /* COMPARAÇÃO VIA FUNÇÃO: A FUNÇÃO SE RESPONSABILIZA POR DETERMINAR
            A ORDEM DOS ELEMENTOS COMPARADOS */
        //if(fnComp(vet[posPivot], vet[i])) {
        posDiv++;
        troca(vet, i, posDiv);
      }
    }
    // Após terminado o percurso, é necessário colocar o
    // pivô no lugar correto. Para isso, incrementa-se o
    // posDiv uma última vez e efetua-se a troca dos valores
    // das posições posDiv e posPivot entre si.
    posDiv++;
    troca(vet, posDiv, posPivot);

    // Ordena o subvetor à esquerda do pivô (que está na posDiv)
    quickSort(vet, fnComp, posIni, posDiv - 1);

    // Ordena o subvetor à direita do pivô
    quickSort(vet, fnComp, posDiv + 1, posFim);
  }
  return vet;
}

export { quickSort };
