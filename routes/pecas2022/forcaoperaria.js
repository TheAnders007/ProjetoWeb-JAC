var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "A Força Operária",
    sinopse: "ﾠﾠComo toda revolta operária, há um princípio que fortalece a luta, a necessidade de condições humanas para se trabalhar com paz e dignidade. Nessa peça, não será diferente, os ideais falarão mais alto que as dificuldades e mais uma vez a camada operária mostrará que somente se vence através da luta coletiva.",
    turma: "P2 de Mecânica",
    direcaoTurma: "Fernando Saymon Barros de Jesus",
    direcaoGeral: "Ana Maria Castro Sousa; Júnior Silva",
    premios: "10º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=__h5iAGh56Q",
    imagemPeca: "/images/pecas2022/forcaoperaria.jpg",
    linkFotos: "https://photos.app.goo.gl/v1SAXadywRwG46748",

    elenco: [
      { nome: "Louis - Operário", ator: "Ana Júlia Pinheiro Barros" },
      { nome: "Figurante", ator: "Anthony da Silva Carvalho" },
      { nome: "Figurante", ator: "Antônio Henrique de Souza" },
      { nome: "Jack - Operário", ator: "Arthur Rodrigues Macedo" },
      { nome: "Policial", ator: "Cauê Lemos de Oliveira" },
      { nome: "Policial", ator: "Daniel Sacramento Reis" },
      { nome: "Patrão", ator: "Fernando Saymon Barros de Jesus" },
      { nome: "Albert - Operário", ator: "Gael Vitório Pereira" },
      { nome: "Gerente", ator: "Isaque Renaux Leite" },
      { nome: "Figurante", ator: "José Alessandro Teles" },
      { nome: "Fiscal", ator: "Marcos Andrey Araujo" },
      { nome: "Policial", ator: "Ryan Bezerra Carlos" },
      { nome: "Olivia - Operária", ator: "Sherida Caliane Nascimento" },
      { nome: "Policial", ator: "Vinicius da Costa Gomes" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
