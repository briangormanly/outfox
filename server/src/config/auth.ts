const express = require('express')
const auth = express();


// Passport Middleware

auth.use(passport.initialize());
auth.use(passport.session());
