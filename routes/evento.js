var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("evento", { title: "Evento" });
});

module.exports = router;
