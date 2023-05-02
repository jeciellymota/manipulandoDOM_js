const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const btn = document.getElementById("btn-copiar");
const todosCursos = [...document.getElementsByClassName("curso")];

todosCursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const curso = evt.target;
    curso.classList.toggle("destaque");
    if(curso.parentNode == caixa2){
        caixa1.appendChild(curso)
    } 
  });
});

btn.addEventListener("click", () => {
  const destacados = [...document.getElementsByClassName("destaque")];
  destacados.map((el) => {
    caixa2.appendChild(el);
  });
});


/**
 * PARA ONDE VAI? CAIXA1
 * QUAL ELEMENTO? CURSO
 * COMO VERIFICAR SE ELE VAI OU N? SE O TAMANHO DA LISTA DE CLASSES < 3
 * COMO MANDAR ELE PARA A  OUTRA CAIXA? APPENDCHILD
 * 
 * SE TAMANHO DA LISTA DE CLASSE < 3 && ELEMENTO FOR FILHA DA CAIXA 2
 *         ELEMENTO = FILHO DA CAIXA 1
 * 
 */