"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function adicionarNumeros(numer1, numer2, devePrintar, frase) {
    let resultado = numer1 + numer2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numer1 + numer2;
}
let devePrintar = true;
let frase = "O resultado é: ";
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
