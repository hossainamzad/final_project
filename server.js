// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');

// initialize the app
const app = express();
require('dotenv').config();

// set up static and views
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// set the port, either from an environmental variable or manually
const PORT = process.env.PORT || 3000;
// tell the app where to serve
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// index route
// app.get('/', function(req,res){
//   res.send('HELLOoOOOoOOoOOOooO, WORLD! <h1>This is ROOT route</h1>');
// });
// using ES-6
app.get('/', (req, res) => {
    res.send('Hello world!');
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);
// get anything that hasn't already been matched
app.use('*', (req, res) => {
    // send a response with status 404
    res.status(404).send(err);
});
