import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Arayanvar</h3>
            <p className="text-gray-400">
              Aradığınız ürünleri bulmanın en kolay yolu. Topluluk gücüyle her şey bulunur!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-primary-400 transition">Özellikler</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-400 transition">Nasıl Çalışır</a></li>
              <li><a href="#download" className="hover:text-primary-400 transition">Uygulamayı İndir</a></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Yasal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-primary-400 transition">Gizlilik Politikası</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary-400 transition">Kullanım Şartları</Link></li>
              <li><Link to="/community-guidelines" className="hover:text-primary-400 transition">Topluluk Kuralları</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary-400 transition">KVKK</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@arayanvar.com" className="hover:text-primary-400 transition text-sm">
                  info@arayanvar.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+905551234567" className="hover:text-primary-400 transition text-sm">
                  +90 555 123 45 67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">İstanbul, Türkiye</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Arayanvar. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
