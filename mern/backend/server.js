const express = require('express'); 

const mongoose = require('mongoose'); 

const cors = require('cors'); 

const bodyParser = require('body-parser'); 

const authRoutes = require('./routes/auth'); 

const app = express(); 

const instrumentRoutes = require('./routes/instruments');

const allowedOrigins = [
    "http://localhost:3000",
    "https://musicmarket215.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(bodyParser.json()); 
app.use('/api/auth', authRoutes); 
app.use('/api/instruments', instrumentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

mongoose.connection.on('connected', () => {
    console.log("MongoDB connected!");
});

mongoose.connection.on('error', (err) => {
    console.log("MongoDB error:", err);
});




