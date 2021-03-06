let mongoose = require('mongoose');

var ReactieSchema = new mongoose.Schema({
    inhoud: String,
    when: Date,
    by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('Reactie', ReactieSchema);