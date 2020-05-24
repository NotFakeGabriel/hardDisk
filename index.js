import { qualitativa } from "./modules/qualitativa.js";
import { convertNumber } from "./modules/conversor.js";
import { criarTabela } from "./modules/quantitativa.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", qualitativa);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", criarTabela);
