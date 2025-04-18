import { useEffect, useState } from 'react'
import formatDate from '/helpers/dateConversion'
import formatTime from '/helpers/timeConversion'
import formatTimezone from '/helpers/convertTimezoneDate'
// import formatString from '/helpers/stringConversion'
import AdminNavbar from '../components/AdminNavbar'
import CreateAppointmentForm from '../components/CreateAppointmentForm'
import EditAppointmentForm from '../components/EditAppointmentForm'



/* This page in a nutshell:
   The button click hits handleSubmit(), then the POST tries and if successful it's 'response.ok' which 
   allows for the call to handleAppointmentCreated(), then fetchData GET's the new array */

/* The new appointment is not directly added to the appointments state in the handleSubmit or handleAppointmentCreated methods. 
   The appointments state is refreshed with the entire list of appointments on the GET fetch from the backend API */

function AdminAppointmentsPage() {

  // state for each component (CreeateAppt/EditAppt) to keep it's own date/time separate
  const [createDateTime, setCreateDateTime] = useState(null)
  const [editDateTime, setEditDateTime] = useState(null)
  // for sorting
  const [sortBy, setSortBy] = useState('date');
  const [selectedDate, setSelectedDate] = useState(null);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [appointments, setAppointments] = useState([]) 
  const [selectedAppointment, setSelectedAppointment] = useState(null) // for modal
  const [updateName, setUpdateName] = useState('')
  const [updateEmail, setUpdateEmail] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [updateDetails, setUpdateDetails] = useState('')

  // use count and dailyTimeSlots for conditional rendering of appts?? Maybe, just an idea for now  :
  // const dailyTimeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"] 
  // const count = [count, setCount] = useState(10)

  // gets the initial list of appointments, but also runs a second time after the POST request if it's successful
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/appointments')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setAppointments(data)
      console.log('Server response:', data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])      // useEffect only handles the initial data load (runs once), which is our state array

  const handleAppointmentCreated = () => {
    fetchData()     // add new appointment
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!createDateTime) {
      console.error('Please select a date and time.')
      return
    }
    
    const { date, time } = formatTimezone(createDateTime)
    console.log(date, time)
    try {
      const response = await fetch('http://localhost:8000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
          time,
          name,
          email,
          phone,
          details,
        }),
      })

      const result = await response.json()
      console.log('Server response:', result)

      if (response.ok) {
        console.log('Appointment created successfully')
        handleAppointmentCreated()   // call method to add new appointment if successful

        // Clear all fields/inputs if successful
        setCreateDateTime(null) 
        setName('')
        setEmail('')
        setPhone('')
        setDetails('')

      } else {
        console.error('Failed to create appointment')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleUpdateAppointment = async (e) => {
    e.preventDefault()
    console.log("Update user button clicked", selectedAppointment)

    const { date, time } = formatTimezone(editDateTime)

     try {
       const response = await fetch(`http://localhost:8000/appointments/${selectedAppointment._id}`, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json', },
         body: JSON.stringify({ 
          name: updateName, 
          email: updateEmail, 
          phone: updatePhone, 
          details: updateDetails,
          date,
          time,
        }),
       })
       console.log(response)
       if (response.ok) {
         fetchData()
         setSelectedAppointment(null)
       } else {
         console.error('Failed to update user')
       }
     } catch (error) {
       console.error('Error:', error)
     }
   }

   const handleDeleteAppointment = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/appointments/${id}`, {
        method: 'DELETE',
      })
  
      if (response.ok) {
        console.log('Appointment deleted successfully')
        fetchData() // refresh the list
      } else {
        console.error('Failed to delete appointment')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // SORT APPOINTMENTS BT TIME/NAME - DROPDOWN LOGIC
  const sortedAppointments = appointments.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
  
      case 'datetime': // Sorting by both date and time
      default: {
        const dateStrA = new Date(a.date).toISOString().split('T')[0]
        const dateStrB = new Date(b.date).toISOString().split('T')[0]
  
        const fullDateTimeA = new Date(`${dateStrA}T${a.time}`)
        const fullDateTimeB = new Date(`${dateStrB}T${b.time}`)
  
        return fullDateTimeA.getTime() - fullDateTimeB.getTime()
      }
    }
  })

  // SORT APPOINTMENTS BY DATE - CALENDAR LOGIC
  let filteredAppointments
  let takenTimeSlots = []
  let getApptDate

  if (selectedDate) {  
    filteredAppointments = sortedAppointments.filter((appt) => {
      getApptDate = new Date(appt.date).toISOString().split('T')[0]
      let apptTime = appt.time
      if(getApptDate === selectedDate){
        takenTimeSlots.push(apptTime)
      }
      return getApptDate === selectedDate
    })
  } else {            // if no date is selected
    filteredAppointments = sortedAppointments
  }
  // setApptDate(selectedDate)

  console.log(takenTimeSlots)
  //const appointmentDeficit = dailyTimeSlots - takenTimeSlots

  return (

    <>
    <AdminNavbar />
    
    <div className="container d-flex flex-column bg-light border border-1 rounded-4 gap-0 gap-lg-2 py-2 p-lg-3 my-2 my-lg-4">
      <h1 className="text-center fs-3 m-0 mt-1 section-header-blue">Appointment page</h1>

      <div className='side-by-side-desktop d-flex flex-column flex-xl-row align-items-xl-start justify-content-lg-center mx-auto gap-3'>

      {/* AppointmentForm gets called and uses our empty state variables we already initilized, and fills them with values */}
      <CreateAppointmentForm
        // selectedDateTime={selectedDateTime}
        // setSelectedDateTime={setSelectedDateTime}
        selectedDateTime={createDateTime}
        setSelectedDateTime={setCreateDateTime}
        appointments={appointments}  // grey out taken appointment
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        details={details}
        setDetails={setDetails}
        handleSubmit={handleSubmit}
      />

      {/* DETAILS PANE */}
      {selectedAppointment && (
        <div className="m-0" id="details-pane-wrapper">
          <div
            className="w-100 details-pane p-1 p-lg-4 mt-3 mb-5 bg-white border border-2"
            id={`details-pane-${selectedAppointment._id}`}>
            {console.log("selectedAppointment:", selectedAppointment)}

            <EditAppointmentForm
            // selectedDateTime={selectedDateTime}
            // setSelectedDateTime={setSelectedDateTime}
            selectedDateTime={editDateTime}
            setSelectedDateTime={setEditDateTime}
            appointments={appointments}  // grey out taken appointment
            updateName={updateName}
            setUpdateName={setUpdateName}
            updateEmail={updateEmail}
            setUpdateEmail={setUpdateEmail}
            updatePhone={updatePhone}
            setUpdatePhone={setUpdatePhone}
            updateDetails={updateDetails}
            setUpdateDetails={setUpdateDetails}
            handleUpdateAppointment={handleUpdateAppointment}
            selectedAppointment={selectedAppointment} 
            />
          
          </div>
        </div>
      )} 

      </div>

      {/* Sorting dropdown */}

      <div className='sort-appointments-wrapper d-flex gap-0 m-0 mb-2 mb-lg-0 mx-auto p-0'>

      <div className='m-0 p-0 d-flex'>
        <input 
          className='m-0 sort-dates-input'
          type="date" 
          onChange={(e) => setSelectedDate(e.target.value)} 
          value={selectedDate || ''}
        />
      </div>

      <div className='sort-appointments-dropdown m-0 p-0 d-flex'>
        <select className='py-1 px-0' onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="time">Sort by Time</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      </div>

      {/* CARDS WRAPPER */}
      {Array.from({ length: 10 }).map((_, index) => {
        if (filteredAppointments[index]) {
          const appointment = filteredAppointments[index];
          return (
            <div className="cards-wrapper" key={index}>
              <div className="card rounded-0 d-flex flex-column gap-3 gap-lg-0 flex-lg-row justify-content-lg-around align-items-lg-center p-3 p-lg-1 m-0">
                <div className="col-12 col-lg-3">{formatDate(appointment.date)}</div>
                <div className="col-12 col-lg-3">{formatTime(appointment.time)}</div>
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
                  <a
                    type="button"
                    className="btn btn-outline-danger col-5 col-lg-auto p-1"
                    onClick={() => handleDeleteAppointment(appointment._id)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="cards-wrapper" key={index}>
              <div className="card rounded-0 d-flex flex-column gap-3 gap-lg-0 flex-lg-row justify-content-lg-around align-items-lg-center p-3 py-lg-2 m-0">
              <div className="col-12 col-lg-3">the date</div>
                <div className="col-12 col-lg-3">00:00</div>
                <div className="col-12 col-lg-6 text-success fw-semibold">Appointment available</div>
                {/* <div className="card-button-container col-12 col-lg-3 d-flex justify-content-around gap-2 gap-lg-0">
                  <div className='col-5 col-lg-auto p-1'></div>
                  <div className='col-5 col-lg-auto p-1'></div>
                </div> */}
              </div>
            </div>
          );
        }
     })}

    </div> {/* end container */}
    </>
  )
}

export default AdminAppointmentsPage