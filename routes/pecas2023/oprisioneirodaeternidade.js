var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "O Prisioneiro da Eternidade",
    sinopse: "ﾠﾠMiguel, um jovem universitário de 19 anos, tem sua vida transformada ao conquistar uma rara oportunidade de estudar na prestigiosa Harvard University. No entanto, o voo para Boston resulta em um acidente fatal, do qual ele emerge ileso, desafiando a lógica e a explicação numa aparente imortalidade. Enquanto Miguel encara os efeitos positivos e negativos desse dom misterioso, o futuro se desdobra diante deles, carregado de ambiguidade e incerteza.",
    turma: "P5 de Eletrotécnica",
    direcaoTurma: "Alanis Barreto Martins",
    direcaoGeral: "Glaydson dos Santos Santana e Luiz Mário da Silva Ferreira",
    premios: "12º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=pR6lG6KnbXk",
    imagemPeca: "/images/prisioneirodaeternidade.jpg",
    linkFotos: "https://photos.app.goo.gl/fsga9LkGk71BLe1t8",

    elenco: [
        { nome: "Miguel", ator: "Gabriel Praciano Menezes" },
        { nome: "Carlos", ator: "Nathan Levi Abreu Vale" },
        { nome: "Gabriela", ator: "Halana Kelly Sousa Melo" },
        { nome: "Professor Celso Schimidlin", ator: "Luigi David Cavalcante Ordonho" },
        { nome: "Doutora Dorothy Bianchi", ator: "Kayla Pereira Marques" },
        { nome: "Filósofo Lucas Barreto", ator: "Lucas Vieira Barbosa de Sousa" },
        { nome: "Entrevistador/Âncora/Piloto", ator: "Cláudio de Carvalho Rolim Júnior" }
    ]
  };

  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;