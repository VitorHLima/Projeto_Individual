var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/publicar/:idUsuario", function (req, res) {
    quizController.publicar(req, res);
});
router.get("/listar/:idUsuario", function (req, res) {
    quizController.listarPorUsuario(req, res);
});

module.exports = router;