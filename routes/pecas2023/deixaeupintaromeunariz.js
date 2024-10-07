var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Deixa Eu Pintar o Meu Nariz",
    sinopse: 'ﾠﾠEm um tempo muito distante, numa pequena cidade com regras extremamente conservadoras, o riso é proibido e ser palhaço é um crime, além de ser um pecado mortal. Veremos então a história de Pierre, um jovem que nasceu diferente dos demais e enfrenta o dilema de se aceitar como um palhaço e ter que confrontar sua família e todas as suas crenças. Mas será que essa é uma história sobre palhaços?',
    turma: "P6 de Edificações",
    direcaoTurma: "Graziele dos Santos Ferreira e Lucas Silva Sousa",
    direcaoGeral: "Edson Matheus Rôla Braga e Nairton Santos Pinheiro",
    premios: "10º Lugar - Melhor Peça.",
    linkVideo: "https://www.youtube.com/watch?v=1QzRJryl3mY",
    imagemPeca: "/images/pecas2023/deixaeupintaromeunariz.jpg",
    linkFotos: "https://photos.app.goo.gl/vXgn4VXwuZ6Dyp6S8",

    elenco: [
        { nome: "Pierre", ator: "Lucas Silva Sousa" },
        { nome: "Padre", ator: "Arthur Mendonça" },
        { nome: "Dona Clarice (Mãe)", ator: "Alice Maria Menezes" },
        { nome: "Seu Carlos (Pai)", ator: "Kleber Lucas Alves" },
        { nome: "Parteira e Freira", ator: "Graziele dos Santos Ferreira" },
        { nome: "Xilito", ator: "Maria Gabriela Santos" },
        { nome: "Pitchula", ator: "Paulo Kaique da Cunha" },
        { nome: "Cecília - Irmã de Pierre", ator: "Mariana Assunção" },
        { nome: "Morte", ator: "Arielly Pereira" },
        { nome: "Divindade", ator: "Francisca Tamires do Nascimento" }
   ]
  }
  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;