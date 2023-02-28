const express = require("express");
const { postmodel } = require("./Model/post.model");
const cors = require("cors");
const { connection } = require("./Config/db");

require('dotenv').config();
const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.json());
app.use(cors(
    {
        origin:"*"
    }
    ));


app.get("/", async (req, res) => {
  let totalLength = await postmodel.find();
  let page = +(req.query.page) || 1;
  let skip = (page - 1) * 4;
  let data = await postmodel.find().skip(skip).limit(4);
  res.send({data:data,total:totalLength});
});

app.post("/post", async (req, res) => {
  let user = await new postmodel(req.body);
  await user.save();
  res.send("Hurray...Posted sucessfully!");
});

app.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  let r = await postmodel.findOneAndDelete({ _id: id });

  res.send({ res:r, msg: "Deleted sucessfully" });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connect ot DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running on port `);
});