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
router.get('/:id', (req, res) => {
    Floral.findById(req.params.id, (err, foundFloral) => {
        res.render('florals/show.ejs', {
            floral: foundFloral,
            id: req.params.id,
        })
    })
})

module.exports = router;