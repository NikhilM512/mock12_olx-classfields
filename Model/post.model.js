const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  postedAt: String,
  price: String,
});

const postmodel = mongoose.model("postData", PostSchema);

module.exports = { postmodel };