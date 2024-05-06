const FanState = require('../models/FanState');  // Adjust the path as necessary

// POST a new fan state
exports.addFanState = async (req, res) => {
  try {
    const newFanState = new FanState({
      isOpen: req.body.isOpen
    });
    await newFanState.save();
    res.status(201).send(newFanState);
  } catch (error) {
    res.status(400).send(error);
  }
};

// GET the latest fan state
exports.getFanState = async (req, res) => {
  try {
    const fanState = await FanState.findOne().sort({ createdAt: -1 });
    res.status(200).send(fanState);
  } catch (error) {
    res.status(500).send(error);
  }
};
