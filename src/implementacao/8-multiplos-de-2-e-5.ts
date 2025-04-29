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
console.log(analiseMultiplos([10, 15, 30, -1])); 
console.log(analiseMultiplos([6, 12, 20, 25, -1])); 
console.log(analiseMultiplos([15, 30, -1])); 
