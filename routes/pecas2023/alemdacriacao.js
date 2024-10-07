var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Além da Criação",
    sinopse: 'ﾠﾠEm uma pequena comunidade tradicional judaica, segredos mórbidos orbitam a obscura e isolada mansão Frankenstein. O drama acontece quando a maior criação do médico legista Viktor Frankenstein ultrapassa os limites conhecidos pela ciência e encontra um jovem aventureiro, filho mais velho do patriarca Samuel Cohen. Os dois seres, de origens diferentes, encontram em sua paixão, um pelo outro, a fuga de uma realidade violenta e intolerante e convidam todos a descobrirem o que leva alguém a se tornar um monstro.',
    turma: "P3 de Química",
    direcaoTurma: "Adrielly Maria Milhome Pereira",
    direcaoGeral: "Leontino Cavalcante da Silva",
    premios: "8º Lugar - Melhor Peça.",
    linkVideo: "https://www.youtube.com/watch?v=8jtM2FbMgo8&list=PLpWiXtYfeqjKZzlFIlv9HEkXvJ4EQ-u9w",
    imagemPeca: "/images/pecas2023/alemdacriacao.jpg",
    linkFotos: "https://photos.app.goo.gl/co6zYAnyE322NDFbA",

    elenco: [
        { nome: "Herschel Frankenstein", ator: "Levi dos Santos Damasceno" },
        { nome: "Ivan Cohen", ator: "Vicente Anderson Santos Aguiar Filho" },
        { nome: "Viktor Frankenstein", ator: "Wladson dos Santos Rodrigues" },
        { nome: "Olga Ivanovich", ator: "Mariana Moura Pinheiro" },
        { nome: "Samuel Cohen", ator: "Pedro Hector de Sousa Carneiro" },
        { nome: "Linda Cohen", ator: "Maria Eduarda Magalhães de Oliveira" },
        { nome: "Chaya Cohen", ator: "Isabele Mesquita Monteiro Lobo" },
        { nome: "Zahava Cohen", ator: "Lohana Mesquita Monteiro Lobo" },
        { nome: "Padre", ator: "Micael Mendes de Oliveira da Cruz" },
        { nome: "Catharina", ator: "Laíssa Pereira de Sousa" },
        { nome: "Dra. Lotte Neumann", ator: "Maria Yasmin de Lima Abucater" },
        { nome: "Figurante", ator: "Marisa Rodrigues da Costa" },
        { nome: "Figurante", ator: "Marília Colaço Pinheiro Bezerra" },
        { nome: "Figurante", ator: "Vitória Mayra de Oliveira Moreno" },
        { nome: "Figurante", ator: "Mikely Costa do Carmo" },
        { nome: "Figurante", ator: "Marina Kettini Gomes de Lima" },
        { nome: "Figurante", ator: "Erick Luan Mota Albuquerque" },
        { nome: "Figurante", ator: "Stéfany Araújo de Sousa" },
        { nome: "Figurante", ator: "Laura de Souza Marques" }
   ]
  }
  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;