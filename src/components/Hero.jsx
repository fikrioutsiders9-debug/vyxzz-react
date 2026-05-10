import { HashLink } from 'react-router-hash-link';

export default function Hero() {
  return (
    <section className="hero" id="hero">
    <div className="overlay"></div>
    <div className="hero-content">
      <h1>Building scalable <br></br><span>Web solutions </span></h1>
      <h2>Helping you turn creative ideas into professional digital reality</h2>
      <div className="hero-cta">
        <HashLink smooth to="#contact" className="btn-create">Create Your Website</HashLink>
        <a href="https://github.com/fikrioutsiders9-debug/vyxzz-react" target="_blank" rel="noopener noreferrer" className="btn-outline">View Portfolio</a>
      </div>
    </div>
  </section>
  )
}