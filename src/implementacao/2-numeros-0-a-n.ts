 function mostrarNumerosAteN(varNumberN:number) : void {

    if (varNumberN>=0) {

        for(let i=0;i<=varNumberN;i++)
            console.log(i);
    } else {
     
    console.log ("operação invalida"); 
    }
}

module.exports = mostrarNumerosAteN;
console.log(mostrarNumerosAteN(5));
mostrarNumerosAteN(5);
console.log(mostrarNumerosAteN(10));
