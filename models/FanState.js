const mongoose = require('mongoose');

const fanStateSchema = new mongoose.Schema({
  isOpen: {
    type: Boolean,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const fanState = mongoose.model('fanState', fanStateSchema);

module.exports = fanState;
