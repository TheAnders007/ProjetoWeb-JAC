var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "O Contágio da Mentira",
    sinopse: "O contágio da mentira retrata o período da chegada da COVID-19 no Brasil, fazendo um recorte sobre como a classe artística se reinventou para permanecer viva e não sucumbir na pandemia. A presença do violino é o oxigênio que mantém a cena viva, dizendo que a arte continua respirando mesmo em tempos sombrios.",
    turma: "P2 de Telecomunicações",
    direcaoTurma: "Ana Isabella Oliveira de Lacerda e Francisco Riquelmy da Silva Nascimento",
    direcaoGeral: "Juliana Maria Teixiera Nunes",
    premios: "4º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=AMzbpJGelJ8",
    imagemPeca: "/images/contagiomentira.jpg",
    linkFotos: "https://photos.google.com/share/AF1QipM2qUc6sUTyq4onFpZPaU6mY4MaLUEWrobSD4bfbcHe81XPjYebU5Ni8M1aTe7qnQ?key=akpCX2E0YWg2RFlidU5zWDRFdzhvZkt0NHlQTm9B", 

    elenco: [
        { nome: "Mateus (Professor de música)", ator: "Vandenilson Araújo dos Santos" },
        { nome: "Patrão", ator: "Caio Benazi Gouvêa" },
        { nome: "Marionete 1 (Catrina)", ator: "Maria Clara Silva Gomes" },
        { nome: "Marionete 2 (Betina)", ator: "Clara Valéria Carvalho Rocha" },
        { nome: "Marionete 3 (Janina)", ator: "Ketlen Suelen Soares do Nascimento" },
        { nome: "Aluno da escola de música 1", ator: "Ronaldy de Souza Lima" },
        { nome: "Aluno da escola de música 2", ator: "Maria Renata de Sousa da Silva" },
        { nome: "Aluno da escola de música 3", ator: "Rita da Silva Fernandes" },
        { nome: "Médico", ator: "Francisco Riquelmy da Silva Nascimento" },
        { nome: "Médica", ator: "Letícia Maria Mesquita dos Santos" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
