const mongoose = require('mongoose');
const Instrument = require('./models/Instrument');

mongoose.connect('mongodb://localhost:27017/instruments')
.then(async () => {
    await Instrument.insertMany([
        {
            instrument: "Guitar",
            brand: "Fender",
            model: "Stratocaster",
            price: 1200,
            condition: "Excellent",
            status: "Used"
        },
        {
            instrument: "Piano",
            brand: "Yamaha",
            model: "U1",
            price: 3500,
            condition: "Good",
            status: "New"
        }
    ]);

    console.log("Inserted sample instruments.");
    process.exit();
});