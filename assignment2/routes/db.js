const express = require("express");
const { ObjectId } = require("mongodb");
const db_crud = require("../db_crud");

const router = express.Router();

// TODO: also make db a service
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

  } catch (e) {
    console.log(e);
  } finally {
    db_crud.disconnectFromDB();
  }

  return res.json(data);
});

// TODO: also make db a service
router.get("/insert", async function (req, res) {
  let data = [];

  try {
    await db_crud.connectToDB();

    if (req.query.doc_id == "undefined") {
      data = await db_crud.readAll();
    } else {
      data = await db_crud.readOne({ _id: ObjectId(doc_id) });
    }
  } catch (e) {
    console.log(e);
  } finally {
    db_crud.disconnectFromDB();
  }

  return res.json(data);
});

module.exports = router;
