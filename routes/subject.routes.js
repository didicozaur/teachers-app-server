const router = require("express").Router();
const { default: mongoose } = require("mongoose");

const Subject = require("../models/Subject.model");
const Ad = require("../models/Ad.model");

//  POST   -  Creates a new suject
router.post("/subjects", (req, res, next) => {
  const { title, description, level, img } = req.body;

  Subject.create({ title, description, level, img })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// Get list of subjects
router.get("/subjects", (req, res, next) => {
  Subject.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("error getting list of subjects", err);
      res.status(500).json({
        message: "error getting list of subjects",
        error: err,
      });
    });
});

//  Get details of a specific subject by id
router.get("/subjects/:subjectId", (req, res, next) => {
  const { subjectId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(subjectId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Subject.findById(subjectId)
    .then((subject) => res.json(subject))
    .catch((err) => {
      console.log("error getting details of a subject", err);
      res.status(500).json({
        message: "error getting details of a subject",
        error: err,
      });
    });
});

module.exports = router;
