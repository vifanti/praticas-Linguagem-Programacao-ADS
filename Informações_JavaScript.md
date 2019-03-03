#Javascript lado cliente (navegador)

#Organizando responsabilidades

conteúdo (HTML),
apresentação (CSS)
comportamento (JavaScript).

Aonde colocar o Javascript ?
O ideal é escrevermos o código JavaScript em um arquivo texto com extensão .js e incluí-lo no arquivo HTML dessa forma:
<script type="text/javascript" src="codigo.js"></script>

Dependendo de onde o script for posicionado no código, o navegador pode executar parte do HTML, depois o scritp e o restante do HTML
Se a função depender de algumas tags HTML, o ideal é posicionar o script no final da página.

#Sintaxe

As variáveis são declaradas com a palavra chave 'var'
exemplos:
var i;
var i, i2;
var i = 0, j = 2;

#tipos

Qualquer valor em JavaScript que não seja número, string, booleano, null ou undefined é um objeto.

Os valores booleanos são representados por true e false.

Variáveis não são tipadas, podendo receber tipos diferentes de valor a qualquer momento

#Array
Uma forma mais conveniente de utilização de um array, na verdade a mais usada:
var a = ["dog", "cat", "hen"];
a.length // 3

Podemos criar um objeto com propriedades e métodos:

<script>
var obj = {
    name: "Carrot",
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}
</script>

E acessar as propriedades dessa forma:
obj.details.color      // orange
obj["details"]["size"] // 12

Funções também se comportam como objetos, veja o exemplo abaixo.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var obj = new Person("You", 36);

obj.name = "Simon";
obj.name; // print 'Simon'