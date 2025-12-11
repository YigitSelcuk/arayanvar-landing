import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import AppleIcon from './icons/AppleIcon'
import GooglePlayIcon from './icons/GooglePlayIcon'
import resim1 from '../images/resim1.png'
import resim2 from '../images/resim2.png'
import resim3 from '../images/resim3.png'
import resim4 from '../images/resim4.png'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-primary-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Türkiye'nin ilan platformu</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Aradığınız Ürünü
              <br />
              <span className="text-gradient">Kolayca Bulun</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              İstediğiniz ürün için ilan verin, o ürüne sahip satıcılar sizinle iletişime geçsin.
              Topluluk gücüyle aradığınız her şeyi bulun!
            </p>

          

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-gray-900 text-white px-6 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition flex items-center gap-3 justify-center"
              >
                <AppleIcon className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-gray-900 text-white px-6 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition flex items-center gap-3 justify-center"
              >
                <GooglePlayIcon className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </motion.a>
            </div>

            <p className="text-sm text-gray-500">
              ✓ Ücretsiz İndirme • ✓ Kolay Kullanım • ✓ Güvenli Platform
            </p>
          </motion.div>

          {/* Right Side - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="flex gap-4 items-center justify-center">
              {/* Phone 1 - Left */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <div className="w-56 h-[480px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <img 
                      src={resim1} 
                      alt="App Screenshot 1" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 - Center */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex-shrink-0"
              >
                <div className="w-56 h-[480px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <img 
                      src={resim2} 
                      alt="App Screenshot 2" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Phone 3 - Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="flex-shrink-0"
              >
                <div className="w-56 h-[480px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <img 
                      src={resim3} 
                      alt="App Screenshot 3" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
