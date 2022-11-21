const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.mongodb_uri;
const client = new MongoClient(uri);

async function connectToDB() {
  await client.connect();
  console.log("Connected to db.");
}

async function readAll() {
  const cursor = await client.db("cs5610").collection("cats").find();
  const data = cursor.toArray();
  return data;
}

async function readOne(query) {
  const data = await client.db("cs5610").collection("cats").findOne(query);
  return data;
}
  
async function updateOne(query, doc, options) {
  const result = await client.db("cs5610").collection("cats").updateOne(query, doc, options);
  return result;
}

async function insertOne(doc) {
  const result = await client.db("cs5610").collection("cats").insertOne(doc);
  return result;
}

async function deleteOne(query) {
  const result = await client.db("cs5610").collection("cats").deleteOne(query);
  return result;
}

async function disconnectFromDB() {
  await client.close();
  console.log("Disconnect from db.");
}

module.exports = {
  connectToDB: connectToDB,
  updateOne: updateOne,
  readAll: readAll,
  readOne: readOne,
  insertOne: insertOne,
  deleteOne: deleteOne,
  disconnectFromDB: disconnectFromDB,
};
