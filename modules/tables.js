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
  idtab.classList.add("table")
  colunas[0].forEach((func, i) => {
    let row = idtab.insertRow(i);
    colunas.forEach((ce, b) => {
      let cell = row.insertCell(b);
      cell.innerHTML = colunas[b][i];
    });
  });
  if (document.getElementById("divdesc").style.display == "block"){
    if (document.getElementById("divquant").style.display == "block"){
      header[0] = document.getElementById("nomequant").value;
    } else if (document.getElementById("divquali").style.display == "block"){
      header[0] = document.getElementById("nomequali").value;
    }
  }
  let row = idtab.insertRow(0);
  header.forEach((head, i) => {
    row.insertCell(i).outerHTML = "<th>" + head + "</th>";
  });
  if (colunas.length == 7){
    let last = colunas[0].length -1
  if (idtab.rows[1].cells[1].innerHTML < 1){idtab.deleteRow(1)}
  if (idtab.rows[last].cells[1].innerHTML < 1){idtab.deleteRow(last)}
  }
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
