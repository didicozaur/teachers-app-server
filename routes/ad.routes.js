const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const Subject = require("../models/Subject.model");
const User = require("../models/User.model");
const Ad = require("../models/Ad.model");

//  POST  -  Creates a new ad
router.post("/ads", isAuthenticated, (req, res, next) => {
  const { title, subject, description, experience, location, price, levels } =
    req.body;

  Ad.create({
    title,
    description,
    experience,
    location,
    price,
    user: req.payload._id,
    levels,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// Get list of projects
router.get("/ads", (req, res, next) => {
  console.log('inside all ads page')
  Ad.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("error getting list of ads", err);
      res.status(500).json({
        message: "error getting list of ads",
        error: err,
      });
    });
});

//  Get details of a specific ad by id
router.get("/ads/:adId", (req, res, next) => {
  console.log('inside ad details page')
  const { adId } = req.params;
  console.log("hey there")

  if (!mongoose.Types.ObjectId.isValid(adId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Ad.findById(adId)
    .then((ad) => {
      console.log('>>>>>>>>>>>')
      console.log(ad)
      res.json(ad)})
    .catch((err) => {
      console.log("error getting details of a ad", err);
      res.status(500).json({
        message: "error getting details of a ad",
        error: err,
      });
    });
});

// Updates a specific project by id
// router.put("/ads/:adId", isAuthenticated, (req, res, next) => {
//   const { adId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(adId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Ad.findByIdAndUpdate(adId, req.body, { new: true })
//     .then((updatedAd) => res.json(updatedAd))
//     .catch((err) => {
//       console.log("error updating the Ad", err);
//       res.status(500).json({
//         message: "error updating the ad",
//         error: err,
//       });
//     });
// });

// // Delete a specific project by id
// router.delete("/ads/:adId", isAuthenticated, (req, res, next) => {
//   const { adId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(adId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Ad.findByIdAndRemove(adId)
//     .then((deteletedAd) => {
//       console.log("Successfully deleted the Ad");
//     })
//     .catch((err) => {
//       console.log("error deleting project", err);
//       res.status(500).json({
//         message: "error deleting project",
//         error: err,
//       });
//     });
// });

module.exports = router;
