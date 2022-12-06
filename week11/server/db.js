const {MongoClient} = require('mongodb');
require("dotenv").config();

const uri = process.env.mongodb_uri;
const client = new MongoClient(uri);

async function connectToDB() {
    try {
        await client.connect();
        console.log("Connected to db.")
    } catch (e) {
        console.error(e);
    }
}

async function addToDB(task) {
    try{
        const result = await client.db("cs5610").collection("tasks").insertOne(task);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

async function readAll() {
    try{
        const cursor = await client.db("cs5610").collection("tasks").find();
        const data = cursor.toArray();
        // console.log(data);
        return data;
    } catch (e) {
        console.error(e);
    }
}

async function readOne(query) {
    try{
        const data = await client.db("cs5610").collection("tasks").findOne(query);
        return data;
    } catch (e) {
        console.error(e);
    }
}

async function deleteOne(query) {
    try{
        const data = await client.db("cs5610").collection("tasks").deleteOne(query);
        return data;
    } catch (e) {
        console.error(e);
    }
}

async function disconnectFromDB() {
    try {
        await client.close();
        console.log("Disconnect from db.")
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    connectToDB: connectToDB,
    addToDB: addToDB,
    readAll: readAll,
    readOne: readOne,
    deleteOne: deleteOne,
    disconnectFromDB, disconnectFromDB
}