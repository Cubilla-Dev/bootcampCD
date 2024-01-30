const mongoose = require('mongoose')

const pirataSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [true, 'The name is required'],
        minLength: [3, "Pirate Name must be at least 3 characteres"]
    },
    imageUrl: {
        type: String,
        required: [true, 'The url is required'],
    },
    treasureChests: {
        type: String,
        required: [true, 'The treasure is required'],
    },
    pirateCatch: {
        type: String,
        required: [true, 'The Cath is required'],
    },
    crewPosition: {
        type: String,
        required: [true, 'The Position is required'],
    },
    accessories: {
        type: Object,
        required: true
    },
    
})

const pirata = mongoose.model("pirata", pirataSchema);

module.exports = pirata;
