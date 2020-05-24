const convertNumber = (vetor) => {
  let novo = [];
  vetor.forEach((vet, i) => {
    novo.push(Number(vet));
  });
  novo.sort((a, b) => a - b);
  return novo;
};

export { convertNumber };
