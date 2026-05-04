import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Why from '../components/Why'
import Services from '../components/Services'
import Contact from '../components/Contact'
import useServiceStore from '../store/useServiceStore'

export default function Home() {
  const isLoading = useServiceStore((state) => state.isLoading);
  const error = useServiceStore((state) => state.error);

  if (isLoading) {
    return <div style={{padding:'50px',minHeight:'100vh',justifyContent:'center',textAlign:'center'}}>Loading...</div>;
  }
  if (error) {
    return <div style={{padding:'50px',minHeight:'100vh',justifyContent:'center',textAlign:'center'}}>Error {error}</div>;
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


