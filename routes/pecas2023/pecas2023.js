var express = require("express");
var router = express.Router();

// Importando as rotas específicas das peças
var avioesdepapelRouter = require("./avioesdepapel");
var amortesalvaRouter = require("./amortesalva");
var sinaRouter = require("./sina");
var raizIgnoRouter = require("./raizesdaignorancia");
var lindasRouter = require("./lindasdemorrer");
var morteVaqueiroRouter = require("./amortedovaqueiro");
var entrevindasRouter = require("./entrevindas");
var alemdaCriacaoRouter = require("./alemdacriacao");
var imperfeitosRouter = require(".//imperfeitos");
var pintarNarizRouter = require("./deixaeupintaromeunariz");
var diarioRouter = require("./odiario");
var prisioEternRouter = require("./oprisioneirodaeternidade");

// Definindo as rotas específicas
router.use("/avioesdepapel", avioesdepapelRouter);
router.use("/amortesalva", amortesalvaRouter);
router.use("/sina", sinaRouter);
router.use("/raizesdaignorancia", raizIgnoRouter);
router.use("/lindasdemorrer", lindasRouter);
router.use("/amortedovaqueiro", morteVaqueiroRouter);
router.use("/entrevindas", entrevindasRouter);
router.use("/alemdacriacao", alemdaCriacaoRouter);
router.use("/imperfeitos", imperfeitosRouter);
router.use("/deixaeupintaromeunariz", pintarNarizRouter);
router.use("/odiario", diarioRouter);
router.use("/oprisioneirodaeternidade", prisioEternRouter);

module.exports = router;