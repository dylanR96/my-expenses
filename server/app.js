const express = require("express");
const users = require("./routes/users.js");
const app = express();

app.use(express.json());

app.use("/api", users);

module.exports = app;
