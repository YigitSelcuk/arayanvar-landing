import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Arayanvar Logo" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold text-gradient">arayanvar</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Özellikler</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition">Nasıl Çalışır</a>
            <a href="#download" className="text-gray-700 hover:text-primary-600 transition">İndir</a>
            <a href="#download" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition">
              Hemen Başla
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#features" className="block py-2 text-gray-700 hover:text-primary-600">Özellikler</a>
            <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-primary-600">Nasıl Çalışır</a>
            <a href="#download" className="block py-2 text-gray-700 hover:text-primary-600">İndir</a>
            <a href="#download" className="block mt-2 bg-primary-600 text-white px-6 py-2 rounded-full text-center">
              Hemen Başla
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
