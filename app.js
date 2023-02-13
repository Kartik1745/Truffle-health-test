const express = require("express");

const app = express();
const port = 3000;

const medicalBills = [];

app.use(express.json());

app.get("/items", (req, res) => {
  res.status(200).json(medicalBills);
});

app.post("/items", (req, res) => {
  const bill = req.body;
  medicalBills.push(bill);
  res.status(201).json(bill);
});

app.listen(port, () => {
  console.log(`Medical bill upload service running on port ${port}`);
});

module.exports = app.listen(4000);