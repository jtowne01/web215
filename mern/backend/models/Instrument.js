const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
    instrument: String,
    brand: String,
    model: String,
    price: Number,
    condition: String,
    usedOrNew: String,
});


module.exports = mongoose.model('Instrument', instrumentSchema);
