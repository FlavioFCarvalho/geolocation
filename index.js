const restify = require("restify")

const server = restify.createServer({
    name: "myapp",
   
    version:"1.0.0",
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());