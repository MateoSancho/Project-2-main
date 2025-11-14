import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Athletes from './pages/Athletes.jsx'
import AthletesAbout from "./pages/AthletesAbout.jsx"
import AddAthlete from './pages/AddAthlete.jsx'
import Brands from './pages/Brands.jsx'
import BrandsAbout from './pages/BrandsAbout.jsx'
import AddBrand from './pages/AddBrand.jsx'
import Notfound from './pages/Notfound.jsx'


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
         <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/athletes" element={<Athletes />} />
              <Route path="/athletes/:id" element={<AthletesAbout />} />
              <Route path="/athletes/add" element={<AddAthlete />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:id" element={<BrandsAbout />} />
              <Route path="/brands/add" element={<AddBrand />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Notfound />} />
           </Routes>
         </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App


//Add to athletes a Description, social media links
//Add to brands a Description, web links
//Add more Data for Brands and Athletes
//Better Css
//Add a 404 not found page