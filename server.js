const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6969;
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const connectionString = process.env.DB_CONNECTION_STRING;

app.set("view engine", "ejs");
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(
 (client) => {
  const db = client.db("star-wars-crud");
  const collection = db.collection("rappers");

  app.get("/", (req, res) => {
   collection
    .find()
    .sort({ likes: -1 })
    .toArray()
    .then((data) => {
     res.render("index.ejs", { info: data });
    });
  });

  app.post("/addRapper", (req, res) => {
   console.log(req.body);
   collection
    .insertOne({
     stageName: req.body.stageName,
     birthName: req.body.birthName,
     likes: 0,
    })
    .then((result) => {
     console.log(`rapper added`);
     res.redirect("/");
    })
    .catch((e) => console.log(`error in /addRapper post req... ${e}`));
  });

  app.delete("/deleteRapper", (req, res) => {
   console.log(req.body);
   collection
    .deleteOne({
     stageName: req.body.rapper,
    })
    .then((result) => {
     console.log(`rapper deleted`);
     res.json("rapper deleted");
    })
    .catch((e) => console.log(`error in /deleteRapper delete req... ${e}`));
  });

  function updateLikes(url, req, res) {
   collection
    .updateOne(
     {
      stageName: req.body.rapperName,
      birthName: req.body.birthName,
      likes: req.body.likes,
     },
     {
      $set: {
       likes: url === "/addLike" ? req.body.likes + 1 : req.body.likes - 1,
      },
     },
     { sort: { _id: -1 }, upsert: false }
    )
    .then((result) => {
     console.log(url === "/addLike" ? "added one like" : "removed one like");
     res.json(url === "/addLike" ? "added one like" : "removed one like");
    })
    .catch((e) => console.log(e));
  }

  app.put("/addLike", (req, res) => {
   updateLikes("/addLike", req, res);
  });

  app.put("/removeLike", (req, res) => {
   updateLikes("/removeLike", req, res);
  });

  app.listen(process.env.PORT || PORT, () => {
   console.log(`running on http://localhost:${PORT}`);
  });
 }
);
