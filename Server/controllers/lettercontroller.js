const express = require("express");
const LetterModel = require("../models/lettermodel.js");

const getLetter = async (req, res) => {
  const datas = await LetterModel.find();
  res.status(200).json(datas);
};

module.exports = { getLetter };
