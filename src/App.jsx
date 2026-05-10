import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home';
import ProjectDetail from './pages/ServiceDetail'; // 1. Import halamannya
import { useEffect } from 'react';
import useServiceStore from './store/useServiceStore';

export default function App() {
  const fetchAllData = useServiceStore((state) => state.fetchAllData);

  useEffect(() => { //untuk menjalankan function otomatis tiap web pertama kali dibuka
    fetchAllData();
  }, [fetchAllData]);//tiap kali data berubah, jalanin lagi functionnya

  return (
    <Router>
      <Navigation /> {/* Navbar di luar Routes biar nempel terus */}
      
      <Routes>
        {/* URL utama (landing page) manggil komponen Home */}
        <Route path="/" element={<Home />} />
        <Route path="/service/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer /> {/* Footer juga nempel terus */}
    </Router>
  );
}

