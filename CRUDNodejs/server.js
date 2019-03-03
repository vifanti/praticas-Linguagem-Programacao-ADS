//Explicações sobre Express e Node https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o
//tutorial em https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-1-3-6c8389d7147d
//Express: É um framework para construção de aplicações web para Node.js. Ele simplifica o processo de criação do servidor que já está disponível no Node.
//Importar o módulo Express
const express = require('express')
//O express não lida com a leitura de dados de elementos como o form. Para isso, adicionamos o pacote body-parser
/*O Express nos permite adicionar middleware como body-parser ao nosso aplicativo com o método use. 
Middleware são basicamente plugins que alteram o objeto request ou response antes de serem manipulados pelo nosso aplicativo.*/
const bodyParser = require('body-parser')
//criar aplicação express, tradicionalmente nomeada 'app'
const app = express()
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const uri = "mongodb://vifanti:Fantinatto1995@crud-nodejs-shard-00-00-1qiou.mongodb.net:27017,crud-nodejs-shard-00-01-1qiou.mongodb.net:27017,crud-nodejs-shard-00-02-1qiou.mongodb.net:27017/test?ssl=true&replicaSet=crud-nodejs-shard-0&authSource=admin&retryWrites=true";

//conecta no banco de dados e inicia o servidor na porta 3000
MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crud-nodejs')

    app.listen(3000, function() {
        console.log('server running on port 3000')
    })
})

//O método urlencoded dentro de body-parser extrai os elementos do form e adiciona à propriedade body no objeto request
app.use(bodyParser.urlencoded({ extended: true}))

//configurar engine view no app express
app.set('view engine', 'ejs')

//o metodo get especifica uma função de retorno de chamada que será invocada sempre que existir uma solicitação HTTP get com um caminho '/' (raiz).
//Em seguida ao caminho, uma função de retorno com parametros de requisição req e um objeto de resposta res. a função chama o metodo send do objeto res 
app.get('/', (req, res) => {
    res.render('index.ejs')
})

//Ao entrar na página 'show', é feita uma busca no banco de dados e armazenado em um array. 
app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })
    })
})

app.post('/show', function (req, res) {
    db.collection('data').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/show')
    })
})

app.route('/edit/:id')
.get((req, res) => {
    var id = req.params.id

    db.collection('data').find(ObjectId(id)).toArray((err, results) => {
        if (err) return res.send(err)
        res.render('edit.ejs', { data: results })
    })
})
.post((req, res) => {
    var id = req.params.id
    var name = req.body.name
    var surname = req.body.surname

    db.collection('data').updateOne({_id: ObjectId(id)}, {
        $set: {
            name: name,
            surname:surname
        }
    }, (err, result) => {
        if (err) return res.send(err)
        res.redirect('/show')
        console.log('Atualizado no Banco de Dados')
    })
})

app.route('/delete/:id')
.get((req, res) => {
    var id = req.params.id

    db.collection('data').deleteOne({_id: ObjectId(id)}, (err, result) => {
        if (err) return res.send(500, err)
        console.log('Deletado do Banco de Dados!')
        res.redirect('/show')
    })
})