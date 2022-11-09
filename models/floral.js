require('dotenv').config();
const mongoose = require('./connection');

const floralSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    img: { type: String, required: false },
    price: { type: Number, required: true },
})

const Floral = mongoose.model('floral', floralSchema)

module.exports = Floral;