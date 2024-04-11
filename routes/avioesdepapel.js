var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("avioesdepapel", { title: "Aviões de Papel" });
});

module.exports = router;