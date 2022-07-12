function somaValoresNumericos(num1 : number, num2 : number) : number{
    return num1 +num2;
}

function printaNumero(num1: number) : void{
    console.log(num1)
}
printaNumero(somaValoresNumericos(1,3));