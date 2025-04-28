function mostrarMaiorValor(arrayN: number[]): number {
    let i = 1;
    let maior = arrayN[0]; 
    
    while (arrayN[i] !== undefined) {
        if (arrayN[i] > maior) {
            maior = arrayN[i]; 
        }
        i++; 
    }

    return maior;
}

 module.exports=mostrarMaiorValor;
console.log(mostrarMaiorValor([4, 19, 5]));      
console.log(mostrarMaiorValor([10, 25, 3, 18])); 
console.log(mostrarMaiorValor([7, 7, 7]));     

