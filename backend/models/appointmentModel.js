import mongoose from 'mongoose';

// Define User Schema
const appointmentSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true }, 
    details: { type: String, required: true },
    contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }, // reference to the Contact model, added by Marco 4/04/2025
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }    // for now we are not relating users-to-appointments as users do not sign-in
});

// Create Mongoose Model
const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;




//  Hoppscotch/Postman POST or GET/date request using 'test' user id:
// {
//   "date": "2025-3-27",
//   "time": "10:00",
//   "details": "Get estimate to paint car"
//   "userId": "67e6a856669711f09ddeaeac"
// } 