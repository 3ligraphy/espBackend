const mongoose = require('mongoose');

const waterLevelSchema = new mongoose.Schema({
  waterlevelPrecentage: {
    type: Number,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const raining = mongoose.model('waterLevel', waterLevelSchema);

module.exports = raining;
