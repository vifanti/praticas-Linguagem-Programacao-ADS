// EXEMPLOS DE GARBAGE COLLECTION

var o = { 
    a: {
      b:2
    }
  }; 
  // 2 objetos são criados. Um é referenciado pelo outro como uma de suas propriedades. 
  // O outro é referenciado pelo fato de ser atribuído à variável 'o'.
  // Obviamente, nenhum pode ser coletado pelo garbage collector
  
  
  var o2 = o; // a varável 'o2' é a segunda coisa que tem 
              // uma referência ao objeto
  o = 1;      // agora, o objeto que estava originalmente no 'o'
              // tem uma referência única
              // encorporada pela variável 'o2'
  
  var oa = o2.a; // Referência para a propriedade 'a' do objeto.
                 // Este objeto agora tem 2 referências: uma como uma propriedade, 
                 // a outra como a variável 'oa'
  
  o2 = "yo"; // O objeto que estava originalmente em 'o' agora não tem
             // nenhuma referência para ele. 
             // Ele poderia ser coletado pelo garbage collector.
             // Entretanto o que era sua propriedade 'a' continua sendo referenciada
             // pela variável 'oa', então ele não pode ser coletado.
  
  oa = null; // O que era a propriedade 'a' do objeto original em 'o'
             // não tem mais refêrencia para ele. Então pode ser coletado.

// LIMITADO POR CICLOS

// Function f () {
    var o = {};
    var o2 = {};
    o.a = o2; // o referencia o2
    o2.a = o; // o2 referencia o
  
    return "azerty";
  //}
  
  f();
  // Dois objetos são criados e referenciam um ao outro criando assim um ciclo.
  // Eles não vão sair do escopo da função depois dela ser chamada, então eles
  // são efetivamente inúteis e podem ser liberados.
  // Entretanto, o algoritmo contador de referências considera que desde que ambos
  // os objetos sejam referenciados pelo menos uma vez,
  // nenhum deles podem ser coletados.