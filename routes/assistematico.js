var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const dadosPeca = {
    titulo: "Assistemático",
    sinopse: "Com o avanço da tecnologia, a sociedade adquiriu um novo cenário: robôs e humanos vivem no mesmo meio. No entanto, o que era para ser uma relação de submissão acaba entrando em discussão quando o Robô Q2 adquire consciência e uma mente biologicamente similar a de um humano. Junto de seus amigos artistas, ele tenta se descobrir através das artes, como a música, a pintura, o teatro e a literatura, e compartilhar os seus sentimentos e aprendizados.",
    turma: "P2 de Informática",
    direcaoTurma: "Anderson Maia Santos",
    direcaoGeral: "Leonardo Ramos",
    premios: "9º Lugar - Melhor Peça",
    linkVideo: "https://www.youtube.com/watch?v=oy0Gieqn520",
    imagemPeca: "/images/assistematico.jpg",
    linkFotos: "https://photos.google.com/share/AF1QipP_-papoVjA9D3fxIa63Rm_xE_hFhy_Jykk6H20ojtjmOH9sYIL3aFHzmglk48oUw?key=S3NTNGJYUS1fNHI0RWJfa1dwRXZ6Y0ZtTEZYWkx3",

    elenco: [
        { nome: "Robô Q2", ator: "Pedro Henrique Lopes Sá de Farias" },
        { nome: "Marinete", ator: "Sure Rocha Bezerra" },
        { nome: "Josebyzon", ator: "Gabriel Ferreira" },
        { nome: "Robô Q1", ator: "Francisco Wladison Maciel de Oliveira" },
        { nome: "Operário", ator: "João Pedro Lopes Machado" },
        { nome: "Técnica", ator: "Denise Ferreira de Abreu" },
        { nome: "Servente de Café/Quadro Vivo", ator: "Camila Brauna Tavares" },
        { nome: "Robô Figurante", ator: "Maria Eduarda Bezerra Silva" },
        { nome: "Escritor/Oswaldo", ator: "Enzo Giuliano Machado Vilar" },
        { nome: "Pintora/Sophia", ator: "Sophia Araújo Ferreira Moura" },
        { nome: "Músico/Caju", ator: "Mario Soares Neo" },
        { nome: "Ator Figurante", ator: "Allan Martins Gadelha" },
        { nome: "Atriz Figurante", ator: "Thalita Suzy Rodrigues Sampaio" },
        { nome: "Pessoa da Plateia 1", ator: "Antonio Abner Soares Jeronimo" },
        { nome: "Pessoa da Plateia 2", ator: "Libia Caniceiro da Silveira" },
        { nome: "Pessoa da Plateia 3", ator: "Julia Maria Freitas Bezerra" },
        { nome: "Guarda", ator: "Matheus Sousa de Carvalho" },
        { nome: "Delegado", ator: "Pedro Farley da Silveira Junior" },
        { nome: "Figurante", ator: "Leticia Vitória Pereira Gomes" }
    ]
  };
  res.render("templatePeca2022", dadosPeca);
});

module.exports = router;
