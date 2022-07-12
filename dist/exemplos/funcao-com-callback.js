"use strict";
function somaValoresNumerico(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function printaNumeros(num1) {
    return console.log(num1);
}
function aoQuadrado(num) {
    return num * num;
}
function dividirPorEleMesmo(num) {
    return num / num;
}
printaNumeros(somaValoresNumerico(1, 3, aoQuadrado));
printaNumeros(somaValoresNumerico(1, 3, dividirPorEleMesmo));
