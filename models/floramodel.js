const mongoose = require('mongoose');

const floraSchema = new mongoose.Schema({
  moisture: {
    type: Number,
  },
  conductivity: {
    type: Number,
  },
  light: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const flora = mongoose.model('flora', floraSchema);

module.exports = flora;
