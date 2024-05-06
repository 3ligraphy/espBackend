const WaterLevel = require('../models/waterLevel');  // Adjust the path as necessary

// POST a new water level
exports.addWaterLevel = async (req, res) => {
  try {
    const newWaterLevel = new WaterLevel({
      waterlevelPrecentage: req.body.waterlevelPrecentage
    });
    await newWaterLevel.save();
    res.status(201).send(newWaterLevel);
  } catch (error) {
    res.status(400).send(error);
  }
};

// GET the latest water level
exports.getWaterLevel = async (req, res) => {
  try {
    const waterLevel = await WaterLevel.findOne().sort({ createdAt: -1 });
    res.status(200).send(waterLevel);
  } catch (error) {
    res.status(500).send(error);
  }
};
