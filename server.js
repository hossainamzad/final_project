// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const path = require('path');


// initialize the app
const app = express();
require('dotenv').config();

// use middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// set up static and views
app.use(express.static('public'));
// set which templating engine
app.set('view engine', 'ejs');
// set where the app should find the views
app.set('views', path.join(__dirname, 'views'));


// set the port, either from an environmental variable or manually
const PORT = process.env.PORT || 3001;
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

const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);
const itemsRoutes = require('./routes/item-routes');
app.use('/items', itemsRoutes);
// get anything that hasn't already been matched
app.use('*', (req, res) => {
    // send a response with status 404
    res.status(404).send(err);
});
