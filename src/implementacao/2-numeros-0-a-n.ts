//resultado vai ser uma string
function mostrarNumerosAteN(n: number): string {
    let resultado: string = "invalido";

    if (n >= 0) {
        resultado = ""; // Zera a string
        for (let i = 0; i <= n; i++) {
            resultado += i.toString(); // Adiciona o número na string
            
            if (i < n) {
                resultado += ","; // Adiciona a vírgula entre os números, mas não no final
            }
        }
    }
    
    return resultado;
}

/** maneira que permanece como numero 
 * function mostrarNumerosAteN(n:number) :void {// retorno nulo , sem retorno especifico

    if (n>=0) {
        //true
        for(let i=0;i<=n;i++)
            console.log(i);
    } else {
     
    console.log ("operação invalida");   //false

    }
}
 */

/**
 * Implemente o método exibirNumerosAteN, que recebe um número N e exibe todos os números de 0 até N.

O método deve iterar de 0 até o valor de N e exibir cada número.
Exemplos:
Para a entrada N = 5, a saída deve ser: 0, 1, 2, 3, 4, 5.
Para a entrada N = 10, a saída deve ser: 0, 1, 2, 3, ..., 10.
Para a entrada N = 3, a saída deve ser: 0, 1, 2, 3.

 */
module.exports = mostrarNumerosAteN;
console.log(mostrarNumerosAteN(5));
mostrarNumerosAteN(5);