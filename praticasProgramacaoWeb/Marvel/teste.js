

$(document).ready(function () {
    var marvelAPI = 'http://gateway.marvel.com/v1/public/characters';
    var ts = new Date().getTime();
    var PRIV_KEY = '2183109a47a13c37e86934ab9867e747b729a115';
    var PUBLIC_KEY = '8ca0518c7fafefd3f0dc5eee818d10e1';
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    
    $.getJSON( marvelAPI, {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash: hash
    })
    .done(function( response ) {
        var results = response.data.results;
        var resultsLen = results.length;
        for(var i=0; i<resultsLen; i++){
            if(results[i].name.length > 0) {
                var name = results[i].name;
                var output = '<option value = "' + results[i].id + '">' + name + '</option>';
                $('#resultado').append(output);
            }
            
        }   
    });
});