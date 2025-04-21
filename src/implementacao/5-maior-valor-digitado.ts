function mostrarMaiorValor(n: number[]): number {
    let i = 1;
    let maior = n[0]; 
    
    while (n[i] !== undefined) {
        if (n[i] > maior) {
            maior = n[i]; 
        }
        i++; 
    }

    return maior;
}

 module.exports=mostrarMaiorValor;
console.log(mostrarMaiorValor([4, 19, 5]));      
console.log(mostrarMaiorValor([10, 25, 3, 18])); 
console.log(mostrarMaiorValor([7, 7, 7]));     

