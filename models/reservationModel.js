const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    numberOfTickets: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('reservation', reservationSchema)