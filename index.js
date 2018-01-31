const restify = require("restify")

const knex = require('knex')({

    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'maps' 

    }
});

const server = restify.createServer({
    name: "myapp",
   
    version:"1.0.0",
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get("/all", function(req, res, next){

    //Buscando todos os dados da tabela places
    knex('places').then((dados) =>{
        res.send(dados);
    }, next)

    return next();

});

server.listen(8080, function(){

    console.log("%s listening at %s", server.name, server.url)
});