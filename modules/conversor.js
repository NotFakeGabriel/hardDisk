import { quickSort } from "./quicksort.js";

const convertNumber = (vetor) => {
  let novo = [];
  vetor.forEach((vet, i) => {
    novo.push(Number(vet));
  });
  novo = quickSort(novo);
  //novo.sort((a, b) => a - b);

  return novo;
};

const convert = (vetor) => {
  let novo = [];
  vetor.forEach((vet, i) => {
    novo.push(Number(vet));
  });

  return novo;
};

const obj = (x, y) => {
  let vet = [];
  x.forEach((value, i) => {
    vet.push({
      /*label: "",
      data: [
        {
          x: value,
          y: y[i],
          r: 10,
        },
      ],
      backgroundColor: "rgb(50, 170, 245)",
      hoverBackgroundColor: "rgb(50, 170, 245)",*/
      x: value,
      y: y[i],
    });
  });

  return vet;
};
export { convertNumber, convert, obj };
