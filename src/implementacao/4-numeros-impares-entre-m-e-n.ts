function exibirImparesEntreMeN(numberM: number, numberN: number): void {
    for (let i = numberM; i <= numberN; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}


exibirImparesEntreMeN(7, 5); 


