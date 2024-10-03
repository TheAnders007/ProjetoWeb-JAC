var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "O Diário",
    sinopse: "ﾠﾠDurante a Segunda Guerra, os nazistas reprimiram e caçaram judeus em seu território, frequentemente os deportando para campos de concentração. Em 1942, após sua irmã ser chamada para tal destino, uma garota judia de 13 anos chamada Anne Frank se esconde, junto à sua família e outros refugiados, em um “Anexo Secreto” localizado no escritório onde seu pai trabalhava. Anne mantém um diário durante o período que lá se esconderam, no qual fala sobre a vida e convivência com os outros moradores do Anexo, relatando suas reflexões.",
    turma: "P2 de Informática",
    direcaoTurma: "Ana Beatriz Carvalho de Menezes e Maria Clara Ribeiro",
    direcaoGeral: "Thaís Viana Cunha e Adriana Silveira da Costa",
    premios: "11º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=eAa2Ti3jupY",
    imagemPeca: "/images/diario.jpg",
    linkFotos: "https://photos.app.goo.gl/hDh2sEA536FU3ySQA",

    elenco: [
        { nome: "Anne Frank", ator: "Ana Lívia Cândido Carneiro" },
        { nome: "Edith Frank", ator: "Ana Beatriz Carvalho de Menezes" },
        { nome: "Otto Frank", ator: "Francisco Thiago Cordeiro de Brito" },
        { nome: "Margot Frank", ator: "Ana Paula Sena Silva" },
        { nome: "Peter Van Daan", ator: "Miguel da Silva Souza Ribeiro" },
        { nome: "Auguste Van Daan", ator: "Sara Vieira Silva" },
        { nome: "Herman Van Daan", ator: "João Gabriel Aguiar de Senna" },
        { nome: "Victor Kugler", ator: "Ismael Lira Nascimento" },
        { nome: "Johannes Kleiman", ator: "João Matheus Tabosa Braga" },
        { nome: "Miep", ator: "Ana Luiza de Oliveira Monteiro" },
        { nome: "Sr. Dussel", ator: "João Gabriel Tito de Moraes" },
        { nome: "Radialista e Narrador Reserva", ator: "Francisco Levi Barros da Cunha" },
        { nome: "Narrador", ator: "Levi Faleh Albuquerque" }
    ]
  };

  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;