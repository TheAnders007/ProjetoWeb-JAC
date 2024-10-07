var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "A Sombra e Eu",
    sinopse: "ﾠﾠA vida não está fácil para ninguém, principalmente para Victor, um jovem garoto nada sociável e com um péssimo hábito de falar sozinho e levar suas sombras para todos os lados. Nessa breve peça Teatral cheia de reviravoltas, Victor terá de lidar com forças além de sua compreensão e, em meio ao caos de suas relações e frustrações, acabará conhecendo o amor, ou, pelo menos, era isso que ele imaginava.",
    turma: "P4 de Mecânica",
    direcaoTurma: "Italo Lino Alves e João Carlos Pessoa Silva",
    direcaoGeral: "Paulo Victor da Silva",
    premios: "11º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=EfJ2fS9TmME",
    imagemPeca: "/images/pecas2022/sombraeu.jpg",
    linkFotos: "https://photos.app.goo.gl/KECKDw5oYME44rxH7",

    elenco: [
      { nome: "Victor", ator: "Felipe Clemente da Silva" },
      { nome: "Emilly", ator: "Maria Gabrielly Carneiro Moreira" },
      { nome: "Mãe do Victor", ator: "Iara Ribeiro de Souza" },
      { nome: "Lucas, amigo de Victor", ator: "João Carlos Pessoa Silva" },
      { nome: "Insegurança", ator: "Italo Lino Alves" },
      { nome: "Sombra 1", ator: "Pedro Paula da Silva" },
      { nome: "Sombra 2", ator: "João Gabriel da Costa Silva" },
      { nome: "Sombra 3", ator: "José Luiz Lopes Furtado" },
      { nome: "Sombra 4", ator: "Davi Santos Freire Cidrão" },
      { nome: "Sombra 5", ator: "Thalison Cruz Holanda Valões" },
      { nome: "Sombra 6", ator: "João Victor Cabral" },
      { nome: "Sombra 7", ator: "Sarah Cibely Ribeiro Sampaio" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
