function exibirNumerosEntreMeN(M: number, N: number): number[] {
    let resultado: number[] = []; // Array para armazenar os números

    if (M > N) {
        return []; // Retorna um array vazio se M for maior que N
    }

    for (let i = M; i <= N; i++) {
        resultado.push(i); // Adiciona cada número no array
    }

    return resultado; // Retorna o array com os números
}

// Chamando a função e exibindo no console
console.log(exibirNumerosEntreMeN(3,7 ));  // [3, 4, 5, 6, 7]
console.log(exibirNumerosEntreMeN(10, 15)); // [10, 11, 12, 13, 14, 15]
console.log(exibirNumerosEntreMeN(1, 3));   // [1, 2, 3]
console.log(exibirNumerosEntreMeN(8, 5));   // [] (caso M seja maior que N)

/**Implemente o método exibirNumerosEntreMeN, que recebe dois valores numéricos inteiros M e N e exibe todos os números entre M e N, incluindo M e N.

O método deve garantir que M seja menor que N e iterar de M até N.
Exemplos:
Para a entrada M = 3 e N = 7, a saída deve ser: 3, 4, 5, 6, 7.
Para a entrada M = 10 e N = 15, a saída deve ser: 10, 11, 12, 13, 14, 15.
Para a entrada M = 1 e N = 3, a saída deve ser: 1, 2, 3. */