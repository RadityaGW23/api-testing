const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemPost = new Schema({
    name: {
        type: String,
        require: true,
    },
    location:{
        type: String,
        require: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ItemPost', ItemPost);