const mongoose = require('mongoose');

const waterPumpSchema = new mongoose.Schema({
  isOpen: {
    type: Boolean,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const waterPumpState = mongoose.model('waterPumpState', waterPumpSchema);

module.exports = waterPumpState;
