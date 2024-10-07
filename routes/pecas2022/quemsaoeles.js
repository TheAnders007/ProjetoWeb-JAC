var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Quem são Eles?",
    sinopse: 'ﾠﾠ"Quem são eles?" é uma obra que retrata a sociedade atual: onde pessoas vivem aparentemente de forma autônoma e livre em um sistema sutil regido por Eles que influencia as decisões e os comportamentos dos que enxergam o erro e o domínio. Como arte é convite à interpretação e a subjetividade, esse espetáculo é um reflexo do nosso tempo, sem se iludir com ele.',
    turma: "P4 de Química",
    direcaoTurma: "Gustavo Souza e Sara Brilhante",
    direcaoGeral: "Diógenes Almeida e Marcos Medeiros",
    premios: "6º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=0CDeJvpYLW8",
    imagemPeca: "/images/pecas2022/quemsaoeles.jpg",
    linkFotos: "https://photos.app.goo.gl/TsBxrndETUzwUZ4U8",

    elenco: [
      { nome: "Aluna 1", ator: "Ana Ivina Sousa Roseno" },
      { nome: "Aluna 2", ator: "Flavia Carmelita Oliveira Uchoa" },
      { nome: "Aluna 3", ator: "Keithyanne Torres Damasceno" },
      { nome: "Professora", ator: "Maria Glória Saraiva Sales" },
      { nome: "Maestro", ator: "Heryk Kauan Saldanha Oliveira" },
      { nome: "Mãe", ator: "Alicia Asheley Dantas de Castro" },
      { nome: "Pai", ator: "João Gabriel Freitas Rodrigues" },
      { nome: "Filha", ator: "Flavia Carmelita Oliveira Uchoa" },
      { nome: "Jornalista", ator: "Ana Clara Eli de Carvalho" },
      { nome: "Chefe do Jornal", ator: "Maria Isabel Matias Bezerra" },
      { nome: "Ator", ator: "Arlenson Levi Laurindo Lima" },
      { nome: "Figurante/Mulher louca", ator: "Mari Aimê Marques Duarte" },
      { nome: "Figurante/Presidente", ator: "Pedro Osawa Vasconcelos" },
      { nome: "Repórter", ator: "Ryan dos Santos de Jesus" },
      { nome: "Repórter", ator: "Vivian Sousa Pinheiro" },
      { nome: "Figurante/Blogueiro", ator: "Davi Barbosa Cabral" },
      { nome: "Figurante", ator: "Cibelly Loryn Martins Campos" },
      { nome: "Chefe do Jornal", ator: "Maria Isabel Matias Bezerra" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
