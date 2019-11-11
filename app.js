const express = require("express");
const app = express(); // app gives us the abiltiy to set up routes much easier
const mongoose = require('mongoose');
require('dotenv/config');

// MiddleWare: A function that runs when routes are hit...
// when you go to this route, this function will run. 
app.use('/post', () => {
  console.log('This is the middleware running');
})

// ROUTES
app.get('/', (req, res) => {
  res.send('This is the HOME route');
});

app.get('/post', (req, res) => {
  res.send('This is the url for /post')
})

// Connect to Database
mongoose.connect(
  process.env.DB_CONNECTION,  // link to env file to get the key code link(to protect the information; secturity);
  { useNewUrlParser: true },
  () => console.log("SUCESSFULLY CONNECTED TO DATABASE"));

// LISTEN TO SERVER
app.listen(3000);

