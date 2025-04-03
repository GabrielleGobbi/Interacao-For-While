import * as readline from "readline"; // Importa o módulo readline para capturar entrada do usuário no terminal

// Criando interface para entrada e saída de dados (input/output)
const rl = readline.createInterface({
    input: process.stdin,  // Define a entrada como o terminal (teclado)
    output: process.stdout // Define a saída como o terminal (console)
});

// Função principal para solicitar números e calcular a soma entre eles
function somarNumerosEntreMeN(): void {
    // Primeira pergunta: usuário insere o valor de M
    rl.question("Digite o valor de M: ", (mInput) => {  // O => encurta o código
        
        // Segunda pergunta: usuário insere o valor de N
        rl.question("Digite o valor de N: ", (nInput) => { 

            let m = Number(mInput); // Converte a entrada M para número
            let n = Number(nInput); // Converte a entrada N para número

            // Verifica se os valores digitados são números válidos
            if (isNaN(m) || isNaN(n)) {
                console.log("Por favor, insira números válidos.");
                return somarNumerosEntreMeN(); // Se for inválido, chama a função novamente
            }

            // Se M for maior que N, encerra o programa
            if (m > n) {
                console.log("Encerrando...");
                rl.close(); // Fecha o readline para liberar o terminal
                return; // Sai da função
            }

            // Calcula a soma dos números no intervalo de M a N (incluindo ambos)
            let soma = 0;
            for (let i = m; i <= n; i++) {
                soma += i;
            }

            // Exibe o resultado no console
            console.log(`A soma de ${m} até ${n} é: ${soma}`);

            // Chama novamente a função para continuar pedindo novos valores
            somarNumerosEntreMeN();
        });
    });
}

module.exports = somarNumerosEntreMeN;
// Inicia o processo chamando a função principal
somarNumerosEntreMeN();


/**O problema:
Implemente o método somaDeIntervalos, que recebe dois números M e N e retorna a soma de todos os números entre eles, inclusive M e N.
O método deve continuar pedindo pares até que o valor de M seja maior que N.
Exemplos:
Para a entrada M = 1 e N = 5, a saída deve ser: 15 (pois 1 + 2 + 3 + 4 + 5 = 15).
Para a entrada M = 10 e N = 15, a saída deve ser: 75 (pois 10 + 11 + 12 + 13 + 14 + 15 = 75).
Para a entrada M = 3 e N = 6, a saída deve ser: 18 (pois 3+4+5+6=18). */