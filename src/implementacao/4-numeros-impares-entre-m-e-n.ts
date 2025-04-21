function exibirImparesEntreMeN(M: number, N: number): void {
    for (let i = M; i <= N; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}


exibirImparesEntreMeN(7, 5); 


