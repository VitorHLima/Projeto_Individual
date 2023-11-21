var database = require("../database/config");//Aqui ele está pegando o banco de dados

function buscarTodosOsPontos() {//Função para fazer o select no banco de dados

    instrucaoSql = `select Historias.titulo, Historias.descricao from Historias`;//Fazendo o select

    console.log("Executando a instrução SQL: \n" + instrucaoSql);//Mostrando no console log o select
    return database.executar(instrucaoSql); //Está retornando a variavel datavase com a função nativa executar a instrução
}

module.exports = {//Exposrtando a função para outras paginas ter acesso
    buscarTodosOsPontos
}