const cors = require("cors");
require("dotenv").config(); 

const express = require("express");
const router = require("./routes/tasks");

// NOTE: Playing with MongoDB 
const {connectToDB, addToDB} = require("./db");

const app = express();
// const port = 3000;
const port = 5000;
app.use(cors());
// Middleware that parse string into json 
app.use(express.json());
app.use(express.urlencoded());
// Set views folder
app.set("views", "views");
// Set template 
app.set("view engine", "pug");
// Set static files folder
app.use(express.static("public"));
app.use("/api/tasks", router);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, async () => {
  console.log(`application is listening on port ${port}`);
  await connectToDB();
});
