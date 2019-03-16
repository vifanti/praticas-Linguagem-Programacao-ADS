function herois(cep) {

    fetch('https://viacep.com.br/ws/'+cep+'/json/', {
        method: 'get'
    })
    .then(response => response.json())
    .then(jsonData => {
        document.getElementById("campo_rua").value = jsonData.logradouro;
        document.getElementById("campo_bairro").value = jsonData.bairro;
        document.getElementById("campo_cidade").value = jsonData.localidade;
        document.getElementById("campo_estado").value = jsonData.uf;



    })
    .catch(err => {
            //error block
    })

    
}