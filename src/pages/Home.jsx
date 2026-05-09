import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Why from '../components/Why'
import Services from '../components/Services'
import Contact from '../components/Contact'
import useServiceStore from '../store/useServiceStore'
import Seo from '../components/Seo'
import Skeleton from '../components/Skeleton';

export default function Home() {
  const services = useServiceStore((state) => state.services);
  const isLoading = useServiceStore((state) => state.isLoading);
  const error = useServiceStore((state) => state.error);

  if (isLoading && services.length === 0) {
    return <Skeleton />
  }

  if (error) {
    return <div style={{padding:'50px',minHeight:'100vh',justifyContent:'center',textAlign:'center'}}>{error}</div>;
  }

  return (
    <>
      <Seo 
        title="Freelance Web Developer" 
        description="Scalable Web Solutions."
      />
      <main>
        <Hero />
        <Steps />
        <Why />
        <Services />
        <Contact />
      </main>
    </>
  )
}


