const User = require('../models/User');

const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET_KEY || 'Bear');
}

exports.register = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.err('Email and password must be provided');
  }

  User.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        res.err("Email is already in use.");
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) res.err(err);
          bcrypt.hash(password, salt, null, (err, hash) => {
            if (err) res.err(err);
            const newUser = {
              email: email,
              password: hash
            };
            User.create(newUser)
              .then((user) => res.res(tokenForUser(user)))
              .catch((err) => res.err(err));
          })
        })
      }
    })
    .catch(err => res.err(err));
}

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            res.err(err);
          }
          if (isMatch) res.res(tokenForUser(user));
          else res.err("Password Incorrect!")
        });
      } else {
        res.err('This email is not registered.');
      }
    });
}
