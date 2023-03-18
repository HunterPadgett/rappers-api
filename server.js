const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6969;
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const connectionString = process.env.DB_CONNECTION_STRING;

MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(
 (client) => {
  const db = client.db("star-wars-crud");
  const collection = db.collection("rappers");

  app.set("view engine", "ejs");
  app.use(cors());
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/", (req, res) => {
   collection
    .find()
    .toArray()
    .then((data) => {
     res.render("index.ejs", { info: data });
    });
  });

  // app.get("/api/:rapper", (req, res) => {

  // });

  app.listen(process.env.PORT || PORT, () => {
   console.log(`running on http://localhost:${PORT}`);
  });
 }
);
