//network call using Express JS
const express = require("express");
const app = express();

//Middelewear
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json()); // Use built-in middleware for parsing JSON

//db.js
const db = require("./db");

// Use CORS to handle cross-origin requests
const cors = require("cors");
app.use(cors());

//.env
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//Authentication And Authorization
const authRouter = require("./routes/AuthUserRoute");
app.use("/user", authRouter);

//Blogs Route
const blogsRoute = require("./routes/BlogsRoute");
app.use("/blog", blogsRoute);

app.listen(PORT, () => {
  console.log("Server Runing... http://localhost:5000/");
  //The app starts a server and listens on port 3000 for connections.
});
