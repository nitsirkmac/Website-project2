const express = require("express");
const router = express.Router();
const Floral = require('../models/floral');
// const floralData = require('../models/seed');

// SEED
// router.get('/seed', (req, res) => {
//     Floral.create(floralData, (err, data) => {
//         res.redirect('/florals')
//     })
// })

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
router.delete('/:id', (req, res) => {
    Floral.findByIdAndRemove(req.params.id, (err, foundFloral) => {
        res.redirect('/florals')
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Floral.findByIdAndUpdate (
        req.params.id,
        req.body,
        { new: true },
        (err, updatedFloral) => {
            res.redirect(`florals/${req.params.id}`)
        }
    )
})

// RESERVE
router.put('/reservation/:id', (req, res) => {
    Floral.findByIdAndUpdate (
        req.params.id,
        req.body,
        (err, reservedFloral) => {
            console.log(reservedFloral)
            reservedFloral.save()
            res.redirect(`/florals/${req.params.id}`)
        }
    )
})

// CREATE
router.post('/', (req, res) => {
    Floral.create(req.body, (err, createdFloral) => {
        res.redirect('/florals')
    })
})

//EDIT
router.get('/:id/edit', (req, res) => {
    Floral.findById(req.params.id, (err, foundFloral) => {
        res.render('florals/edit.ejs', {
            floral: foundFloral,
            id: req.params.id,
        })
    })
})

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