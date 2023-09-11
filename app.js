const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();

mongoose.connect("mongodb://localhost/muber");
app.use(express.json());

routes(app);

module.exports = app;
