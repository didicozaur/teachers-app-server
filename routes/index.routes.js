const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("my API is working");
});

module.exports = router;
