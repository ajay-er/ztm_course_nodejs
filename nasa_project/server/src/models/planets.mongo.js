const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
  keplerName: String,
  required: true,
});

module.exports = mongoose.model('Planet',planetsSchema);