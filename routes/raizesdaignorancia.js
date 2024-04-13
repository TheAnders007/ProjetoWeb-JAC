var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  res.render("raizesdaignorancia", { title: "Raízes da Ignorância" });
});

module.exports = router;