const mongoose = require("mongoose");
require("dotenv").config();
const connection = () => mongoose.connect("mongodb+srv://raktimyoddha012:notes_app@cluster0.3z1b2hv.mongodb.net/?retryWrites=true&w=majority");

module.exports = {
  connection,
};
