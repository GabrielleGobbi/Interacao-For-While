function mostrarMaiorValor(n: number[]): number {
    let i = 1; // Começamos a comparação a partir do segundo elemento
    let maior = n[0]; // Assume que o primeiro valor é o maior inicialmente

    // Enquanto existir elemento na posição i (sem usar length)
    while (n[i] !== undefined) {
        if (n[i] > maior) {
            maior = n[i]; // Atualiza o maior valor
        }
        i++; // Avança para o próximo índice
    }

    return maior;
}

 module.exports=mostrarMaiorValor;
console.log(mostrarMaiorValor([4, 19, 5]));      // 19
console.log(mostrarMaiorValor([10, 25, 3, 18])); // 25
console.log(mostrarMaiorValor([7, 7, 7]));       // 7

/**Implemente o método maiorValorDigitado, que recebe um array de números e retorna o maior valor digitado.

O método deve iterar sobre os números e identificar o maior valor.
Exemplos:
Para a entrada [10, 25, 3, 18], a saída deve ser: 25.
Para a entrada [1, 100, 45, 60], a saída deve ser: 100.
Para a entrada [7, 7, 7], a saída deve ser: 7.
 */