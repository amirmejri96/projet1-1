const reservation = require('../models/reservationModel')

// Add Reservation
exports.addReservation = async(req, res) => {
    try{
        const newReservation = await reservation.create(req.body)
        res.status(200).json({msg: 'Reservation created', newReservation})
    } catch(err) {
        res.status(404).json({msg: 'Reservation failed'})
    }
}

// Get Reservation
exports.getReservation = async (req, res) => {
    try{
        const reservations = await reservation.find()
        res.status(200).json(reservations)

    } catch (err) {
        res.status(404).json({msg: 'Something went wrong, please try again'})
    }
}

// Get All Reservations
exports.allReservation=async(req,res)=>{
    try{
const allreservation = await reservation.find()
res.json({msg:"voici all",allreservation})
    }catch(err){
        console.log(err)
    }
}