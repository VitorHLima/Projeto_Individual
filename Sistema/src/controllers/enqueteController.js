
var enqueteModel = require("../models/enqueteModel");


function publicar(req, res) {
    var respostaUser = req.body.respostaServer;
    var idUsuario = req.params.idUsuario;

    if (respostaUser == undefined) {
        res.status(400).send("A respostaUser está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        enqueteModel.publicar(respostaUser, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o cadastro da enquete: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    enqueteModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length >= 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function buscarTodasEnquetes(req, res) {
    enqueteModel.buscarTodasEnquetes().then((resultado) => {
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
    publicar,
    listarPorUsuario,
    buscarTodasEnquetes
}