const express = require('express');
const cors = require('cors');

//load environment variables in .env file
require('dotenv').config();

//connect to mongodb using mongoose (make sure you've already loaded
//your dotenv file)
const connectDB = require('./config/db');

// instantiate routes 
const books = require('./routes/api/books');


//instantiates express
const app = express();

//connect to the DB 
connectDB();

//allow cross origin requests (this is for production)
//production code = code that hasn't been released
app.use(cors({ origin: true, credentials: true}))
app.options("*", cors());

//middle ware 
// allows us to modify POST requests 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//welcome page 
app.get('/', (req, res) => res.send("Hello World!"));

// use books routes
app.use('/api/books', books);


//sets the port defaults to 8000
const port = process.env.PORT || 8000

//runs the application on port 8000
app.listen(port, () => console.log(`server running on port ${port}`))