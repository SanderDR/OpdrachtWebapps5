var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');


router.get('/API/users/', function(req, res, next) {
  User.find(function(err, users){
    if(err) {return next(err);}
    res.json(users);
  });
});

router.post('/API/users/', function(req, res, next){
  let user = new User(req.body);
  user.save(function(err, rec){
    if(err){return next(err);}
    res.json(rec);
  });
});

module.exports = router;
