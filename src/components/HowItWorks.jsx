import { motion } from 'framer-motion'
import { UserPlus, FileText, Search, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Kayıt Olun',
      description: 'Ücretsiz hesap oluşturun ve hemen başlayın',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: FileText,
      title: 'İlan Verin',
      description: 'Almak veya satmak istediğiniz ürün için ilan oluşturun',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: Search,
      title: 'Eşleşin',
      description: 'Satıcılar veya alıcılar sizinle iletişime geçsin',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: CheckCircle,
      title: 'Anlaşın',
      description: 'Karşı tarafla anlaşın ve alışverişi tamamlayın',
      color: 'from-primary-500 to-primary-700'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nasıl <span className="text-gradient">Çalışır?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 basit adımda aradığınız ürünü bulun veya satın
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative h-full"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 relative z-10`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-2xl text-gray-300 z-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#download"
            className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Hemen Deneyin
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
