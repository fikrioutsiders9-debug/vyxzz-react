import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home';
import ProjectDetail from './pages/ServiceDetail'; // 1. Import halamannya

function App() {
  return (
    <Router>
      <Navigation /> {/* Navbar di luar Routes biar nempel terus */}
      
      <Routes>
        {/* URL utama (landing page) manggil komponen Home */}
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer /> {/* Footer juga nempel terus */}
    </Router>
  );
}

export default App;