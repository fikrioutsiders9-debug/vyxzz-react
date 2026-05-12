export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 **Vyxzz**. All rights reserved.</p>
      </div>
      <div className="socials">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/fikri-alfaritsi-516764407/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/fikrioutsiders9-debug/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>

        {/* WhatsApp - Auto Text included */}
        <a 
          href="https://wa.me/6285852911768?text=Hi%20Vyxzz!%20I%20am%20interested%20in%20your%20service" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>

        {/* Email - Auto Subject included */}
        <a 
          href="mailto:vyxzzbusiness@gmail.com?subject=Inquiry%20about%20Web%20Development%20Service" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}