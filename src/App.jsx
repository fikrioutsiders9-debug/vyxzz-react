import './App.css'
import Navigation from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Why from './components/Why'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
   <main>
      <Navigation />
      <Hero />
      <Steps />
      <Why />
      <Services />
      <Contact />
      <Footer />

      {/* Nanti Services, WhyUs, dll tinggal taruh bawahnya */}
    </main>
  )
}

export default App

