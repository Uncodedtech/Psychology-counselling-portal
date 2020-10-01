const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

app.listen(4000, function() {
  console.log("Server running");
});
