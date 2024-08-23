
import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import "./StyleCss/HeaderStyle.css"
import "./StyleCss/HomeStyle.css"
// import "./StyleCss/home.css"
import ContactUs from "./pages/ContactUs"


const App = () => {
  return (
        <Router>
          
            <Routes>
                <Route  path='/' element={<Home/>} />
                <Route path="/contact" element={<ContactUs />} />
              
            </Routes>
    
        </Router>
  )
}

export default App