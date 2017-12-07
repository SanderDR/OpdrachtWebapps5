var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let Reactie = mongoose.model('Reactie');
let Zoekertje = mongoose.model('Zoekertje');
let User = mongoose.model('User');


router.post('/add', function(req, res, next){
  if(!req.body.inhoud){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  var reactie = new Reactie();
  reactie.inhoud = req.body.inhoud;
  reactie.when = new Date();
  User.find({'username' : req.body.by}, function(err, docs){
    let user = docs[0]._id;
    reactie.by = user;
    reactie.save();
  });
  Zoekertje.findById(req.body.zoekertjeId, function (err, zoekertje) {
    zoekertje.comments.push(reactie._id);
    zoekertje.save(function (err){
      if(err){ return next(err); }
      return res.json({added: true})
    });
  });
});

module.exports = router;
