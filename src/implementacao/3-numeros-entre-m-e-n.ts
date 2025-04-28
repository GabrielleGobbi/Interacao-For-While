function exibirNumerosEntreMeN(numberM: number, numberN: number): number[] {
    let result: number[] = []; 

    if (numberM > numberN) {
        return []; 
    }

    for (let i = numberM; i <= numberN; i++) {
        result.push(i); 
    }

    return result; 
}

console.log(exibirNumerosEntreMeN(3,7 )); 
console.log(exibirNumerosEntreMeN(10, 15)); 
console.log(exibirNumerosEntreMeN(1, 3));   
console.log(exibirNumerosEntreMeN(8, 5));   

