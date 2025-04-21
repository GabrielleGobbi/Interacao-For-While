function segundoMaiorValor(numeros: number[]): number {
   
    if (numeros[0] === undefined || numeros[1] === undefined) {
        throw new Error("O array deve ter pelo menos dois números.");
    }


    let maior = -Infinity;
    let segundoMaior = -Infinity;

    let i = 0;


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

   
    if (segundoMaior === -Infinity) {
        throw new Error("Não há um segundo maior valor válido.");
    }

    return segundoMaior;
}

console.log(segundoMaiorValor([10, 25, 3, 18])); 
console.log(segundoMaiorValor([50, 100, 99, 80])); 
console.log(segundoMaiorValor([5, 5, 5, 3])); 
