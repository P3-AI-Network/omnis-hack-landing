import AboutSection from './components/About'
import NewsletterSection from './components/Footer'
import HeroSection from './components/Hero'
import JudgesSection from './components/Judges'
import Navbar from './components/Navbar'
import ScheduleSection from './components/Schedule'

function App() {

  return (
    <div className="w-full min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JudgesSection />
      <ScheduleSection />
      <NewsletterSection />
    </div>
  )
}

export default App
