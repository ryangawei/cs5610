const express = require('express');
const router = express.Router();
const db = require("../public/javascripts/db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  // Display cat data from db
  const data = await db.readAll();

  const items = [];

  const now = new Date();
  let i = 0;
  for (const doc of data) {
    const sex = doc.sex[0].toUpperCase() + doc.sex.slice(1);

    let age = now.getFullYear() - doc.date_of_birth.getFullYear();
    
    if (age > 0) {
      age = `${age} years old`;
    }
    else {
      age = now.getMonth() - doc.date_of_birth.getMonth();
      age = `${age} months old`;
    }

    item = {
      _id: doc._id,
      card_id: i,
      name: doc.name,
      sex: sex,
      age: age,
      breed: doc.breed,
      city: doc.city,
      province: doc.province
    }
    items.push(item);
    i++;
  };

  res.render('index', {pretty: true, items: items});
});

module.exports = router;