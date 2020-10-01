//jshint esversion:6

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
























// new schema
const listSchema = {

  name : String,
  items : [itemsSchema]
};

app.set('view engine', 'ejs');
const data_items =[""];
















// creating schema

const itemsSchema = {
  name : String
};

app.listen(4000, function() {
  console.log("Server running");
});
