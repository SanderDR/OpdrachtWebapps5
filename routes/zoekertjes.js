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
  zoekertje.name = req.body.name;
  zoekertje.description = req.body.description;
  zoekertje.price = req.body.price
  zoekertje.location = req.body.location;
  zoekertje.pic = req.body.pic;
  zoekertje.comments = [];
  User.find({'username' : req.body.from}, function(err, docs){
    let user = docs[0]._id;
    zoekertje.from = user;
    zoekertje.save(function (err){
      if(err){ return next(err); }
      return res.json({added: true})
    });
  });
});

router.get('/zoekertjes', function(req, res, next){
  Zoekertje.find({}, function (err, zoekertjes) {
    res.send(zoekertjes);
  });
});

router.get('/zoekertje/:id', function(req, res, next){
  Zoekertje.findById(req.params.id, function (err, zoekertje) {
     res.send(zoekertje);
     } );
});

module.exports = router;
