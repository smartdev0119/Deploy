const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require("jsonwebtoken");

const AuthController = require('../../controller/Auth.controller');

router.post('/signup', AuthController.register);
router.post('/signin', AuthController.login);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: `${process.env.CLIENT_SERVER_URL}/auth` }),
  (req, res) => {
    // Successful authentication, redirect home.
    jwt.sign({ user: req.user }, process.env.SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
      if (err) res.err(err);
      res.cookie('token', token);
      res.redirect(`${process.env.CLIENT_SERVER_URL}/jobs/hire`);
    });
  });

module.exports = router;