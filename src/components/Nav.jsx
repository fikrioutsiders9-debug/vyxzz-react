import { useState } from 'react';

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
          <a href="#hero" className="menu-item">Vyxzz</a>
        </div>
        <nav>
          <div className="linkNav">
            <a href="#process" className="menu-item">Process</a>
            <a href="#why-us" className="menu-item">Solutions</a>
            <a href="#services" className="menu-item">Services</a>
            <a href="#contact" className="menu-item">Contact</a>
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
            <a href="#process" className="menu-item" onClick={closeSidebar}>Process</a>
            <a href="#why-us" className="menu-item" onClick={closeSidebar}>Solutions</a>
            <a href="#services" className="menu-item" onClick={closeSidebar}>Services</a>
            <a href="#contact" className="menu-item" onClick={closeSidebar}>Contact</a>
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