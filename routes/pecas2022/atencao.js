var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "A-tenção",
    sinopse: "ﾠﾠÉ preciso estar atento e forte. A democracia é um bem a ser preservado. Em 31 de março de 1964 o Brasil sofreu um golpe militar e iniciou um regime que perdurou até 1985. É preciso estar atento e forte. Quem apoiou este golpe que acabou o estado democrático de direito, fazendo com que a democracia fosse suprimida no nosso país? é preciso estar atento e forte.",
    turma: "P7 de Edificações",
    direcaoTurma: "Laisa Emily Ferreira Alves e Ana Vitória da Silva Oliveira",
    direcaoGeral: "Brena Deolato e Nairton Santos",
    premios: "3º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=3Ps_SeXMOkQ",
    imagemPeca: "/images/pecas2022/atencao.jpg",
    linkFotos: "https://photos.app.goo.gl/poRp75KHvYuQ2ygA9",

    elenco: [
      { nome: "Esposa traída", ator: "Aline Linhares Jucá" },
      { nome: "Esposa da família tradicional", ator: "Ana Vitória da Silva Oliveira" },
      { nome: "Esposo infiel", ator: "Anderson Ferreira de Araújo" },
      { nome: "Esposo agressor", ator: "Anderson Vieira de Oliveira" },
      { nome: "Amante", ator: "Ariane de Araújo Oliveira" },
      { nome: "Músico carron", ator: "Caio Rodrigues dos Santos" },
      { nome: "Esposo da família tradicional", ator: "Gabriel de Amaral da Silva" },
      { nome: "Esposa agredida", ator: "Isabelly Pereira de Almeida" },
      { nome: "Articulador Ato 5", ator: "João Gabriel Almeida Correia e Silva" },
      { nome: "Mulher da marcha da família", ator: "Laisa Emily Ferreira Alves" },
      { nome: "Artista intérprete 3", ator: "Meiriely Barreto de Brito" },
      { nome: "Músico Violão", ator: "Muriel Rávio Domingos Paiva" },
      { nome: "Filha da família tradicional", ator: "Sabrina Damasceno do Vale" },
      { nome: "Mulher da marcha da família", ator: "Thais Feijão Oliveira" },
      { nome: "Democracia", ator: "Vitória Emilly da Silva Franklin" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
