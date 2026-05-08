import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Why from '../components/Why'
import Services from '../components/Services'
import Contact from '../components/Contact'
import useServiceStore from '../store/useServiceStore'

export default function Home() {
  const services = useServiceStore((state) => state.services);
  const isLoading = useServiceStore((state) => state.isLoading);
  const error = useServiceStore((state) => state.error);

  if (isLoading && services.length === 0) {
    return (
      <div style={{ padding: '50px', minHeight: '100vh', color: 'white' }}>
        <div className="skeleton" style={{ width: '200px', height: '40px', marginBottom: '20px' }}></div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton" style={{ height: '300px', width: '100%' }}></div>
          ))}
          </div>
      </div>
    );
  }

  if (error) {
    return <div style={{padding:'50px',minHeight:'100vh',justifyContent:'center',textAlign:'center'}}>{error}</div>;
  }

  return (
   <main>
      <Hero />
      <Steps />
      <Why />
      <Services />
      <Contact />
    </main>
  )
}


