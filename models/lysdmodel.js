const mongoose = require('mongoose');

const lysdSchema = new mongoose.Schema({
  temp: {
    type: Number,
  },
  humidity: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const lysd = mongoose.model('lysd', lysdSchema);

module.exports = lysd;
