require("dotenv").config();
const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join("public", "index.html"));
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
