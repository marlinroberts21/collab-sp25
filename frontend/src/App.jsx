import React from 'react'
import { Routes,  Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx'
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'

import ContactPage from './pages/ContactPage.jsx'

import CollisionRepair from './components/CollisionRepair.jsx';

import AdminHomePage from './admin/pages/AdminHomePage.jsx';
import AdminReviewsPage from './admin/pages/AdminReviewsPage.jsx';
import AdminAppointmentsPage from './admin/pages/AdminAppointmentsPage.jsx';
import FormDetails from './components/Forms/Forms.jsx';
import './App.css';
import AppointmentsPage from './pages/AppointmentPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import CustPaintPage from './pages/CustPaintPage.jsx';
import PaintDetailsPage from './pages/PaintDetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FourZeroFourPage from './pages/FourZeroFourPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import ListReviewsPage from './pages/ListReviewsPage.jsx';
import ContactPage from './pages/ContactPage.jsx'


function App() {
  return (
    <>
      <Routes>
        {/* Main root route */}
        <Route path="/" element={
          <>
           <Navbar />
            <MissionStatement />
            <Appointments />
            <Services />
          </>
        }/>
        {/* Route for Leaving a review */}
        <Route path="/leave_review" element={
          <>
            <Navbar />
            <ReviewsPage />
          </>
        }/>
        {/* Route for viewing list of reviews */}
        <Route path="/list_reviews" element={
          <>
            <Navbar />
            <ListReviewsPage />
          </>
        }/>

        <Route path="/contact" element={
          <>
            <Navbar />
            <ContactPage />
          </>
        }/>

          <Route path="/forms" element={
          <>
            
            <FormDetails />
          </>
        }/>
        <Route path="/collision-repair" element={
          <>
          <CollisionRepair />

          </>
        }/>
       
       


        <Route path="/CustPaintPage" element={
          <>
            <Navbar /> 
            <CustPaintPage />
          </>
            
        }/>

        <Route path="/PaintDetailsPage" element={
          <>
            <Navbar /> 
            <PaintDetailsPage />
          </>
            
        }/>

          
        <Route path='/appointments' element={
          <>
        
          <AppointmentsPage />
          </>
        } />
        <Route path='/location' element={
          <>
         
          <LocationPage />
          </>
        } />
        <Route path='/AboutPage' element={
          <>
          <Navbar />
          <AboutPage />
          </>
        } />
       


        <Route path="/admin" element={<AdminHomePage />} />
        <Route path='/adminreviews' element={<AdminReviewsPage />} />
        <Route path="/adminappointments" element={<AdminAppointmentsPage />} />
        <Route path='*' element={<FourZeroFourPage />} />
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

