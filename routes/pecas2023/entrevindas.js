var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Entrevindas",
    sinopse: 'ﾠﾠApós a morte de sua esposa, Tião, um caminhoneiro simples e bruto, entra em uma jornada para entender os sentimentos conflituosos dele e de sua filha, se afastando cada vez mais de casa. Em uma última tentativa, sua filha pede para ele comparecer para sua festa de 15 anos, onde começa o dilema de Tião entre enfrentar ou não a morte de sua amada.',
    turma: "P5 de Edificações",
    direcaoTurma: "Carlos Daniel Barreto Bacelar",
    direcaoGeral: "Kevin Araújo da Silva e Erick Bittencourt da Silva",
    premios: "7º Lugar - Melhor Peça.",
    linkVideo: "https://www.youtube.com/watch?v=kh3wTGDiDfA&list=PLpWiXtYfeqjKZzlFIlv9HEkXvJ4EQ-u9w",
    imagemPeca: "/images/pecas2023/entrevindas.jpg",
    linkFotos: "https://photos.app.goo.gl/5KYqYVHBKRJb9bgJ6",

    elenco: [
        { nome: "Irmão 1 e Cover Justin Bieber", ator: "Carlos Daniel Barreto Bacelar" },
        { nome: "Vidente", ator: "Ellyon Gabriel Rodrigues Ferreira" },
        { nome: "Helena - Mãe", ator: "Geisinara de Sena Santos" },
        { nome: "Tia de Sofia", ator: "Glauber Portela III" },
        { nome: "Irmão 2", ator: "José Elias Carneiro Alves" },
        { nome: "Tião - Pai", ator: "Júlia Pinheiro Rodrigues" },
        { nome: "Jéssica - Amiga de Sofia", ator: "Lívia Sofia de Morais Ferreira" },
        { nome: "Sofia - Filha", ator: "Mariana Irineu Bezerra" },
        { nome: "Irmão 4", ator: "Pedro Rian de Sena Barroso" },
        { nome: "Ketillyn Paloma Nicolly Lohane Vêkanandre Sthephanny Smith Bueno", ator: "Raissa Vitória Nascimento da Silva" }
   ]
  }
  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;