//create express server
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const adminRoutes = require("./routes/admin");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});
