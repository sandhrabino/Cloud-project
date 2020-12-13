const express = require("express");


const router = express.Router();

// Display the dashboard page
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});


module.exports = router;
