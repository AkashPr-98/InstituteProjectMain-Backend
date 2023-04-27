const mongoose = require('mongoose');

const studentDetailSchema = new mongoose.Schema({


    user_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
        required: true
    },

    firstname:{
        type: String,
        required: true,
    },

    lastname:{
        type: String,
        required: true,
    },
    
    address:{
        type: String,
    },

    // classes:{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "ClassDetail"
    // },


    city:{
        type: Object,
        required: true
    },

    courses:{
        type: [String]
    },

    state:{
        type: Object
    },

    is_active: {
        type: Boolean,
        default: true,
    },

    is_disabled: {
        type: Boolean,
        default: false,
    },

    created_at: {
        type: Date,
        default: Date.now()
    },

    updated_at: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("StudentDetail", studentDetailSchema);