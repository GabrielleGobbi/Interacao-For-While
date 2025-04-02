function mostrarMaiorValor(n:number[]):number {
    let numero=n[0]; // a variavel numero do tipo number recebe o valor que esta na posição 0 do array
    let m:number=n.length;//tamanho array
    for(let i:number=1;i<m;i++){
            if(numero<n[i])// é n[i] , pois a variavel i é que faz percorrer o array <3 para percorrer não se deve usar uma constante fixa <3
                numero=n[i];

    }
       
    return numero;
}

console.log(mostrarMaiorValor([4,19,5]));



/**Implemente o método maiorValorDigitado, que recebe um array de números e retorna o maior valor digitado.

O método deve iterar sobre os números e identificar o maior valor.
Exemplos:
Para a entrada [10, 25, 3, 18], a saída deve ser: 25.
Para a entrada [1, 100, 45, 60], a saída deve ser: 100.
Para a entrada [7, 7, 7], a saída deve ser: 7.
 */