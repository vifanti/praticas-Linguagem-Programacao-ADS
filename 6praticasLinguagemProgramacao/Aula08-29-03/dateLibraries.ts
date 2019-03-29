/*Usando a biblioteca “moment”, crie um programa que leia uma data do usuário e então converta 
para o tipo data e faça operações para:
Validar a entrada para verificar se é data
Exibir a data em diferentes formatos
Exibir informações como ano, mês e dia da semana

https://blog.matheuscastiglioni.com.br/trabalhando-com-datas-em-javascript-com-momentjs/

*/

import moment = require('moment');
import process = require('process');

var stdin = process.openStdin();

stdin.addListener("data", function(entrada) {
    
    let dataNascimento = moment( entrada.toString().trim(), "DD/MM/YYYY" );
    
    if (dataNascimento.isValid()) {
        console.log(dataNascimento.format("DD/MM/YYYY"));
    }
    else{ console.log('Data inválida') }
    
});