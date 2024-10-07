var express = require("express");
var router = express.Router();

// Importando as rotas específicas das peças
var assistematicoRouter = require("./assistematico");
var contagioMentiraRouter = require("./contagiomentira");
var _2_2_5Router = require("./dois");
var atencaoRouter = require("./atencao");
var coraliceRouter = require("./coralice");
var ultimaParadaRouter = require("./ultimaparada");
var megeraIndomRouter = require("./megeraindomavel");
var sombraEuRouter = require("./sombraeu");
var forcaOperRouter = require("./forcaoperaria");
var assumPretoRouter = require("./assumpreto");
var sobrevMigRouter = require("./sobrevMigalhas");
var curraisSecaRouter = require("./curraisdaseca");
var quemsaoElesRouter = require("./quemsaoeles");

// Definindo as rotas específicas
router.use("/assistematico", assistematicoRouter);
router.use("/ocontagiodamentira", contagioMentiraRouter);
router.use("/doismaisdois", _2_2_5Router);
router.use("/a-tencao", atencaoRouter);
router.use("/coralice", coraliceRouter);
router.use("/aultimaparada", ultimaParadaRouter);
router.use("/megeraindomavel", megeraIndomRouter);
router.use("/asombraeeu", sombraEuRouter);
router.use("/aforcaoperaria", forcaOperRouter);
router.use("/assumpreto", assumPretoRouter);
router.use("/sobrevivendodemigalhas", sobrevMigRouter);
router.use("/curraisdaseca", curraisSecaRouter);
router.use("/quemsaoeles", quemsaoElesRouter);

module.exports = router;