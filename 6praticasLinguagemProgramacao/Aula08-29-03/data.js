var moment = require('moment');
moment.locale('pt-BR');
// FORMATO DE DATAS
console.log("FORMATO DE DATAS");
console.log(" "+moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(" "+moment().format('dddd'));
console.log(" "+moment().format("MMM Do YY"));
console.log(" "+moment().format('YYYY'));
console.log(" "+moment().format());
// TEMPO DO CALENDARIO
console.log("TEMPO DE CALENDARIO");
console.log(" "+moment().subtract(10, 'days').calendar());
console.log(" "+moment().subtract(6, 'days').calendar());
console.log(" "+moment().subtract(3, 'days').calendar());
console.log(" "+moment().subtract(1, 'days').calendar());
console.log(" "+moment().calendar());
console.log(" "+moment().add(1, 'days').calendar());
console.log(" "+moment().add(3, 'days').calendar());
console.log(" "+moment().add(10, 'days').calendar());
// SUPORTE A VARIOS LOCAIS
console.log("SUPORTE A VARIOS LOCAIS");
console.log(" "+moment.locale());
console.log(" "+moment().format('LT'));
console.log(" "+moment().format('LTS'));
console.log(" "+moment().format('L'));
console.log(" "+moment().format('l'));
console.log(" "+moment().format('LL'));
console.log(" "+moment().format('ll'));
console.log(" "+moment().format('LLL'));
console.log(" "+moment().format('lll'));
console.log(" "+moment().format('LLLL'));
console.log(" "+moment().format('llll'));