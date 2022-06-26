function somaValoresNumericos(numero2: number, numero1: number, callback: (numero: number) => number): number{
    let resultado = numero2 + numero1;
    return callback(resultado)
}

function aoQuadrado(numero: number):number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number):number{
    return numero/numero;
}
console.log(somaValoresNumericos(1, 3, aoQuadrado));