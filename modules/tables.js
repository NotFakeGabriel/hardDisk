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

export { coluna, table };
