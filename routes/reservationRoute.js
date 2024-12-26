const express = require('express')
const { addReservation, getReservation, allReservation } = require('../controllers/reservationControllers')
const reservationRoute = express.Router()


//http://localhost:5000/reservation
reservationRoute.post('/', addReservation)


//http://localhost:5000/reservation
 reservationRoute.get('/', getReservation)


 //http://localhost:5000/reservation
 reservationRoute.get('/all', allReservation)







module.exports = reservationRoute