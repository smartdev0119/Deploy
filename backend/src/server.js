const express = require('express');
const session = require('express-session');
const passport = require('passport');


require('dotenv').config();
const mongoUri = process.env.MONGO_URI || "";
const port = process.env.PORT || 5000;

require('./config/passport');

const morgan = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err))

const app = express();

// Configure session middleware - required for Passport
app.use(session({
  secret: process.env.SECRET_KEY || 'Bear',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());


app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

app.use(require('./utils/resHelper'));
app.use(require('./routes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});