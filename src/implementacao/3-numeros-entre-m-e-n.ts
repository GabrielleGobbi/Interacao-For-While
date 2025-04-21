function exibirNumerosEntreMeN(M: number, N: number): number[] {
    let resultado: number[] = []; 

    if (M > N) {
        return []; 
    }

    for (let i = M; i <= N; i++) {
        resultado.push(i); 
    }

    return resultado; 
}

console.log(exibirNumerosEntreMeN(3,7 )); 
console.log(exibirNumerosEntreMeN(10, 15)); 
console.log(exibirNumerosEntreMeN(1, 3));   
console.log(exibirNumerosEntreMeN(8, 5));   

