var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "A Morte do Vaqueiro",
    sinopse: 'ﾠﾠEm 1963 o músico Luiz Gonzaga lançou a música "A Morte do Vaqueiro" homenageando seu primo Raimundo Jacó que, desde cedo, mostrou ser um homem muito carismático, prestando bons serviços à comunidade. Mas seu crescimento levou a intrigas que culminaram em seu assassinato. A peça, com caráter documentarista, retrata os últimos acontecimentos da sua vida, suas relações familiares, o seu lado amoroso e seus conflitos com os fazendeiros, trazendo o seu assassinato e motivações.',
    turma: "P3 de Eletrotécnica",
    direcaoTurma: "Francisca Mariana Silva Brasil e João Gustavo da Silva Cavalcante",
    direcaoGeral: "Davi Oliveira e Nicoly Silva",
    premios: "6º Lugar - Melhor Peça.",
    linkVideo: "https://www.youtube.com/watch?v=4aMtIQ1iXyY",
    imagemPeca: "/images/pecas2023/amortedovaqueiro.jpg",
    linkFotos: "https://photos.app.goo.gl/Sr7c4tpmA7Y5cKmd7",

    elenco: [
      { nome: "Narrador", ator: "Tiago Monteiro Bessa" },
      { nome: "Raimundo Jacó", ator: "José Henrique De Oliveira Pereira" },
      { nome: "Dona Fátima", ator: "Sthefanny Mendes Souza" },
      { nome: "Rosinha", ator: "Sara Jamilly Moreira da Silva" },
      { nome: "Luiz Gonzaga", ator: "Pedro Artur Moreira Vidal" },
      { nome: "Miguel Lopes", ator: "Pablo Paulino Frores" },
      { nome: "Elizeu", ator: "Douglas Kelvin Moreira da Silva" },
      { nome: "Padre", ator: "João Gustavo da Silva Cavalcante" },
      { nome: "Seu Leôncio", ator: "Alan Enzo da Silva Maciel" }
   ]
  }
  res.render("templatePeca2023", dadosPeca);
});

module.exports = router;