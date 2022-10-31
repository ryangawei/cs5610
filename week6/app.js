// const fs = require("fs");

// fs.writeFile("tmp.txt", "Hello", (err) => {
//     // console.log(err);
//     fs.readFile("tmp.txt", {encoding: "utf-8"}, (err, data) => {
//         // console.log(err);
//         console.log(data);
//     });
// });

// const logger = require("./logger.js")
// logger.log();  
// console.log(logger.version);

const express = require("express");
const router = require("./routes/tasks");
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use("/tasks", router);

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World')
})

app.get('/users', (req, res) => {
  // console.log(req.params);
  res.send(`You've sent the query ${JSON.stringify(req.query)}`);
})
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})