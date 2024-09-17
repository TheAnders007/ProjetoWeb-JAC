var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("assistematico", { title: "Assistemático" });
});

module.exports = router;
