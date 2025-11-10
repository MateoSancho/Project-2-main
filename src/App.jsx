import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Athletes from './pages/Athletes.jsx'
import Brands from './pages/Brands.jsx'
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
              <Route path="/brands" element={<Brands />} />
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
