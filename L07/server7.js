"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_Hexenkessel = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    let rezepte;
    let port = process.env.PORT;
    if (port == undefined) {
        port = 5001;
    }
    let databaseUrl = "mongodb+srv://FionaVirnich:FionaVirnich@eia2.l1pl8.mongodb.net/<dbname>?retryWrites=true&w=majority";
    //"mongodb://localhost:27017"
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("server");
        console.log("Server starting on port " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        rezepte = mongoClient.db("Hexenkessel7").collection("Rezepte");
        console.log("Database connection", rezepte != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("request kam rein");
        _response.setHeader("content-type", "text/html; chartset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeRezept(url.query);
        }
        _response.write("This is my response");
        _response.end();
    }
    function storeRezept(_rezept) {
        rezepte.insert(_rezept);
    }
})(L07_Hexenkessel = exports.L07_Hexenkessel || (exports.L07_Hexenkessel = {}));
//# sourceMappingURL=server7.js.map