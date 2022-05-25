const router = require("express").Router();
const User = require("../models/User.model");

//get profile page of user

router.get("/users/:userId", (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(adId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  User.findById(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log("error getting details of a user", err);
      res.status(500).json({
        message: "error getting details of a user",
        error: err,
      });
    });
});


module.exports = router;
