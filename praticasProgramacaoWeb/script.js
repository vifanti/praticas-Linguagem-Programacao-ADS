function adicionarItem() {
    var campoItem = document.getElementById("item");
    var campoUnidade = document.getElementById("unidade");
    var campoQuantidade = document.getElementById("quantidade");
    var listadeCompras = document.getElementById("lista_de_compras");

    var item = campoItem.value;
    var unidade = campoUnidade.value;
    var quantidade = campoQuantidade.value;

    var item1 = document.createElement("li");
    item1.innerText = item;

    var item2 = document.createElement("li");
    item2.innerText = unidade;

    var item3 = document.createElement("li");
    item3.innerText = quantidade;

    listadeCompras.appendChild(item1);
    listadeCompras.appendChild(item2);
    listadeCompras.appendChild(item3);
}