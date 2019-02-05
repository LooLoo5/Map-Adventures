const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raidSchema = new Schema({
  pokemon: String,
  level: String,
  hatched: Boolean,
  timeLeft: String,
  lat:Number,
  lng:Number,
//   raiders: Number,
});

const Raid = mongoose.model("Raid", raidSchema);

module.exports = Raid;
