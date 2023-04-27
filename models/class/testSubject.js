const mongoose = require('mongoose');

const testSubjectQuestionsSchema = new mongoose.Schema({


    // subject_name:{
    //     type: [String],
    //     required: true,
    // },

    test_name: {
        type: String,
        required: true,
    },

    user_id: {
        type: String,
        required: true
    },

    question: {
        type: [String],
        required: true,
    },

    // question_details: [
    //     {

    //         question: {
    //             type: String,
    //             required: true,
    //         },

    //         option1: {
    //             type: String,
    //             required: true
    //         },

    //         option2: {
    //             type: String,
    //             required: true
    //         },

    //         option3: {
    //             type: String,
    //             required: true
    //         },

    //         option4: {
    //             type: String,
    //             required: true
    //         },
    //     }
    // ]

})


module.exports = mongoose.model("TestSubjectQuestions", testSubjectQuestionsSchema);