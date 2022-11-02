const express = require("express");
const router = express.Router();
const axios = require("axios");
const { addToDB, readAll, readOne } = require("../db");
const path = require("path");

router.get("/newtask", async function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "newTask.html"));
});

router.get("/", async function (req, res) {
  try {
    const data = await readAll();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
  // axios
  //   .get("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => {,l,.
  //     res.status(response.status).json(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

router.get("/:taskId", async function (req, res) {
  try {
    // const todoResponse = await axios.get(
    //   `https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`
    // );
    // const userResponse = await axios.get(
    //   `https://jsonplaceholder.typicode.com/users/${todoResponse.data.userId}`
    // );
    const data = await readOne({
    });

    res.render("task", {
      id: todoResponse.data.id,
      title: todoResponse.data.title,
      user: userResponse.data.name,
    });
  } catch (err) {
    console.log(err.message);
  }
  // axios
  //   .get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`)
  //   .then((response) => {
  //     res.render("task", { id: response.data.id, title: response.data.title });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

router.get("/:taskId/users/:userId", function (req, res) {
  console.log(req.params);
  res.send(`You are viewing task with id ${req.params.taskId}`);
});

router.post("/", async function (req, res) {
  await addToDB(req.body);
  res.redirect(`https://jsonplaceholder.typicode.com/todos/1`);
});

module.exports = router;
