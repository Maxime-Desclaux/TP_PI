const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/users', (req, res) => {
  res.json([{ name: "Maxime" }]);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});