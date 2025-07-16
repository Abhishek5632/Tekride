const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));

app.get("/offline", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "offline.html"));
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("*", (req, res) => {
  res.status(404).send("404 - Page Not Found");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
