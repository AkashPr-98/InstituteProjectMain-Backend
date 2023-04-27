const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({

    test_name: {
        type: String,
        required: true,
        unique: true,
    },

    test_date: {
        type: Date,
        required: true,
        default: Date.now()
    },

    user_id: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model("Tests", TestSchema);