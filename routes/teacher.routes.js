const router = require("express").Router();

const Teacher = require("../models/Teacher.model");
const Subject = require("../models/Subject.model");

//  POST  -  Creates a teacher
router.post("/teachers", (req, res, next) => {
  const { name, email, password, img, subject, location, price } = req.body;

  Teacher.create({ name, email, password, img, subject, location, price })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
