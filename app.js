//jshint esversion:6

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

























// new schema
const listSchema = {

  name : String,
  items : [itemsSchema]
};


const data_items =[""];

app.listen(4000, function() {
  console.log("Server running");
});
