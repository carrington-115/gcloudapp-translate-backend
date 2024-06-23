require("dotenv").config({ path: "/.env" });
const express = require("express");
const app = express();

app.use([express.json(), express.urlencoded({ extended: true })]);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server" });
});
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
