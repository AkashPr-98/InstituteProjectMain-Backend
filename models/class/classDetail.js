const mongoose = require('mongoose');

const classDetailSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
        required: true,
    },

    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    address: {
        type: String,
    },

    website: {
        type: String,
    },

    working_hours: {
        type: Number
    },


    city: {
        type: Object,
    },

    classes: {
        type: [Number]
    },

    state: {
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

module.exports = mongoose.model("ClassDetail", classDetailSchema);