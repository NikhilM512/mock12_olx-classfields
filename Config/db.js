const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require('dotenv').config();

const connection = mongoose.connect("mongodb+srv://nikhil:nikhilmagar@cluster0.v5jvovv.mongodb.net/mock12olxClassifields?retryWrites=true&w=majority");

module.exports = { connection };