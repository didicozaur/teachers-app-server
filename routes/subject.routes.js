const router = require("express").Router();
const { default: mongoose } = require("mongoose");

const Subject = require("../models/Subject.model");
const Teacher = require("../models/Teacher.model");

//  POST   -  Creates a new suject
router.post("/subjects", (req, res, next) => {
  const { title, description, level, img } = req.body;

  Subject.create({ title, description, level, img })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
