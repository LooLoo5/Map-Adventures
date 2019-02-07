const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stopSchema = new Schema({
  name: String,
  lat: Number,
  lng: Number,
});

const Stop = mongoose.model("Stop", stopSchema);

module.exports = Stop;
