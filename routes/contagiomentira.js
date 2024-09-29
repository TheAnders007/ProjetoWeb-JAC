var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("contagiodamentira", { title: "Contágio da Mentira" });
});

module.exports = router;
