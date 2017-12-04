var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let Zoekertje = mongoose.model('Zoekertje');
let User = mongoose.model('User');


router.post('/zoekertje', function(req, res, next){
  if(!req.body.name || !req.body.price || !req.body.location){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  var zoekertje = new Zoekertje();
  zoekertje.name = req.body.username;
  zoekertje.description = req.body.name;
  zoekertje.price = req.body.email
  zoekertje.location = req.body.location;
  zoekertje.pic = req.body.pic;
  zoekertje.from = User.find({username: req.body.username});
  zoekertje.save(function (err){
    if(err){ return next(err); }
  });
});

module.exports = router;
