import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somarNumerosEntreMeN(): void {
    rl.question("Digite o valor de M: ", (numberMInput) => {
        rl.question("Digite o valor de N: ", (numberNInput) => {
            const numberM = Number(numberMInput);
            const numberN = Number(numberNInput);

            if (isNaN(numberM) || isNaN(numberN)) {
                console.log("Por favor, insira números válidos.");
                return somarNumerosEntreMeN(); 
            }

            if (numberM > numberN) {
                console.log("M deve ser menor ou igual a N. Tente novamente.");
                return somarNumerosEntreMeN();
            }

            // Só calcula se M <= N
            let soma = 0;
            for (let i = numberM; i <= numberN; i++) {
                soma += i;
            }

            console.log(`A soma do intervalo de ${numberM} até ${numberN} é: ${soma}`);
            rl.close();
        });
    });
}

somarNumerosEntreMeN();
