var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "A Última Parada",
    sinopse: "ﾠﾠApós sofrerem um acidente de ônibus, Jacqueline e Isabel se veem em um ambiente inquietante onde tempo e espaço parecem estáticos, uma espécie de purgatório. As amigas de longa data, ao lado do motorista e de um sujeito rico e desconhecido, terão que aprender a lidar com esta nova realidade enquanto aguardam para descobrir seu destino, que será definido por suas ações em vida. Através de um julgamento, cada um deles terá de encarar a sombra e a luz que há dentro de si, para saberem o seu trajeto final. Embarque nesse coletivo onde a única certeza é que seu próximo ponto será A Última Parada!",
    turma: "P7 de Mecânica",
    direcaoTurma: " José Arthur Deolino Lameu e Gabriel Carvalho Xavier Dutra",
    direcaoGeral: "Madalena Daniele Ferreira dos Santos",
    premios: "1º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=GFpprW8iliA",
    imagemPeca: "/images/pecas2022/ultimaparada.jpg",
    linkFotos: "https://photos.app.goo.gl/WmgS3Hni7MVnykFw5",

    elenco: [
      { nome: "Jac / Pedro (criança)", ator: "Pablo Gael de Souza Dantas" },
      { nome: "Isabel (Isa)", ator: "Isadora Moraes de Queiroz" },
      { nome: "Ricardo (Homem rico)", ator: "Sandro Luis Nepomuceno Rodrigues" },
      { nome: "Carlão (Motorista)", ator: "Valdimiro de Sales Ribeiro Neto" },
      { nome: "Benício (Entidade)", ator: "José Arthur Deolino Lameu" },
      { nome: "Maurício (Entidade)", ator: "Vinícius Guimarães Trajano" },
      { nome: "Influencer", ator: "Hitalo Hudyson Feitosa Paiva" },
      { nome: "Bolsista", ator: "Fernando Glaudson Sales de Carvalho Alves" },
      { nome: "Justiça", ator: "Miqueias da Silva Almeida" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
