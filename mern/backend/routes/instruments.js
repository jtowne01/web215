const express = require('express');
const router = express.Router();
const Instrument = require('../models/Instrument');
const auth = require('../middleware/auth');

console.log("Instruments route loaded!");

// GET all instruments
router.get('/', async (req, res) => {
    try {
        const instruments = await Instrument.find();
        res.json(instruments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// CREATE new instrument
router.post('/', auth, async (req, res) => {
    try {
        const newInstrument = new Instrument(req.body);
        await newInstrument.save();
        res.json(newInstrument);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE instrument
router.put('/:id', auth, async (req, res) => {
    try {
        const updated = await Instrument.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE instrument
router.delete('/:id', auth, async (req, res) => {
    try {
        await Instrument.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
