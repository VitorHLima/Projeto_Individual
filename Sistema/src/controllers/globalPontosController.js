var globalPontosModel = require("../models/globalPontosModel");

function buscarTodosOsPontos(req, res) {
    globalPontosModel.buscarTodosOsPontos().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os pontos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarTodosOsPontos
}
