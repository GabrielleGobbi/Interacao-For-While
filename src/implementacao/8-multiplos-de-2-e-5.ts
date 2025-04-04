function analiseMultiplos(numero:number[]) : { multiplosDe2e5: number[], multiplosDe2e3: number[] }  {
    let multiplosDe2e5:number[]=[];
    let multiplosDe2e3:number[]=[];

    for(let i:number=0;i<numero.length ;i++){
        if(numero[i]===-1) break;
        if(numero[i] %2==0 && numero[i]%5==0)
            multiplosDe2e5.push(numero[i]);
        if(numero[i] %3==0 && numero[i]%2==0)
            multiplosDe2e3.push(numero[i]);

    }


    return {multiplosDe2e5 ,multiplosDe2e3} ;
}
// Testes
console.log(analiseMultiplos([10, 15, 30, -1])); 
// Saída esperada: { multiplosDe2e5: [10, 30], multiplosDe2e3: [30] }

console.log(analiseMultiplos([6, 12, 20, 25, -1])); 
// Saída esperada: { multiplosDe2e5: [20], multiplosDe2e3: [6, 12] }

console.log(analiseMultiplos([15, 30, -1])); 
// Saída esperada: { multiplosDe2e5: [30], multiplosDe2e3: [30] }

/**Implemente o método contarMultiplos, que recebe vários números positivos até que o valor -1 seja digitado e, ao final, informa quantos números são múltiplos de 2 e 5, e quantos são múltiplos de 2 e 3.

O método deve iterar sobre os números e contar os múltiplos de cada condição.
Exemplos:
Para a entrada [10, 15, 30, -1], a saída deve ser:
Múltiplos de 2 e 5: 2 (valores: 10, 30)
Múltiplos de 2 e 3: 1 (valor: 30)
Para a entrada [6, 12, 20, 25, -1], a saída deve ser:
Múltiplos de 2 e 5: 1 (valor: 20)
Múltiplos de 2 e 3: 2 (valores: 6, 12)
Para a entrada [15, 30, -1], a saída deve ser:
Múltiplos de 2 e 5: 1 (valor: 30)
Múltiplos de 2 e 3: 1 (valor: 30) */