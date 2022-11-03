require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const floralsRouter = require('../controllers/florals');

const middleware = (app) => {
    app.use(express.urlencoded({extended: true}));
    app.use(methodOverride("_method"));
    app.use("/florals", floralsRouter);
    app.use(express.static('public'))
}

module.exports = middleware;