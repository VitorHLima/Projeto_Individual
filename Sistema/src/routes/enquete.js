var express = require("express");
var router = express.Router();

var enqueteController = require("../controllers/enqueteController");

router.post("/publicar/:idUsuario", function (req, res) {
    enqueteController.publicar(req, res);
});
router.get("/listar/:idUsuario", function (req, res) {
    enqueteController.listarPorUsuario(req, res);
});
router.get("/global", function (req, res) {
    enqueteController.buscarTodasEnquetes(req, res);
});

module.exports = router;