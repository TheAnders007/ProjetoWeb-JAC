var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Aviões de Papel",
    sinopse: "ﾠﾠAviões de Papel é uma peça teatral que transcende as limitações do tempo, mergulhando nas complexas dimensões do passado, presente e futuro, enquanto narra a profunda e emocionante jornada de uma mãe e seu filho em meio a uma guerra que abala as estruturas de sua realidade, revelando a complexidade das emoções humanas e convidando a uma profunda reflexão sobre a natureza da guerra e seus impactos.",
    turma: "P3 de Informática",
    direcaoTurma: "Matheus Pereira Menezes e Sabrinna do Nascimento Facundo",
    direcaoGeral: "Julio França Menezes Nascimento; Jean Augusto Marques da Silva",
    premios: "1º Lugar - Melhor Peça; Melhor Roteiro; Melhores Diretores Gerais.",
    linkVideo: "https://www.youtube.com/watch?v=3PbJPqNQYTs",
    imagemPeca: "/images/avioesdepapel.jpeg",
    linkFotos: "https://photos.app.goo.gl/9yzsgLJs8yrVZXi96",

    elenco: [
        { nome: "Mãe", ator: "Kayvila Marcela Pinheiro de Souza" },
        { nome: "Filho", ator: "Victor Moura André" },
        { nome: "Criança 1 / Soldado 1 / Coro cantante / Coro recitativo", ator: "Arthur de Araújo Custódio" },
        { nome: "Criança 3 / Soldado 3 / Coro cantante / Coro recitativo", ator: "Maria Eduarda Fonteles Silveira" },
        { nome: "Criança 4 / Soldado 4 / Coro cantante / Coro recitativo", ator: "Maria Eduarda de Queiroz Lima" },
        { nome: "Criança 5 / Soldado 5 / Coro cantante / Coro recitativo", ator: "Matheus Pereira Menezes" },
        { nome: "Criança 6 / Soldado 6 / Coro cantante / Coro recitativo", ator: "Vitória Ketlyn Almeida Pereira da Silva" },
        { nome: "Criança 7 / Soldado 7 / Coro cantante / Coro recitativo", ator: "Vitória Pereira de Oliveira" },
        { nome: "Criança 8 / Soldado 8 / Coro cantante / Coro recitativo", ator: "Beatriz de Oliveira Teixeira" },
        { nome: "Criança 9 / Soldado 9 / Coro cantante / Coro recitativo", ator: "Lucas Costa Marques" },
        { nome: "Criança 10 / Soldado 10 / Coro cantante / Coro recitativo", ator: "Vinícius de Almeida Mango Vaz da Silva" },
        { nome: "Criança 11 / Soldado 11 / Coro cantante / Coro recitativo", ator: "Maria Lívia Nascimento dos Santos" },
        { nome: "Criança 12 / Soldado 12 / Coro cantante / Coro recitativo", ator: "Sabrinna do Nascimento Facundo" },
        { nome: "Criança 13 / Capitão / Coro cantante / Coro recitativo", ator: "Elbston Souza Lima Filho" },
        { nome: "Soldado 13", ator: "Lucas Venício dos Santos Rodrigues" },
        { nome: "Soldado 14", ator: "Otávio Emanuel Medeiros Lira" },
        { nome: "Soldado 15", ator: "Pedro de Almeida Conde Rocha" },
        { nome: "Soldado 16", ator: "José Maia Cavalcante Neto" },
        { nome: "Soldado 17", ator: "Ana Lívia Oliveira" },
        { nome: "Soldado 18", ator: "Mateus Almeida Torres Evangelista" }
    ]
  };
  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;