export default function Contact() {
  return (
   <section id="contact" className="contact">
  <div className="container-contact">
    <div className="contact-header">
      <h2>Have a Project<span> in Mind?</span></h2>
      <p>Let's talk about how we can bring your ideas to life. Click below to start a conversation.</p>
    </div>
    
    <a href="https://wa.me/6285852911768?text=Hi Vyxzz! I am interested in your service." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
      <i className="fab fa-whatsapp"></i> Chat on WhatsApp
    </a>

    <p style={{color:'#666'}}>Or reach me via email:</p>
    <a href="mailto:vyxzzbusiness@gmail.com?subject=Inquiry%20about%20Web%20Development%20Service" target="_blank" rel="noopener noreferrer" className="email-link">
    <i style={{color:'var(--accent-gold'}} className="fa-solid fa-envelope"></i> vyxzzbusiness@gmail.com
    </a>
  </div>
</section>
  )
}