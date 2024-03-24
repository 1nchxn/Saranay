const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//saronchristian00  xtiansaron00
//cDh0N74vTgVBmUJa  U1E0btn7O8AWniGd

//config for mongodb

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@deli-client-cluster.q5d9fmv.mongodb.net/Saranayts-Deli-Client?retryWrites=true&w=majority`
  )
  .then(console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log("Error connecting to MongoDB", error));
//JWT auth
app.post("/jwt", async (req, res) => {
  const user = req.body;
  // console.log(user)
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
});

// routes here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
const userRoutes = require("./api/routes/userRoutes");
app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.use("/users", userRoutes);
//

app.get("/", (req, res) => {
  res.send("Gumagana database hehe!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
