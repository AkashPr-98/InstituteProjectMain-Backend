const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({

    subject_name: {
        type: String,
        required: true,
    },

    user_id:{
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("Subjects", SubjectSchema);