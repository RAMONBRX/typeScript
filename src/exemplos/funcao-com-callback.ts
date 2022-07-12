function somaValoresNumerico(num1 : number, num2 : number, callback :(num :number ) => number): number{
    let resultado = num1 +num2;
    return callback(resultado);
}

function printaNumeros(num1: number) : void{
   return console.log(num1);
}

function aoQuadrado(num : number) : number{
    return num * num;
}

function dividirPorEleMesmo(num : number): number{
    return num / num;
}

printaNumeros(somaValoresNumerico(1,3, aoQuadrado));
printaNumeros(somaValoresNumerico(1,3, dividirPorEleMesmo));