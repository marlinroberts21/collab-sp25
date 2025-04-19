import React from 'react'
import formatDate from '/helpers/dateConversion'
import formatTimeAmPm from '/helpers/timeConversion'

function SearchAppointment({
    setUpdateName, 
    //nameError,                         // joi
    setUpdateEmail, 
    // emailError,                        // joi
    setUpdatePhone, 
    // phoneError,                        // joi
    setUpdateDetails, 
    // detailsError,                      // joi
    appointments,
    setSelectedAppointment,
    handleDeleteAppointment
}) {
    
    const userList = appointments.map((appointment) => {
        {/* CARDS WRAPPER */}
        return(
            <div className="cards-wrapper bg-warning" >
              <div className="card rounded-0 d-flex my-0 mb-lg-2 flex-column gap-3 gap-lg-0 flex-lg-row justify-content-lg-around align-items-lg-center p-3 p-lg-1 m-0">
                <div className="col-12 col-lg-3">{formatDate(appointment.date)}</div>
                <div className="col-12 col-lg-3">{formatTimeAmPm(appointment.time)}</div>
                <div className="col-12 col-lg-3">{appointment.name}</div>

                <div className="card-button-container col-12 col-lg-3 d-flex justify-content-around gap-2 gap-lg-0">
                  <a
                    type="button"
                    className="btn btn-outline-primary col-5 col-lg-auto p-1"
                    href="#details-pane-wrapper"
                    onClick={() => {
                      setSelectedAppointment(appointment);
                      setUpdateName(appointment.name);
                      setUpdateEmail(appointment.email);
                      setUpdatePhone(appointment.phone);
                      setUpdateDetails(appointment.details);
                    }}
                  >
                    Details
                  </a>
                  <a type="button" className="btn btn-outline-danger col-5 col-lg-auto p-1" onClick={() => handleDeleteAppointment(appointment._id)} >
                    Delete
                  </a>
                </div>

              </div>
            </div>
        )
    })

     return (
        <>
        <div>{userList}</div>
        </>
    )

}

export default SearchAppointment
