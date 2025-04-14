//import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

import AdminHomePage from './admin/pages/AdminHomePage.jsx';
import AdminAppointmentsPage from './admin/pages/AdminAppointmentsPage.jsx';


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
       <Route path="/about" element={
          <>
            <Navbar />
            <AboutPage />
          </>
        }/>
       


        <Route path="/admin" element={<AdminHomePage />} />
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


