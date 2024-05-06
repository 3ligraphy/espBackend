const floraModel = require("../models/floramodel");

// get items
const getFLoraController = async (req, res, next) => {
    try {
      const flora = await floraModel.findOne().sort({ createdAt: -1 });
      res.status(200).json(flora);
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };
  

//add items
const addFloraController = async (req, res, next) => {
    try {
      const newFlora = await floraModel.create(req.body);
      res.status(201).send("Item created successfully!");
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };

module.exports = {
  getFLoraController,
  addFloraController
};