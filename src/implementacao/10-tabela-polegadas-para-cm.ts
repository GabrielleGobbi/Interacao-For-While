function tabelaConversao(): string {
    let resultado = "";
    let i = 1;

    while (i <= 20) {
        // Multiplica polegadas por 2.54 para obter o valor em cm
        let centimetros = i * 2.54;

        // Adiciona a linha formatada ao resultado
        resultado += i + " pol = " + centimetros + " cm";

        // Adiciona quebra de linha, menos na última linha
        if (i < 20) {
            resultado += "\n";
        }

        i++;
    }

    return resultado;
}

module.exports =tabelaConversao;


/**
 * Implemente o método tabelaPolegadasParaCm, que gera uma tabela de conversão de polegadas para centímetros de 1 a 20. Considere que 1 polegada é igual a 2.54 centímetros.

O método deve gerar e exibir uma tabela de conversão.
Exemplos:
A tabela gerada para polegadas de 1 a 3 seria:
1 pol = 2.54 cm
2 pol = 5.08 cm
3 pol = 7.62 cm
A tabela gerada para polegadas de 1 a 5 seria:
1 pol = 2.54 cm
2 pol = 5.08 cm
3 pol = 7.62 cm
4 pol = 10.16 cm
5 pol = 12.7 cm
 */