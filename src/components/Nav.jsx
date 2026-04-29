import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
  // 1. Ini Status (Boolean: true/false)
const [sidebarOpen, setSidebarOpen] = useState(false);

// 2. Ini FUNCTION (Perintah Toggle)
const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen); // Artinya: "Ubah ke lawan arahnya"
};

// 3. Ini FUNCTION (Perintah Tutup)
const closeSidebar = () => {
  setSidebarOpen(false); // Artinya: "Pokoknya harus tutup/false"
};

  return (
    <>
      {/* NAVBAR UTAMA */}
      <header className="navbar">
        <div className="logo">
          <HashLink smooth to="/#hero" className="menu-item">Vyxzz</HashLink>
        </div>
        <nav>
          <div className="linkNav">
            <HashLink smooth to="/#process" className="menu-item">Process</HashLink>
            <HashLink smooth to="/#why-us" className="menu-item">Solutions</HashLink>
            <HashLink smooth to="/#services" className="menu-item">Services</HashLink>
            <HashLink smooth to="/#contact" className="menu-item">Contact</HashLink>
          </div>
        </nav>
      </header>

      {/* HAMBURGER BUTTON */}
      {/* Kita kasih class 'active' atau semacamnya jika perlu animasi lewat CSS */}
      <div 
        className={`hamburger ${sidebarOpen ? 'active' : ''}`} 
        id="menuNav"
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* SIDEBAR */}
      {/* Sidebar akan dapet class 'show' (atau sesuai CSS lo) pas isSidebarOpen true */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`} id="mySidebar">
        <nav>
          <div className="linkSidebar">
            <HashLink smooth to="/#process" className="menu-item" onClick={closeSidebar}>Process</HashLink>
            <HashLink smooth to="/#why-us" className="menu-item" onClick={closeSidebar}>Solutions</HashLink>
            <HashLink smooth to="/#services" className="menu-item" onClick={closeSidebar}>Services</HashLink>
            <HashLink smooth to="/#contact" className="menu-item" onClick={closeSidebar}>Contact</HashLink>
          </div>
        </nav>
      </div>

      {/* OVERLAY */}
      <div 
        className={`overlaySidebar ${sidebarOpen ? 'active' : ''}`} 
        id="overlaySidebar"
        onClick={closeSidebar}
      ></div>
    </>
  );
}