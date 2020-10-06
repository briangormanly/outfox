var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const sqlize = require('sequelize');

const bcrypt = require('bcryptjs')

// Load User Model 
const User = require('../api/models/User')


// Need to check why i need to declare the passport type
module.exports = (passport) => {
    passport.use(
      new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
        
        // Match user
        User.findOne({
          username: username
        }).then(user => {
          if (!user) {
            return done(null, false, { message: 'That username is not registered' });
          }
  
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password invalid' });
            }
          });
        });
      })
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
    
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });
}