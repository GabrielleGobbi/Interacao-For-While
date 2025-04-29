function tabelaConversao(): String {
    let result : string [] = [] ;

    for(let i=1;i<=20;i++){
        result.push(`${i} pol = ${(i*2.54)} cm`)
    }

    return result.join("\n");
}

console.log(tabelaConversao());
