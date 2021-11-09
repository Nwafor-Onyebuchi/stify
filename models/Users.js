const crypto = require('crypto')
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add first name']
    },
    type: {
        type: String,
        required: [true, 'Please select a type. Individual or org']
    },
    lastName: {
        type: String,
    },
    email: {    
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email.'
        ]
    },
    phoneNumber:{
        type: String,
        required: [true, 'Please add a phone number'],
    },

    numberOfApplications:{
        type: Number,
        required: [true, 'Please add number of applicants'],
    },

    candidatesEmails:{
        type:[String]
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UserSchema)