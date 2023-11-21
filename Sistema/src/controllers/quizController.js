var quizModel = require("../models/quizModel");

function publicar(req, res) {
    var qtdPontos = req.body.contador;
    var idUsuario = req.params.idUsuario;

    if (qtdPontos == undefined) {
        res.status(400).send("A quantidade de pontos está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        quizModel.publicar(qtdPontos, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.listarPorUsuario(idUsuario)
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

module.exports = {
    publicar,
    listarPorUsuario
}