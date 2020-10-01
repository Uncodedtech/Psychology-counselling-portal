//jshint esversion:6

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))

const data_items =[""];

app.listen(4000, function() {
  console.log("Server running");
});
