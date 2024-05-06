const express = require("express");
const {
  getFLoraController,
  addFloraController
} = require("../controllers/floraControllers");

const router = express.Router();

//routes

//Method - get

router.get("/get-flora", getFLoraController);
router.post("/add-flora", addFloraController);




module.exports = router;