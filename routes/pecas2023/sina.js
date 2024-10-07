var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Sina",
    sinopse: "ﾠﾠ“SINA” é uma emocionante adaptação da lenda da bailarina do Theatro José de Alencar, que morreu há décadas e assombra as pessoas com as suas possíveis aparições. A peça mergulha na jornada extraordinária de Cecília, uma talentosa bailarina, sua resiliência, paixão e capacidade de transformar desafios em triunfos. Através dos movimentos graciosos de Cecília, o espetáculo inspira o público a questionar preconceitos e a abraçar a beleza que surge quando nos permitimos transcender as fronteiras culturais e raciais. Afinal, o racismo é o veneno velado da sociedade.",
    turma: "P3 de Edificações",
    direcaoTurma: "Alan Mateus de Almeida Queiroz e Marcley Barbosa da Silva Filho",
    direcaoGeral: "Adney Pinheiro e Brena Deodato",
    premios: "3º Lugar - Melhor Peça.",
    linkVideo: "https://www.youtube.com/watch?v=nxn6X7gjwCI",
    imagemPeca: "/images/pecas2023/sina.jpg",
    linkFotos: "https://photos.app.goo.gl/irSh15hRrJkCzsBd6",

    elenco: [
        { nome: "Cecília de Mariz", ator: "Mirella Da Silva Rodrigues" },
        { nome: "Isabel Nataraj", ator: "Iasmim Braga Costa" },
        { nome: "Álvaro", ator: "Lucas Gabriel Silva Lúcio" },
        { nome: "Álvaro", ator: "Francisco Jeová Teixeira Matias Neto" },
        { nome: "José Martiniano de Alenca", ator: "Carlos Gabriel Clementino Soares" },
        { nome: "Ana Josefina", ator: "Pérola Beatriz da Costa Ramos" },
        { nome: "Carolina Camargo", ator: "Alana Késsia Bandeira Cavalcante" },
        { nome: "Isaac Araquém", ator: "Marcley Barbosa da Silva Filho" },
        { nome: "Valentina Camargo", ator: "Iasmin Lopes Barreto" },
        { nome: "Odette Nataraj", ator: "Maria Cândida Rodrigues Lima" },
        { nome: "Dona Amália/Bailarina 1", ator: "Mikely Amorim Melo" },
        { nome: "Bailarina 2", ator: "Maria Nicoly Lima Ramos" },
        { nome: "Bailarina 3", ator: "Ana Suzany Lourenço Barros" },
        { nome: "Bailarina 4", ator: "Dayane Kelly Guilhermino Ferreira" },
        { nome: "Bailarina 5", ator: "Caroline Lima Silva" },
        { nome: "Zelador 1", ator: "Marcelo Augusto do Nascimento Ferreira" },
        { nome: "Augusto", ator: "Guilherme Caetano dos Santos" },
        { nome: "Segurança", ator: "Maria Clara Azevedo dos Santos" }
    ]
  };

  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;