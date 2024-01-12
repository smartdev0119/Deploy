const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/v1/user/auth/google/callback"
},
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in your database
      User.findOne({ googleId: profile.id })
        .then(user => {
          if (user) return done(undefined, user);
          else {
            User.create({ googleId: profile.id, email: profile.emails[0].value })
              .then((user) => done(undefined, user))
              .catch((err) => done(err, undefined));
          }
        })
        .catch((err) => done(err, undefined));
    } catch (error) {
      return done(error, undefined);
    };
  }
));

// Serialize user into the sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the sessions
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});