function exibirImparesEntreMeN(M: number, N: number): void {
    for (let i = M; i <= N; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}


// Exemplos de uso:
exibirImparesEntreMeN(7, 5);  // Saída: 3, 5, 7, 9

/**Implemente o método exibirImparesEntreMeN, que recebe dois valores numéricos inteiros M e N e exibe apenas os números ímpares no intervalo de M a N.

O método deve iterar de M até N e exibir apenas os números ímpares.
Exemplos:
Para a entrada M = 3 e N = 10, a saída deve ser: 3, 5, 7, 9.
Para a entrada M = 15 e N = 20, a saída deve ser: 15, 17, 19.
Para a entrada M = 1 e N = 5, a saída deve ser: 1, 3, 5.
 */
