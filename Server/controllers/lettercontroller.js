const LetterModel = require("../models/letterModel.js");

const getLetter = async (req, res) => {
  try {
    const letter = await LetterModel.find();
    res.status(200).json(letter);
  } catch (error) {
    res.status(404).json(console.log(error.message));
  }
};

module.exports = { getLetter };
