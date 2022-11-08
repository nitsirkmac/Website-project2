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
router.get('/new', (req, res) => {
    Floral.find({}, (err, allFlorals) => {
        res.render('florals/new.ejs')
    })
})

// DELETE

// UPDATE

// CREATE
router.post('/', (req, res) => {
    Floral.create(req.body, (err, createdFloral) => {
        res.redirect('/florals')
    })
})

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