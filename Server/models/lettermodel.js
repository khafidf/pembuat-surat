const { Schema, model } = require("mongoose");
// contoh
const Letter = new Schema({
  name: String,
  numb: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Rapat", Letter);
