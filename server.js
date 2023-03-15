const express = require("express");
const app = express();
const PORT = 6969;

app.use(cors());

const rappers = {
 "21 savage": {
  age: 29,
  birthName: "Sheyaa Bin Abraham-Joseph",
  birthLocation: "London, England",
 },
 "chance the rapper": {
  age: 29,
  birthName: "Chancelor Bennett",
  birthLocation: "Chicago, Illinois",
 },
 dylan: {
  age: 29,
  birthName: "Dylan",
  birthLocation: "Dylan",
 },
};

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapper", (req, res) => {
 const rapper = req.params.rapper.toLowerCase();
 if (rappers[rapper]) res.json(rappers[rapper]);
 else res.json(rappers["dylan"]);
});

app.listen(process.env.PORT || PORT, () => {
 console.log(`running on http://localhost:${PORT}`);
});
