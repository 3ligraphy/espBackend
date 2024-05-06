const express = require("express");
const {
  getLysdController,
  addLysdController
} = require("../controllers/lysdControllers");

const router = express.Router();

//routes

//Method - get
router.get("/get-lysd", getLysdController);
router.post("/add-lysd", addLysdController);





module.exports = router;