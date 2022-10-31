const fs = require("fs");
const util = require("util");

// fs.writeFile("message.txt", "Hello!", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.readFile("message.txt", { encoding: "utf-8" }, function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

writeFilePromise("message.txt", "Hello")
  .then(() => {
    return readFilePromise("message.txt", { encoding: "utf-8" });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function testAsyncAwait() {
  try {
    await writeFilePromise("message.txt", "Hello");
    const data = await readFilePromise("message.txt", { encoding: "utf-8" });
    console.log(data)
  } catch (err) {
    console.log(err);
  }
}
testAsyncAwait();
// const logger = require('./logger.js');
// // console.log(logger)
// logger.logFunction();
// console.log(logger.versionVar)
const express = require("express");
const router = require("./routes/tasks");

const app = express();
const port = 3000;
app.set("views", "views");
app.set("view engine", "pug");
app.use(express.static("public"));
app.use("/tasks", router);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`application is listening on port ${port}`);
});
