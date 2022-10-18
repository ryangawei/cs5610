// const fs = require("fs");

// fs.writeFile("tmp.txt", "Hello", (err) => {
//     // console.log(err);
//     fs.readFile("tmp.txt", {encoding: "utf-8"}, (err, data) => {
//         // console.log(err);
//         console.log(data);
//     });
// });

const logger = require("./logger.js")
logger.log();
console.log(logger.version);