const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: String,
  author: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);