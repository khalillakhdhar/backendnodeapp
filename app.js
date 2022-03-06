// app.js

const express = require('express'); //routage
var cors = require('cors'); //autorisation des accés
const mongoose = require('mongoose'); //communication à la BD

// routes
const rappels=require("./routes/api/Rappel");
//const books = require('./routes/api/books');

const app = express();

mongoose.connect(
    "mongodb://localhost:27017/exemple"
  );

// Connect Database

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
//app.use('/api/books', books);
app.use('/rappel',rappels);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
