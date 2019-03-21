var minhaLista = document.getElementsByTagName("ul")[0];

for (var i = 0; i < minhaLista.children.length; i++) {
    var element = minhaLista.children[i];
    if (element.innerText.length <= 10) {
        element.style["color"] = "blue";
    }
    else if (element.innerText.length <= 20) {
        element.style["color"] = "green";
    }
    else {
        element.style["color"] = "red";
    }
}