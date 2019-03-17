/*Para sua linguagem, desenvolva uma função fatorial que recebe um número e retorna um array
contendo cada passo os valores fatorial do número até 0. Obtenha o valor via Input e chame
essa função. Imprima o resultado no final. Exemplo:
5 => [120, 24, 6, 2, 1, 1]*/
var fatorial = (function (numero) {
    var resultado = [];
    var repeticao;
    var i = 0;
    while (i <= numero) {
        resultado[i] = 1;
        repeticao = numero - i;
        while (repeticao >= 1) {
            resultado[i] = resultado[i] * repeticao;
            repeticao--;
        }
        i++;
    }
    return resultado;
});
console.log(fatorial(5));
