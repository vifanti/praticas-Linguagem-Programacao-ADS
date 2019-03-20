/*Conversão de Salário */

var readline = require('readline');
var Salario;
var Percentual;
var Calculo;
var SalarioAlterado;
var ValorAumento;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe o Salário atual: \n", function(answer) {
     Salario = answer;
     leitor.close();
     if(Salario <= 280)
  {
      Percentual = 1.2;

      Calculo = Salario * Percentual;

      SalarioAlterado = Calculo;

      ValorAumento = SalarioAlterado - Salario;

      console.log("O salario antigo era: " + Salario + "\n" + "O percentual de aumento foi de 20% \n" + "O Valor do aumento foi de: " + ValorAumento + "\n" + "O Valor novo é: " + SalarioAlterado);

  }
     else if(Salario <= 700)
  {
      Percentual = 1.15;

      Calculo = Salario * Percentual;

      SalarioAlterado = Calculo;

      ValorAumento = SalarioAlterado - Salario;

      console.log("O salario antigo era: " + Salario + "\n" + "O percentual de aumento foi de 15% \n" + "O Valor do aumento foi de: " + ValorAumento + "\n" + "O Valor novo é: " + SalarioAlterado);
  }
     else if(Salario <= 1500)
  {
      Percentual = 1.1;

      Calculo = Salario * Percentual;

      SalarioAlterado = Calculo;

      ValorAumento = SalarioAlterado - Salario;

      console.log("O salario antigo era: " + Salario + "\n" + "O percentual de aumento foi de 10% \n" + "O Valor do aumento foi de: " + ValorAumento + "\n" + "O Valor novo é: " + SalarioAlterado);
  } 
   else
  {
      Percentual = 1.05;

      Calculo = Salario * Percentual;

      SalarioAlterado = Calculo;

      ValorAumento = SalarioAlterado - Salario;

      console.log("O salario antigo era: " + Salario + "\n" + "O percentual de aumento foi de 5% \n" + "O Valor do aumento foi de: " + ValorAumento + "\n" + "O Valor novo é: " + SalarioAlterado);
  }
});