var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Amorte Salva",
    sinopse: "ﾠﾠCleópatra e Marco Antônio, Rei Pedro e Inês de Castro, Ana Bolena e Henrique VIII. Todos foram jogadores do Amor e da Morte. Eles escolhem suas peças, jogam os peões e influenciam seus jogadores em uma disputa com a Morte ganhando sempre. Mas pode haver um casal cujo Amor realmente mude esse jogo? Amor lutará para manter essas duas unidas, ao passo que Morte não poupará esforços para conseguir seus objetivos.",
    turma: "P3 de Telecomunicações",
    direcaoTurma: "Maria Clara Moraes Beserra e Lívia Agnes Albano Martins",
    direcaoGeral: "Bruna Machado",
    premios: "2º Lugar - Melhor Peça.",
    linkVideo: "https://youtu.be/ldQY2LdyHhQ?si=hq81zyMkrDcPYWJc",
    imagemPeca: "/images/pecas2023/amortesalva.jpeg",
    linkFotos: "https://photos.app.goo.gl/xzZBi4h21F4VLSARA",

    elenco: [
        { nome: "Morte", ator: "Ana Lívia Rangel" },
        { nome: "Amor", ator: "Maria Eduarda Carneiro" },
        { nome: "Helena", ator: "Ana Rebeca Bastos" },
        { nome: "Antonella", ator: "Thalia do Vale" },
        { nome: "Mãe da Helena", ator: "Leyssa Souza Medeiros" },
        { nome: "Pai da Helena", ator: "Mariana Uchôa" },
        { nome: "Avó da Antonella", ator: "Maria Clara Moraes Beserra" },
        { nome: "Cleópatra", ator: "Pamela Cristina" },
        { nome: "Inês de Castro", ator: "Rebeca Mansueto" },
        { nome: "Soldado 1; Carrasco", ator: "Eduardo Costa" },
        { nome: "Soldado 2; Henrique VII", ator: "Matheus Vieira" },
        { nome: "Ana Bolena", ator: "Luiza Maria Ribeiro" },
        { nome: "Figurante 1", ator: "Maria Clara da Silva" },
        { nome: "Rei Pedro; Figurante 2", ator: "Cauan Lucas" },
        { nome: "Figurante 3", ator: "Maria Flor Guerra" },
        { nome: "Figurante 4", ator: "Yuri Siqueira Marco Antônio" }
    ]
  };

  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;