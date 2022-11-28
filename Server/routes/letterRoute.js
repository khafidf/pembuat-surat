const express = require("express");
const { getLetter } = require("../controllers/letterController");
const router = express.Router();

router.get("/", getLetter);

module.exports = router;
