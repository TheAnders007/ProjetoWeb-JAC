var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Raízes da Ignorância",
    sinopse: "ﾠﾠEm pleno século XXI, Gabriel, um homem desagradável, continua preso a sua caixa de preconceitos intermináveis. Felizmente, o destino tem uma maneira peculiar de lidar com aqueles que são cegados pelo ódio. De mãos atadas, Gabriel agora terá que passar por uma série de acontecimentos conflitantes, que se opõem a todos os seus estigmas. Será que ele será capaz de reconhecer as raízes de sua cólera irracional? Ou irá mais uma vez vestir a venda que lhe aprisiona em sua própria ignorância?",
    turma: "P2 de Química",
    direcaoTurma: "Pedro Lucas de Medeiros",
    direcaoGeral: "Markos Medeiros e Arthur Gabriel Oliveira Sena",
    premios: "4º Lugar - Melhor Peça; Melhor Diretor de Turma.",
    linkVideo: "https://www.youtube.com/watch?v=gZmO_vE5LtM",
    imagemPeca: "/images/raizesdaignorancia.jpeg",
    linkFotos: "https://photos.app.goo.gl/jojFAT8WJXe3e9GH6",

    elenco: [
      { nome: "Gabriel", ator: "Eduardo Almeida Silva" },
      { nome: "Guia / Chefe / mediador", ator: "José Barboza Cunha" },
      { nome: "Gabriel - Cientista", ator: "Pedro Lucas De Medeiros" },
      { nome: "Gabriela - Política", ator: "Maria Eduarda Fonteles Silveira" },
      { nome: "Gabriela - estrangeira", ator: "Angelis Sofia Salazar Saquez" },
      { nome: "Paramédica 1", ator: "Maria Isabely Almeida da Silva" },
      { nome: "Paramédica 2", ator: "Camila Pereira da Silva" },
      { nome: "Político 1", ator: "Rian Vieira Sampaio" },
      { nome: "Político 2", ator: "Ângelo Antônio Rodrigues de Souza" },
      { nome: "Ajudante 1", ator: "Maitê Lyna Moreira da Costa" },
      { nome: "Ajudante 2", ator: "Líviane Lira Ribeiro" },
      { nome: "Entrevistadora", ator: "Ana Beatriz Gregório Gonçalves" },
      { nome: "Italiana", ator: "Evelyn Lima De Min" },
      { nome: "Figurante", ator: "Ana Vitoria Carvalho Lopes" }
    ]
  };

  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;