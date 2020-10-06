const LocalStrategy = require('passport-local').Strategy;
const passport = require ('passport')
const sqlize = require('sequelize');

const bcrypt = require('bcryptjs')

// Load User Model 
const User = require('../api/models/User')


// Need to check why i need to declare the passport type
module.exports = function(passport) {
    passport.use


}