const express = require("express");
const { ObjectId } = require("mongodb");
const { body, validationResult } = require("express-validator");
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
  "/upsert",
  body("name").isAlpha("en-US", {ignore: " "}).isLength({ min: 1 }),
  body("sex").isAlpha().isLength({ min: 1 }),
  body("date_of_birth").isISO8601().toDate(),
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

      const result = await db_crud.insert(data);
      console.log(result);

    } catch (e) {
      console.log(e);
    } finally {
      db_crud.disconnectFromDB();
    }
  }
);

module.exports = router;
