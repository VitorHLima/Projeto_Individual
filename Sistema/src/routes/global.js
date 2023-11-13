var express = require("express");//Criando variaveis com as bibliotecas
var router = express.Router();//Criando variaveis com as bibliotecas

var globalController = require("../controllers/globalController");//Criando a variavel pegando o controler da paginaController

router.get("/buscar", function (req, res) {//Pegando a requisição /buscar da pagina de sistema, como parametro a requisição e resposta
    globalController.buscarTodasHistorias(req, res);//Pegando a varivel globalController com a função que foi exportada no modal
});

module.exports = router;//Exportando a rota