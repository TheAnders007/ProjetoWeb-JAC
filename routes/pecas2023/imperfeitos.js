var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Imperfeitos",
    sinopse: 'ﾠﾠSubmundo e Cúpula: esta é a divisão da realidade em que vivem as duas amigas, Carol e Olívia. Uma sociedade que, baseada em idealização, é separada entre pessoas feias e bonitas, onde aqueles com 16 anos de idade são submetidos a cirurgias a fim de obter a tão sonhada “perfeição”. No confronto para dar um fim a esta ditadura, uma rebelião acontece contra esse sistema de opressão e injustiça. Até que ponto você iria para se tornar perfeito?',
    turma: "P4 de Telecomunicações",
    direcaoTurma: "Carlos Daniel Barreto Bacelar",
    direcaoGeral: "Ana Graziely Silva Sousa, Aylis Silva Alves e Maria Christine Braz Duarte.",
    premios: "9º Lugar - Melhor Peça.",
    linkVideo: "https://www.youtube.com/watch?v=3VJBPGjOXNk",
    imagemPeca: "/images/pecas2023/imperfeitos.jpg",
    linkFotos: "https://photos.app.goo.gl/qhJuMqAZTKtStJC8A",

    elenco: [
        { nome: "Olívia", ator: "Julia Almeida Felipe" },
        { nome: "Carol", ator: "Sofia Ferreira Sampaio" },
        { nome: "Sarah", ator: "Leticia dos Santos Ramos" },
        { nome: "Pacificador 1 / Cadu", ator: "Caio Benazi Gouvêa" },
        { nome: "Pacificador 2", ator: "Pedro Vitor Monte Moreira" },
        { nome: "Pacificador 3", ator: "Rafael Lucas Leão Marques" },
        { nome: "Narciso", ator: "Francisco Riquelmy da Silva Nascimento" },
        { nome: "Afrodite", ator: "Rita da Silva Fernandes" },
        { nome: "Eros", ator: "Letícia Maria Mesquita dos Santos" },
        { nome: "Rebelde 1", ator: "Clara Valéria Carvalho Rocha" },
        { nome: "Rebelde 2", ator: "Maria Eduarda Sousa de Oliveira" }
    ]
  }
  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;