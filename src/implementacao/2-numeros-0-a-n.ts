//resultado vai ser uma string
function mostrarNumerosAteN(n: number): string {
    let resultado = "invalido";

    if (n >= 0) {
        resultado = ""; // Reinicia o resultado

        for (let i = 0; i <= n; i++) {
            let num = i;
            let strNum = "";

            if (num === 0) {
                strNum = "0"; // Caso especial para zero
            } else {
                let temp = ""; // Temporária para montar os dígitos ao contrário

                // Converte cada dígito em caractere (de trás pra frente)
                while (num > 0) {
                    let resto = num % 10;
                    let caractere = "0123456789"[resto];
                    temp += caractere;
                    num = (num - (num % 10)) / 10;
                }

                // Agora invertemos a string manualmente (sem split, reverse, join)
                let k = temp.length - 1;
                while (k >= 0) {
                    strNum += temp[k];
                    k--;
                }
            }

            // Adiciona o número convertido no resultado
            resultado += strNum;

            if (i < n) {
                resultado += ","; // vírgula entre os números, exceto no final
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