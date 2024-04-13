var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  res.render("lindasdemorrer", { title: "Lindas de Morrer" });
});

module.exports = router;