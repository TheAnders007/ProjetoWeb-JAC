var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "2 + 2 = 5",
    sinopse: "ﾠﾠNesse espetáculo baseado no clássico '1984' de George Orwell, Winston Smith trabalha para o governo e sua função é reescrever a história para que o Partido esteja sempre certo. Ele leva uma vida melancólica, mas tudo começa a mudar quando ele se apaixona por Júlia. Eles precisam manter esse romance numa sociedade em que o amor é proibido e até mesmo o pensamento é crime. Todos estão sempre sendo vigiados e ninguém escapa dos olhos do Grande Irmão. Eles devem tudo ao Grande Irmão.",
    turma: "P4 de Edificações",
    direcaoTurma: "Lucas Silva Sousa, Sofia de Sá Lima Reis e Graziele dos Santos Ferreira",
    direcaoGeral: " Glaydson dos Santos Santana e Arthur Gabriel Oliveira Sena",
    premios: "2º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/live/uR1Xc8H6kqo?si=A8nitf0b6RsM1-8W",
    imagemPeca: "/images/pecas2022/2+2=5.jpg",
    linkFotos: "https://photos.app.goo.gl/5i7x2Fk317gsAD3F8",

    elenco: [
      { nome: "Winston", ator: "Lucas Silva Sousa" },
      { nome: "Julia", ator: "Nara Laís Gomes Rodrigues" },
      { nome: "O'brien", ator: "Arthur Mendonça Campelo Rodrigues" },
      { nome: "Syme", ator: "Mariana Assunção Amado de Oliveira" },
      { nome: "Membro do Partido", ator: "Maria Eduarda Nascimento Brito" },
      { nome: "Membro do Partido", ator: "Maria Gabriela" },
      { nome: "Membro do Partido", ator: "Alice Maria Menezes Nunes" },
      { nome: "Membro do Partido", ator: "Vinicius Lima de Sousa" },
      { nome: "Soldado", ator: "Paulo Kaique da Cunha Sobrinho" },
      { nome: "Soldado", ator: "Layanne Faustino Sales" },
      { nome: "Soldado/Garçom", ator: "Maria Eduarda Aistain Costa Barros Colares" },
      { nome: "Grande irmão/Goldstein/ Soldado", ator: "Kleber Lucas Alves Silva" },
      { nome: "Soldado/General", ator: "Antônio Alexsandro Silva Rocha" },
      { nome: "Proletário", ator: "Maria Eduarda Nascimento Brito" },
      { nome: "Proletário", ator: "Arielly Pereira Rodrigues" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
