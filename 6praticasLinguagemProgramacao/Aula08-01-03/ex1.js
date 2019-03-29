var moment = require('moment');
    moment.locale('pt-BR');
var readline = require('readline');
var data;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe a Data: (DDMMYYYY)\n", function(answer) {
    data = answer;
    leitor.close();
    let myDate = moment(data, "DDMMYYYY");
    console.log("O ano é: "+myDate.format('YYYY'));
    console.log("D dia da semana é: "+ myDate.format('dddd'));
    console.log("Data por extenço: "+ myDate.format('MMMM Do YYYY'));
    console.log("Extenco compactado: "+ myDate.format('MMM Do YY'));
    console.log("A data é: "+ myDate.format('DD/MM/YYYY'));
});