import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import Categories from './components/Categories'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <VideoShowcase />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
