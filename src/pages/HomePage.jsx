import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Stats from '../components/Stats'
import Download from '../components/Download'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Download />
      <Footer />
    </div>
  )
}

export default HomePage
