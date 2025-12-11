import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'
import AppleIcon from './icons/AppleIcon'
import GooglePlayIcon from './icons/GooglePlayIcon'

const Download = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <Smartphone className="w-20 h-20 text-white mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Uygulamayı Hemen İndirin
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            iOS ve Android için ücretsiz olarak indirin ve aradığınız ürünleri bulmaya başlayın
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition flex items-center gap-3 min-w-[200px]"
            >
              <AppleIcon className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition flex items-center gap-3 min-w-[200px]"
            >
              <GooglePlayIcon className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs text-gray-600">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-primary-100"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download
