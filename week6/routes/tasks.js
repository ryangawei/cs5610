const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.send('<h1>List all tasks</h1>')
  })
  
router.get('/:taskId', (req, res) => {
    console.log(req.params);
    res.send(`You've sent the routing parameters ${JSON.stringify(req.params)}`);
  })

module.exports = router;