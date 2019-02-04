const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gymSchema = new Schema({
  name: String,
  lat: Number,
  lon: Number
});

const Gym = mongoose.model("Gym", gymSchema);

module.exports = Gym;
