const WaterPumpState = require('../models/waterPumpState');  // Adjust the path as necessary

// POST a new water pump state
exports.addWaterPumpState = async (req, res) => {
  try {
    const newWaterPumpState = new WaterPumpState({
      isOpen: req.body.isOpen
    });
    await newWaterPumpState.save();
    res.status(201).send(newWaterPumpState);
  } catch (error) {
    res.status(400).send(error);
  }
};

// GET the latest water pump state
exports.getWaterPumpState = async (req, res) => {
  try {
    const waterPumpState = await WaterPumpState.findOne().sort({ createdAt: -1 });
    res.status(200).send(waterPumpState);
  } catch (error) {
    res.status(500).send(error);
  }
};
