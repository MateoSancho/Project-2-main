import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Athletes from './pages/Athletes.jsx'
import Brands from './pages/Brands.jsx'
import Notfound from './pages/Notfound.jsx'


function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Dashboard/>
        <div>
          <Routes>
            <Route path="/" element={<Athletes />} />
            <Route path="/" element={<Brands />} />
            <Route path="/" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
