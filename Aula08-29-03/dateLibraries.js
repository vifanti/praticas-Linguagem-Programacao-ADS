"use strict";
/*Usando a biblioteca “moment”, crie um programa que leia uma data do usuário e então converta
para o tipo data e faça operações para:
Validar a entrada para verificar se é data
Exibir a data em diferentes formatos
Exibir informações como ano, mês e dia da semana

https://blog.matheuscastiglioni.com.br/trabalhando-com-datas-em-javascript-com-momentjs/

*/
exports.__esModule = true;
var moment = require("moment");
var process = require("process");
var readline = require("readline");
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question('Entre com a data: ', function (answer) {
    var dataNascimento = moment(answer, "DD/MM/YYYY");
    if (dataNascimento.isValid()) {
        console.log(dataNascimento.format("DD/MM/YYYY"));
    }
    else {
        console.log('Data inválida');
    }
    leitor.close();
});
