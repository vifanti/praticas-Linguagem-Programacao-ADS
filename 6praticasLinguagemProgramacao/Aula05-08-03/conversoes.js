//Conversões de tipos em javascript
//https://tableless.com.br/conversao-de-tipos-em-javascript/


//Conversões String para number
console.log(Number("2016"));       //Passando uma string "2016". Automaticamente é convertida para number
console.log(Number("20.16"));      // 20.16
console.log(Number("-0"));         // -0
console.log(Number("+Infinity"));  // Infinity
console.log(Number("++Infinity")); // NaN
console.log(Number("201 6"));      // NaN
console.log(Number("foo"));        // NaN

console.log(String(Number(2016)))