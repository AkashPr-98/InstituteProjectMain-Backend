const mongoose = require('mongoose');

const subjectQuestionsSchema = new mongoose.Schema({

    // subject:{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "Subjects",
    //     required: true,
    //     unique: true,
    // },

    subject:{
        type: String,
        required: true,
    },

    user_id:{
        type: String,
        required: true
    },


    question:{
        type: String,
        required: true,
        unique: true,
    },

    option1:{
        type: String,
        required: true,
        unique: true
    },

    option2:{
        type: String,
        required: true,
        unique: true
    },

    option3:{
        type: String,
        required: true,
        unique: true
    },

    option4:{
        type: String,
        required: true,
        unique: true
    },

    correctans:{
        type: Object,
    }
})


module.exports = mongoose.model("SubjectQuestions", subjectQuestionsSchema);