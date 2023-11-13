var globalModel = require("../models/globalModel");

function buscarTodasHistorias(req, res) {
    globalModel.buscarTodasHistorias().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as historias: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarTodasHistorias
}
