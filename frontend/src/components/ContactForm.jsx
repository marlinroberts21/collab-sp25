import React from 'react'

export default function ContactForm() {
    return (
        <>
        <form>
            <div class="row">
            <div class="col col-md-4">
                <label class="col" for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First Name"></input>
            </div>
            <div class="col col-md-4">
                <label class="col" for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name"></input>
            </div>
            </div>
            <div class="form-group-row col-md-8">
                <label class="" for="userEmail">Email</label>
                <input type="text" class="form-control" id="userEmail" placeholder="user@gmail.com"></input>
            </div>
            <div class="form-group-row col-md-8">
                <label class="" for="phoneNumber">Phone Number</label>
                <input type="text" class="form-control" id="phoneNumber" placeholder="123-456-7890"></input>
            </div>
            <fieldset class="form-group">
                <div class="form-row">
                    <legend class="">Have you scheduled an appointment?</legend>
                    <div class="">
                        <div class="form-check form-check-inline">
                            <input type="radio" class="for-check-input" name="appointmentRadios" id="appointmentRadio" value="option1"></input>
                            <label class="for-check-label" for="appointmentRadio">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" class="for-check-input" name="appointmentRadios" id="appointmentRadio2" value="option2"></input>
                            <label class="for-check-label" for="appointmentRadio2">No</label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="form-group-row col-md-8">
                <label for="userText">Leave a message here</label>
                <textarea class="form-control" id="userText" rows="3" placeholder="text"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </>
  )
}



