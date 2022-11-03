const express = require("express");
const router = express.Router();
const Floral = require('../models/floral');

// INDEX
router.get('/', (req, res) => {
    Floral.find({}, (error, allFlorals) => {
        res.render('florals/index.ejs', {
            florals: allFlorals
        })
    })
})

// NEW

// DELETE

// UPDATE

// CREATE

//EDIT

// SHOW

module.exports = router;