function coluna(valor) {
  let vet = [];
  for (let i in valor) {
    let cont = 0;
    let b = i;
    do {
      cont += valor[b];
      b--;
    } while (b >= 0);
    vet.push(cont);
  }
  return vet;
}

function table(header, idtab, ...colunas) {
  colunas[0].forEach((func, i) => {
    let row = idtab.insertRow(i);
    colunas.forEach((ce, b) => {
      let cell = row.insertCell(b);
      cell.innerHTML = colunas[b][i];
    });
  });
  let row = idtab.insertRow(0);
  header.forEach((head, i) => {
    row.insertCell(i).outerHTML = "<th>" + head + "</th>";
  });
}

function linha(vetor) {
  let novo = [];
  vetor.forEach((vet, i) => {
    if (novo.indexOf(vet) == -1) {
      novo.push(vet);
    }
  });
  return novo;
}
function col1(col0, rol) {
  let vet = [];
  let sum = 0;
  for (let i = 0; i < col0.length; i++) {
    sum = 0;
    for (let j = 0; j < rol.length; j++) {
      if (col0[i] == rol[j]) {
        sum++;
      }
    }
    vet.push(sum);
  }
  return vet;
}

export { coluna, table, col1, linha };
