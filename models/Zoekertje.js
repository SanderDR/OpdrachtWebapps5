let mongoose = require('mongoose');

var ZoekertjeSchema = new mongoose.Schema({
    name: String,
    description: String,
    price:  Number,
    location: String,
    from: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    pic: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reactie'}]
})

mongoose.model('Zoekertje', ZoekertjeSchema);