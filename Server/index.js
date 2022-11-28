const express = require("express");
const cors = require("cors");

const port = 5000;
const app = express();

require("./dbconfig.js");

const LetterView = require("./routes/letterRoute.js");

app.use(cors());
app.use(express.json());

app.use("/letter", LetterView);

app.listen(port, () => console.log(`Server running on port ${port}`));
