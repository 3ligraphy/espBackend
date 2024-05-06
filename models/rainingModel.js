const mongoose = require('mongoose');

const rainingScheme = new mongoose.Schema({
  isRaining: {
    type: Boolean,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const raining = mongoose.model('raining', rainingScheme);

module.exports = raining;
