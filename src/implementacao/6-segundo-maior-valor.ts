function segundoMaiorValor(numeros: number[]): number {
    // Garantimos que há pelo menos dois números no array
    if (numeros.length < 2) {//numeros.length é para contar o tamanho total do array 
        throw new Error("O array deve ter pelo menos dois números."); // esse comando é pra não ter que colocar na saida que poderia ter um retorno de string tbm
    }

    // Inicializamos as variáveis com o menor valor possível
    let maior = -Infinity;//recebe o menor valor possivel
    let segundoMaior = -Infinity;

    // Percorremos o array usando um loop for tradicional
    for (let i = 0; i < numeros.length; i++) {
        // Se o número atual for maior que 'maior'
        if (numeros[i] > maior) {
            segundoMaior = maior; // O 'maior' antigo agora vira o 'segundoMaior'
            maior = numeros[i]; // Atualizamos 'maior' com o novo maior número
        } 
        // Se o número atual for menor que 'maior', mas maior que 'segundoMaior'
        else if (numeros[i] > segundoMaior && numeros[i] !== maior) {
            segundoMaior = numeros[i]; // Atualizamos apenas o 'segundoMaior'
        }
    }

    // Se 'segundoMaior' ainda for -Infinity, significa que não há segundo maior número válido
    if (segundoMaior === -Infinity) {
        throw new Error("Não há um segundo maior valor válido.");
    }

    return segundoMaior; // Retornamos o segundo maior número encontrado
}

// 🔥 Testando a função
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