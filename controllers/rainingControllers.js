const Raining = require('../models/rainingModel');  // Adjust the path as necessary

// POST a new raining status
exports.addRaining = async (req, res) => {
  try {
    const newRaining = new Raining({
      isRaining: req.body.isRaining
    });
    await newRaining.save();
    res.status(201).send(newRaining);
  } catch (error) {
    res.status(400).send(error);
  }
};

// GET the latest raining status
exports.getRaining = async (req, res) => {
  try {
    const rainingStatus = await Raining.findOne().sort({ createdAt: -1 });
    res.status(200).send(rainingStatus);
  } catch (error) {
    res.status(500).send(error);
  }
};
