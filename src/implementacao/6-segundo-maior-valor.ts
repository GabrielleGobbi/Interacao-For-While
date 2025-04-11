function segundoMaiorValor(numeros: number[]): number {
    // Garante que há pelo menos dois números usando verificação manual
    if (numeros[0] === undefined || numeros[1] === undefined) {
        throw new Error("O array deve ter pelo menos dois números.");
    }

    // Inicializa as variáveis com o menor valor possível
    let maior = -Infinity;
    let segundoMaior = -Infinity;

    let i = 0;

    // Percorre manualmente os elementos do array
    while (numeros[i] !== undefined) {
        let atual = numeros[i];

        if (atual > maior) {
            segundoMaior = maior;
            maior = atual;
        } else if (atual > segundoMaior && atual !== maior) {
            segundoMaior = atual;
        }

        i++;
    }

    // Se ainda for -Infinity, não houve segundo valor diferente
    if (segundoMaior === -Infinity) {
        throw new Error("Não há um segundo maior valor válido.");
    }

    return segundoMaior;
}


//  Testando a função
console.log(segundoMaiorValor([10, 25, 3, 18])); // 18
console.log(segundoMaiorValor([50, 100, 99, 80])); // 99
console.log(segundoMaiorValor([5, 5, 5, 3])); // 3


/**
 * O problema:

Implemente o método segundoMaiorValor, que recebe um array de números e retorna o segundo maior valor digitado.

O método deve identificar o maior valor e o segundo maior valor em uma única iteração.
Exemplos:
Para a entrada [10, 25, 3, 18], a saída deve ser: 18.
Para a entrada [50, 100, 99, 80], a saída deve ser: 99.
Para a entrada [5, 5, 5, 3], a saída deve ser: 3.
 */