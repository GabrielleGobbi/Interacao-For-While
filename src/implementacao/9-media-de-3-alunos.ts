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
    let resultado: string = "";

    for (let i = 0; i < notas.length; i++) {
        let soma = 0;

        for (let j = 0; j < notas[i].length; j++) {
            soma += notas[i][j];
        }

        let media = soma / notas[i].length;

        resultado += `Aluno ${i + 1}: `;

        if (media >= 7) {
            resultado += "Passou";
        } else if (media > 4) {
            resultado += "Recuperação";
        } else {
            resultado += "Reprovado";
        }

        // Só adiciona a quebra de linha se **não for o último aluno**
        if (i < notas.length - 1) {
            resultado += "\n";
        }
    }

    return resultado;
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