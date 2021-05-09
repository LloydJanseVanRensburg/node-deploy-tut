require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join("public", "index.html"));
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
