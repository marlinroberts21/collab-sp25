import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'
import ContactPage from './pages/ContactPage.jsx'


import AdminHomePage from './admin/pages/AdminHomePage.jsx';
import AdminReviewsPage from './admin/pages/AdminReviewsPage.jsx';
import AdminAppointmentsPage from './admin/pages/AdminAppointmentsPage.jsx';
import FormDetails from './components/Forms/Forms.jsx';
import './App.css';
import AppointmentsPage from './pages/AppointmentPage.jsx';
import LocationPage from './pages/LocationPage.jsx';

import ReviewsPage from './pages/ReviewsPage.jsx';
import ListReviewsPage from './pages/ListReviewsPage.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main root route */}
        <Route path="/" element={
          <>
            <MissionStatement />
            <Appointments />
            <Services />
          </>
        }/>
        {/* Route for Leaving a review */}
        <Route path="/leave_review" element={
            <ReviewsPage />
        }/>
        {/* Route for viewing list of reviews */}
        <Route path="/list_reviews" element={
          <ListReviewsPage />
        }/>

        <Route path="/contact" element={
          <>
            <ContactPage />
          </>
        }/>
          <Route path="/forms" element={
          <>
            <Navbar />
            <FormDetails />
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

