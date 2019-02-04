const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gymSchema = new Schema({
  name: String,
  lat: Number,
  lng: Number,
  raid: {
    type: Schema.Types.ObjectId,
    ref: "Raid"
  },
});

const Gym = mongoose.model("Gym", gymSchema);

module.exports = Gym;
