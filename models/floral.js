require('dotenv').config();
const mongoose = require('./connection');

const floralSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
})

const Floral = mongoose.model('floral', floralSchema)

module.exports = Floral;