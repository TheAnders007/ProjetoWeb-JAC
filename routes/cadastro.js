var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  res.render("cadastro", { title: "Cadastro" });
});

module.exports = router;