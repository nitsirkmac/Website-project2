require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(process.env.DATABASE_URL, {})

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo No5"));
db.on("disconnected", () => console.log("mongo disconnected"));

module.exports = mongoose;