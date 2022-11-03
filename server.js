const express = require('express')
const app = express()
const mongoose = require('./models/connection.js');
const middleware = require('./utils/middleware.js');
const PORT = process.env.PORT
middleware(app)

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(PORT, () =>
    console.log('nice day for a white wedding'))