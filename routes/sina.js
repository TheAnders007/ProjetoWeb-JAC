var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  res.render("sina", { title: "Sina" });
});

module.exports = router;