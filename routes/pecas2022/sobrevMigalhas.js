var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Sobrevivendo de Migalhas",
    sinopse: "ﾠﾠEm uma cidade claramente dividida por classes sociais – ricos e pobres - retrata nitidamente o reflexo em recortes socioculturais, políticos, econômicos. Há protestos, enganações disfarçadas de promessas, preconceito e pessoas lutando para ter uma condição de vida melhor. As denúncias inflamadas e a opressão velada, a luta e os temores da marginalização e da vulnerabilidade social.",
    turma: "P3 de Informática",
    direcaoTurma: "Sara Lima Freitas; Ana Carolina Gonzaga da Silva",
    direcaoGeral: "Clarisse Gomes Muniz; Julio França Menezes Nascimento; Luís Gustavo Morel",
    premios: "7º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=1mU7f9MHajs",
    imagemPeca: "/images/pecas2022/sobrevivendomigalhas.jpg",
    linkFotos: "https://photos.app.goo.gl/AHHgiupruBzrsDsL6",

    elenco: [
      { nome: "Morador da periferia", ator: "Fabio Barros de Souza Neto" },
      { nome: "Morador da periferia", ator: "Matheus Willian Nunes Maciel" },
      { nome: "Morador da periferia", ator: "Ana Carolina Gonzaga da Silva" },
      { nome: "Protestante a favor dos pobres", ator: "Maria Emily Costa Moura" },
      { nome: "Protestante a favor dos pobres", ator: "Gleicy Kelli Batista" },
      { nome: "Protestante a favor dos pobres", ator: "Davi Brandão dos Santos" },
      { nome: "Protestante a favor dos ricos", ator: "Maria Mell Oliveira Sudário" },
      { nome: "Protestante a favor dos ricos", ator: "Átila Rufo Araújo Mendes da Silva" },
      { nome: "Político", ator: "Paulo Roberto Carlos de Sousa" },
      { nome: "Esposa do político", ator: "Sophia Mello de Lima" },
      { nome: "Filho do político", ator: "Marcos Daniel da Silva Bezerra" },
      { nome: "Vendedora ambulante", ator: "Yasmin Carlôto Bezerra da Silva" },
      { nome: "Aliado do político", ator: "Francisco Erick Souza Gomes" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;

