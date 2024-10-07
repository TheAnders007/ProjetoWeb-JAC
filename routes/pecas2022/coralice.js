var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Coralice",
    sinopse: "ﾠﾠEsta é uma história que retrata o aprisionamento imaginário como forma de libertação. Coralice é alvo de muitos problemas envolvendo outras pessoas, desde o início de sua vida. Com esse tipo de comportamento, Coralice acaba se desgastando, principalmente por guardar tantas cobranças causadas pelo seu perfeccionismo excessivo. Então, a menina decide migrar para uma realidade diferente, um mundo alternativo em que a garota recebe lições valiosas que se aplicam a sua realidade. Contudo, libertar-se das aparências, isto é, do que tanto lhe aflige, pode não ser uma tarefa fácil. Até que ponto irá a realidade e a imaginação de Coralice?",
    turma: "P3 de Química",
    direcaoTurma: "Lohane Rodrigues",
    direcaoGeral: "Hamilton Paiva Sales",
    premios: "8º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=e91-thCFRi8",
    imagemPeca: "/images/pecas2022/coralice.jpg",
    linkFotos: "https://photos.app.goo.gl/Bm91Sj4jUEtx5TuE6",

    elenco: [
      { nome: "Coralice", ator: "Isabella Pinheiro" },
      { nome: "Professor", ator: "Hiéroclys Barreto" },
      { nome: "Gata", ator: "Laryssa Iraci Holanda" },
      { nome: "Sra. B", ator: "Ana Letícia Ribeiro" },
      { nome: "Sra. A", ator: "Maria Clara Ferreira" },
      { nome: "Estudante", ator: "Luan Bruno Lopes" },
      { nome: "Estudante", ator: "Ingryd Maria" },
      { nome: "Rainha de Copas", ator: "Yasmin Alves" },
      { nome: "Chapeleiro", ator: "Gustavo Rocha" },
      { nome: "Acompanhante da rainha", ator: "Sara Paula Rodrigues" },
      { nome: "Acompanhante da rainha", ator: "Maria Eduarda Rodrigues" },
      { nome: "Narradora/Psicóloga", ator: "Lohane Rodrigues" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
