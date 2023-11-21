var database = require("../database/config");


function publicar(respostaUser, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ");
    var instrucao = `
        INSERT INTO enquete(opcaoEscolhida,fkUsuario) VALUES ('${respostaUser}',${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    SELECT * from Enquete JOIN Usuario ON fkUsuario = ${idUsuario}; 
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarTodasEnquetes() {//Função para fazer o select no banco de dados

    instrucaoSql = `SELECT opcaoEscolhida, COUNT(opcaoEscolhida) FROM enquete
    GROUP BY opcaoEscolhida;`;//Fazendo o select

    console.log("Executando a instrução SQL: \n" + instrucaoSql);//Mostrando no console log o select
    return database.executar(instrucaoSql); //Está retornando a variavel datavase com a função nativa executar a instrução
}

module.exports = {
    publicar,
    listarPorUsuario,
    buscarTodasEnquetes
}