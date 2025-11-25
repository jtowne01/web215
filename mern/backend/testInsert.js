const mongoose = require('mongoose');
const Instrument = require('./models/Instrument');

mongoose.connect('https://jauntytegu.onrender.com/api/instruments')
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
        },
        {
            instrument: "Guitar",
            brand: "Fender",
            model: "Stratocaster American Professional II",
            price: 1799,
            condition: "Excellent",
            status: "New"
        },
        {
            instrument: "Piano",
            brand: "Yamaha",
            model: "P-125 Digital Piano",
            price: 649,
            condition: "Like New",
            status: "Used"
        },
        {
            instrument: "Violin",
            brand: "Stentor",
            model: "Student II 4/4",
            price: 189,
            condition: "Good",
            status: "New"
        },
        {
            instrument: "Drums",
            brand: "Pearl",
            model: "Export EXX 5-Piece Kit",
            price: 699,
            condition: "Very Good",
            status: "New"
        },
        {
            instrument: "Saxophone",
            brand: "Yamaha",
            model: "YAS-280 Alto Saxophone",
            price: 2099,
            condition: "Mint",
            status: "New"
        },
        {
            instrument: "Bass Guitar",
            brand: "Ibanez",
            model: "SR300E",
            price: 449,
            condition: "Excellent",
            status: "Used"
        },
        {
            instrument: "Keyboard",
            brand: "Roland",
            model: "FP-30X Digital Piano",
            price: 749,
            condition: "Good",
            status: "Used"
        },
        {
            instrument: "Trumpet",
            brand: "Bach",
            model: "TR300H2",
            price: 549,
            condition: "Very Good",
            status: "New"
        },
        {
            instrument: "Acoustic Guitar",
            brand: "Taylor",
            model: "214ce Deluxe",
            price: 1299,
            condition: "Excellent",
            status: "Used"
        },
        {
            instrument: "Clarinet",
            brand: "Buffet Crampon",
            model: "E11",
            price: 899,
            condition: "Like New",
            status: "New"
        },
        {
            instrument: "Electric Guitar",
            brand: "Gibson",
            model: "Les Paul Standard '50s",
            price: 2499,
            condition: "Mint",
            status: "New"
        },
        {
            instrument: "Cello",
            brand: "Cecilio",
            model: "CCO-100 4/4",
            price: 399,
            condition: "Good",
            status: "New"
        },
        {
            instrument: "Flute",
            brand: "Gemeinhardt",
            model: "2SP",
            price: 495,
            condition: "Very Good",
            status: "Used"
        },
        {
            instrument: "Ukulele",
            brand: "Kala",
            model: "KA-15S Soprano",
            price: 79,
            condition: "Excellent",
            status: "New"
        },
        {
            instrument: "Trombone",
            brand: "Yamaha",
            model: "YSL-354 Tenor",
            price: 1299,
            condition: "Good",
            status: "Used"
        },
        {
            instrument: "Banjo",
            brand: "Deering",
            model: "Goodtime 2",
            price: 569,
            condition: "Like New",
            status: "New"
        },
        {
            instrument: "French Horn",
            brand: "Holton",
            model: "H179 Double Horn",
            price: 3299,
            condition: "Very Good",
            status: "Used"
        },
        {
            instrument: "Mandolin",
            brand: "Eastman",
            model: "MD305",
            price: 449,
            condition: "Excellent",
            status: "New"
        },
        {
            instrument: "Tuba",
            brand: "Jupiter",
            model: "JTU1010 BBb",
            price: 2899,
            condition: "Good",
            status: "New"
        },
        {
            instrument: "Harmonica",
            brand: "Hohner",
            model: "Marine Band Classic (Key of C)",
            price: 42,
            condition: "Mint",
            status: "New"
        }
    ]);

    console.log("Inserted sample instruments.");
    process.exit();
});
