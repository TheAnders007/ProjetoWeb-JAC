var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Lindas de Morrer!",
    sinopse: "ﾠﾠBeleza, fama, poder! Num mundo em que essas três coisas regram a sociedade, durante o esperado desfile anual da grande empresa de modelos 'Flor de Lótus', a estrela mais aclamada do país morre misteriosamente. Várias especulações começam a circular e inicia-se então uma investigação policial. Todos parecem suspeitos… Pistas ambíguas levam a becos sem saída e a dúvida fica: afinal, quem é o verdadeiro culpado?",
    turma: "P4 de Química",
    direcaoTurma: "Tainá Cesar Almeida",
    direcaoGeral: "Anabel Lessa e Maria Clara Barbosa",
    premios: "5º Lugar - Melhor Peça; Melhor Atriz: Ingrid da Silva Barros.",
    linkVideo: "https://www.youtube.com/watch?v=SPPwDvc0TtI",
    imagemPeca: "/images/pecas2023/lindasdemorrer.jpeg",
    linkFotos: "https://photos.app.goo.gl/3jSxkeG1xf4kzsxQ7",

    elenco: [
      { nome: "Orquídea", ator: "Marina Torres Coelho" },
      { nome: "Margarida", ator: "Izadora Caetano Aquino" },
      { nome: "Dália", ator: "Ingrid da Silva Barros" },
      { nome: "Repórter 1", ator: "Eric Rullian da Silva Lima" },
      { nome: "Repórter 2", ator: "Pedro Henrique Serafim Rodrigues" },
      { nome: "Félix", ator: "João Pedro Pinheiro Bibiano" },
      { nome: "Perita", ator: "Ana Lara Barbosa Silva" },
      { nome: "Detetive 1", ator: "Manoel Vinicius Araújo dos Santos" },
      { nome: "Detetive 2", ator: "Tays Oliveira Andrade" },
      { nome: "Segurança 1", ator: "Inácio André Beviláqua Sales de Araújo" },
      { nome: "Segurança 2", ator: "Luan Henrique Ferreira do Nascimento" },
      { nome: "Begônia", ator: "Maria Clara Cipriano" },
      { nome: "Rosa", ator: "Maria Clara Messias" },
      { nome: "Tulipa", ator: "Amanda Luize Ramos Oliveira" },
      { nome: "Camelian", ator: "Lohana Kelria Castro Gomes" },
      { nome: "Técnico em Química", ator: "Lucas Ryan Mota" }
    ]
  };

  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;