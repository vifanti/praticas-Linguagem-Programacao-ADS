/*A conversão de graus Celsius para Farenheit pode ser obtida por: TF = 1.8 * TC + 32. Fazer um programa
 que leia um valor qualquer em graus Celsius e calcule e escreva o valor convertido em graus Farenheit. 
 Apresente as mensagens adequadas de entrada e saída. 

Observação: Para testar se a sua resposta está correta saiba que 100 Celsius=212 Farenheit*/

var readline = require('readline');
var celsius;
var farenheit;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe a temperatura em Graus Celsius?\n", function(answer) {
    celsius = answer;
    leitor.close();
    farenheit = 1.8 * celsius + 32;
    console.log(farenheit);
});

