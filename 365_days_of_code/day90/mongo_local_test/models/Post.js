const mongoose = require('mongoose'),
postSchema = new mongoose.Schema({

   name: {
        type: String,
        required: true
    },


    content: {
        type: String,
        required: true
    },


    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Post', postSchema);

