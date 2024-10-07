var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Currais da Seca",
    sinopse: 'ﾠﾠA peça "Currais da Seca" trata sobre as dificuldades de uma família em sair de uma área seca do sertão do Ceará rumo a abrigos e melhores oportunidades de sobrevivência. Chico Bento e sua esposa, Cordulina, vão juntos de seus filhos para um curral trabalhar e receber alimento. A jornada explora abusos sofridos pelos residentes e as dificuldades geradas pela seca em áreas rurais do estado do Ceará.',
    turma: "P2 de Eletrotécnica",
    direcaoTurma: " João Guilherme e Luigi Ordonho",
    direcaoGeral: "Anabel Lessa",
    premios: "12º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=un4ju4qZnnE",
    imagemPeca: "/images/pecas2022/curraisseca.jpg",
    linkFotos: "https://photos.app.goo.gl/tPtM8xhDAhgANVzYA",

    elenco: [
      { nome: "Chico Bento", ator: "Gabriel Nogueira" },
      { nome: "Cordulina", ator: "Caio Lucas" },
      { nome: "Filho 1", ator: "Miguel Adrício" },
      { nome: "Militar 1", ator: "Marco Antônio" },
      { nome: "Militar 2", ator: "João Emanuel" },
      { nome: "Zé Lourenço", ator: "Juan Ricardo" },
      { nome: "Filho 2", ator: "Joseph Asafe" },
      { nome: "Militar 3", ator: "João Lucas" },
      { nome: "Conceição", ator: "Paulo Christian" },
      { nome: "Militar 4", ator: "Luiz Felipe" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
