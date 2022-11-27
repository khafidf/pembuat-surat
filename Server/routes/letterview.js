const express = require("express");
const { getLetter } = require("../controllers/lettercontroller");
const router = express.Router();

router.get("/", getLetter);

module.exports = router;
