var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Megera (In)domável",
    sinopse: "ﾠﾠCatarina, uma jovem exploradora e à frente de seu tempo, terá que enfrentar os preconceitos e normas impostas pela sociedade em que vive em uma luta incansável pela própria liberdade. Em um lugar onde todos parecem ser seus inimigos, a jovem precisará colocar seus ideais à prova e decidir de uma vez por todas o que é mais importante: amor ou tradição.",
    turma: "P2 de Química",
    direcaoTurma: "Tainá Cesar Almeida",
    direcaoGeral: "Tainá Cesar Almeida",
    premios: "5º Lugar - Melhor Peça",
    linkVideo: "",
    imagemPeca: "/images/pecas2022/megeraindomavel.jpg",
    linkFotos: "https://photos.app.goo.gl/KhnNWNhM4tmiLx7L9",

    elenco: [
      { nome: "Catarina", ator: "Giovanna Araujo Calíope de Melo" },
      { nome: "Cândida", ator: "Izadora Caetano Aquino" },
      { nome: "Benigna", ator: "Antonia Gabriele Rodrigues Nepomuceno" },
      { nome: "Domador (Cícero)", ator: "Eric Rullian da Silva Lima" },
      { nome: "Coronel", ator: "Manoel Vinicius Araujo dos Santos" },
      { nome: "Professor", ator: "João Pedro Pinheiro Bibiano" },
      { nome: "Doutor", ator: "Pedro Henrique Serafim Rodrigues" },
      { nome: "Phillipe", ator: "Ingrid da Silva Barros" },
      { nome: "Malva", ator: "Marina Torres Coelho" },
      { nome: "Padre", ator: "Lucas Ryan Mota Lima" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
