//import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'


import AdminHomePage from './admin/pages/AdminHomePage.jsx';
import AdminReviewsPage from './admin/pages/AdminReviewsPage.jsx';
import AdminAppointmentsPage from './admin/pages/AdminAppointmentsPage.jsx';
import AppointmentsPage from './pages/AppointmentPage.jsx';
import LocationPage from './pages/LocationPage.jsx';


function App() {
  return (
      <>
      <Routes>
        {/* Render your main content components here for the root path */}
        <Route path="/" element={
          <>
            <Navbar />
            <MissionStatement />
            <Appointments />
            <Services />
          </>
        }/>
        <Route path="/reviews" element={
          <>
            <Navbar />
            <ReviewsPage />
          </>
        }/>
        <Route path="/contact" element={
          <>
            <Navbar />
            <ContactPage />
          </>
        }/>
        <Route path='/appointmentPage' element={
          <>
          <Navbar />
          <AppointmentsPage />
          </>
        } />
        <Route path='/locationPage' element={
          <>
          <Navbar />
          <LocationPage />
          </>
        } />
       


        <Route path="/admin" element={<AdminHomePage />} />
        <Route path='/adminreviews' element={<AdminReviewsPage />} />
        <Route path="/adminappointments" element={<AdminAppointmentsPage />} />

      </Routes>  
      </>
  )
}
export default App


//<>
//<Navbar />
//<MissionStatement />
//<Appointments />
//<Services />
//</>  

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// <Router>
// <>
//   <Navbar />
//   <MissionStatement />
//   <Appointments />
//   <Services />
//   <Routes>
//     <Route path="/admin" element={<AdminHomePage />} />
//   </Routes>
// </>
// </Router>


