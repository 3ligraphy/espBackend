const lysdModel = require("../models/lysdmodel");

// get items
const getLysdController = async (req, res, next) => {
    try {
      const lysd = await lysdModel.findOne().sort({ createdAt: -1 });
      res.status(200).json(lysd);
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };
  

//add items
const addLysdController = async (req, res, next) => {
    try {
      const newLysd = await lysdModel.create(req.body);
      res.status(201).send("Item created successfully!");
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };

module.exports = {
  getLysdController,
  addLysdController
};