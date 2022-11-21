const express = require("express");
const { ObjectId } = require("mongodb");
const { body, query, validationResult } = require("express-validator");
const db_crud = require("../db_crud");

// Router that serves the crud services
const router = express.Router();

router.get("/read", async function (req, res) {
  let data = [];

  try {
    await db_crud.connectToDB();

    const doc_id = req.query.doc_id;

    if (doc_id == "undefined") {
      data = await db_crud.readAll();
    } else {
      data = await db_crud.readOne({ _id: ObjectId(doc_id) });
    }

    return res.json(data);
  } catch (e) {
    console.log(e);
  } finally {
    db_crud.disconnectFromDB();
  }
});

router.post(
  "/update",
  body("name").isAlpha("en-US", {ignore: " "}).isLength({ min: 1 }),
  body("sex").isAlpha().isLength({ min: 1 }),
  body("date_of_birth").isISO8601().isBefore().toDate(),
  body("breed").isAlpha("en-US", {ignore: " "}).isLength({ min: 1 }),
  body("city").isAlpha("en-US", {ignore: " "}).isLength({ min: 1 }),
  body("province").isAlpha("en-US", {ignore: " "}).isLength({ min: 1 }),
  async function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await db_crud.connectToDB();

      const data = req.body;

      let result;
      // If Id exists, update record. If not, add new record
      if (data.doc_id) {
        result = await db_crud.updateOne({_id: ObjectId(data.doc_id)}, {$set: data});
      } else {
        result = await db_crud.insertOne(data);
      }

      console.log(result);
      return res.redirect(`back`);
    } catch (e) {
      console.log(e);
    } finally {
      db_crud.disconnectFromDB();
    }
  }
);

router.get("/delete", 
  query("doc_id").isAlphanumeric(),
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await db_crud.connectToDB();

      const doc_id = req.query.doc_id;

      const result = await db_crud.deleteOne({ _id: ObjectId(doc_id) });
      console.log(result);
      return res.redirect(`back`);
    } catch (e) {
      console.log(e);
    } finally {
      db_crud.disconnectFromDB();
    }
});

module.exports = router;
