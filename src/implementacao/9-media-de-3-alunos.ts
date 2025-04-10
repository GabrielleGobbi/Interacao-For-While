/**function mediaNotas(aluno:number[],aluno1:number[],aluno2:number[]):string {
    let media:number=0;

    for(let i=0;i<aluno.length;i++)
        media+=aluno[i];
    media=media/3;
    if(media>7)
        console.log("O aluno 1 passou ");
    if else (media>=4 &&)
    
    return null;
}
    */

function mediaNotas(notas: number[][]): string {
    let resultado = ""; // Variável que vai armazenar a mensagem final para cada aluno
    let i = 0; // Índice para percorrer os alunos (linhas da matriz)

    // Loop externo para percorrer cada aluno
    while (notas[i] !== undefined) {
        let soma = 0; // Armazena a soma das notas de um aluno
        let j = 0; // Índice para percorrer as notas do aluno
        let quantidadeNotas = 0; // Contador para saber quantas notas o aluno tem

        // Loop interno para percorrer cada nota do aluno atual
        while (notas[i][j] !== undefined) {
            soma += notas[i][j]; // Soma a nota atual
            quantidadeNotas++; // Conta mais uma nota
            j++; // Avança para a próxima nota
        }

        // Calcula a média dividindo a soma pela quantidade de notas
        let media = soma / quantidadeNotas;

        // Começa a frase com o número do aluno
        resultado += "Aluno " + (i + 1) + ": ";

        // Verifica a média e adiciona o status correspondente
        if (media >= 7) {
            resultado += "Passou"; // Se a média for 7 ou mais, o aluno passou
        } else if (media > 4) {
            resultado += "Recuperação"; // Se a média for entre 4 e 7, recuperação
        } else {
            resultado += "Reprovado"; // Se a média for 4 ou menos, reprovado
        }

        // Adiciona quebra de linha apenas se houver mais alunos
        if (notas[i + 1] !== undefined) {
            resultado += "\n"; // Quebra de linha para separar alunos
        }

        i++; // Avança para o próximo aluno
    }

    return resultado; // Retorna a string com os resultados de todos os alunos
}




/**Implemente o método calcularMediaAlunos, que recebe as notas de 3 provas de 3 alunos e calcula a média de cada aluno, retornando se o aluno passou, está em recuperação ou foi reprovado.

Passou: nota maior ou igual a 7.
Recuperação: nota maior que 4 e menor que 7.
Reprovado: nota menor ou igual a 4.
Exemplos:
Para a entrada [8, 7, 9], [5, 6, 5], [3, 4, 2], a saída deve ser:
Aluno 1: Passou
Aluno 2: Recuperação
Aluno 3: Reprovado
Para a entrada [9, 8, 7], [6, 5, 4], [2, 3, 2], a saída deve ser:
Aluno 1: Passou
Aluno 2: Recuperação
Aluno 3: Reprovado
Para a entrada [7, 7, 7], [4, 4, 4], [10, 9, 8], a saída deve ser:
Aluno 1: Passou
Aluno 2: Recuperação
Aluno 3: Passou */