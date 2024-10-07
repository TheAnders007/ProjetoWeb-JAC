var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Assum Preto",
    sinopse: "ﾠﾠUm pequeno jornalista busca a melhor matéria sobre o líder de sua longínqua cidade, onde nada nunca acontece, o que o leva a uma série de desventuras descobrindo cada vez mais o que se passa debaixo dos panos.",
    turma: "P3 de Edificações",
    direcaoTurma: "Caio Henrique Moreira Martins e Raissa Vitoria",
    direcaoGeral: "Kevny Costa e Aylis.",
    premios: "13º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=VAOUE_2qh9Q",
    imagemPeca: "/images/pecas2022/assumpreto.jpg",
    linkFotos: "https://photos.app.goo.gl/f9L98jZmYLXd91E86",

    elenco: [
      { nome: "Sabiá", ator: "Lívia Sofia Leônidas" },
      { nome: "Curió", ator: "Elias Alves" },
      { nome: "Flautim", ator: "Thamires" },
      { nome: "Angelina Danúbio", ator: "Mariana Irinel" },
      { nome: "Assum Preto", ator: "Raissa Vitória" },
      { nome: "Carcará", ator: "Júlia Pinheiro" },
      { nome: "Corvo", ator: "Pedro Rian" },
      { nome: "Cardeal", ator: "Guilherme Oliveira" },
      { nome: "Menina das Laranjas", ator: "Keila Hadssa" },
      { nome: "Conceição Caburé", ator: "Marina" },
      { nome: "Joana de Barro / Morador de rua", ator: "Caio Martins" },
      { nome: "Dona Andorinha", ator: "Geisinara" },
      { nome: "Vendedor", ator: "Lucas Rocha" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
