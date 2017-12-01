var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let jwt = require('express-jwt');
//let auth = jwt({secret: process.env.BACKEND_SECRET, userProperty: 'payload'});


module.exports = router;