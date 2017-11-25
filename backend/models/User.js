var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: {type: String, unique:true},
    password: String
})
mongoose.model('User', UserSchema);