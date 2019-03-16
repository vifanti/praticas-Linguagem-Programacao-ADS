

function CalculoIMC(peso,altura,imc,resultado) {
do{
    peso = prompt("Digite o valor de peso ")
    altura = prompt("Digite o valor de altura")

    if(peso != '' && altura != '')
    {
imc = peso/(altura*altura) ;

alert ("seu IMC é: " + imc) 
if (imc< 17	)  {
    resultado = "Muito abaixo do peso"
    alert(resultado)
    }else if (imc < 18,49)
    {
    resultado = "Abaixo do peso"
    alert(resultado)
    }
else if (imc<24,99){
resultado = "	Peso normal"
alert(resultado)
    }
else if (imc< 29,99){
    resultado = "Acima do peso"
    alert(resultado)
    }
else if (imc<34,99){

    resultado="Obesidade I"
    alert(resultado)
    }
else if (imc<39,99){
resultado= 	"Obesidade II (severa)"
alert(resultado)
    }
else{
    resultado="Obesidade III (mórbida)"
    alert(resultado)
    }
}	else{
    alert("Digite um valor para Peso e Altura");
}
    
} while (confirm("Calcular novo IMC?"))
}

CalculoIMC();