Repositório de trabalhos referente a linguagem JavaScript do grupo Augusto, Giuseppe, Vinicius e Willian

Gramática léxica e palavras reservadas
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar

##Aula 04

Principais versões do Javascript e Typescript
https://www.w3schools.com/js/js_versions.asp

Para cada versão, listar conjunto de ferramentas de desenvolvimento.

Versão 6: ECMAScript 2016
PRINCIPAIS MUDANÇAS
    Added exponential operator (**).
    Added Array.prototype.includes.

PRINCIPAIS FERRAMENTAS
    D3, Drop, React, EaselJS, Marionette, Spacebase  


*Versão 7: ECMAScript 2017
PRINCIPAIS MUDANÇAS
    Added string padding.
    Added new Object properties.
    Added Async functions.
    Added Shared Memory.

PRINCIPAIS FERRAMENTAS
    Bootstrap, Asp.Net, Powershell, Git e Postman.


*Versão 8: ECMAScript 2018
PRINCIPAIS MUDANÇAS    
    Added rest / spread properties.
    Added Asynchronous iteration.
    Added Promise.finally().
    Additions to RegExp.

PRINCIPAIS FERRAMENTAS
    Node, Json, Ajax, Angular, Backbone e Jquery

Identificar diferenças entre as principais versões da linguagem Javascript e Typescript
https://imasters.com.br/desenvolvimento/es2018-finalmente-saiu-o-que-tem-de-bom

Descubra a estrutura mínima necessária para escrever o código de um programa para NodeJS
https://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/

Escreva um programa Hello World Javascript e outro Typescriot usando uma ferramenta de desenvolvimento
https://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/

##Aula 05 08/05/2019

TypeScript suporta todos os tipos básicos de dados que o JavaScript, assim como um adicional para enumeração
TypeScript também suporta tipagem da variável, forçando que ela aceite apenas o especificado, para isso seguimos a seguinte regra:

var nomeDaVariavel: tipo = valor;

tipos primitivos simples:
    String - valores do tipo texto
    Number - qualquer número (ponto flutuante também)
    Boolean - true/false

tipos primitivos compostos:
    Array - uma coleção de valores.
        var persons: string[] = ['Erik', 'Fernanda'];
        var persons: Array<string> = ['Erik', 'Fernanda'];

    Se você for usar vários tipos de valores dentro do array vai poder usar o tipo any, vou falar dele a logo mais.
        var persons: any[] = ['Erik', 30, true];

    Enum - o tipo enum (enumeração) é ideal para trabalhar com listas
        enum Color {Red, Green, Blue};
        var c: Color = Color.Green;

        console.log(c);

    Any - tipo que aceita qualquer coisa
    Void - nenhum tipo de dados


Link para playground typescript
https://bit.ly/2EGIf3h


    Práticas

1. Para sua linguagem, pesquise outras conversões de tipos e escreva um programa com exemplos.

https://bit.ly/2HhE2qu

2. Para sua linguagem, experimente os exemplos de coleções apresentados e explore outros exemplos.

https://bit.ly/2T3OOCa

3. Está com o Augusto



4. Atualização de Salário

https://goo.gl/2EGUq6

