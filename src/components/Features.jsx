import { motion } from 'framer-motion'
import { Search, Bell, MessageCircle, Shield, Users, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Akıllı Eşleştirme',
      description: 'İstediğiniz ürün için ilan verin, satıcılar sizi bulsun',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Bell,
      title: 'Anlık Bildirimler',
      description: 'Aradığınız ürünü satan kullanıcılar için anında bildirim alın',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: MessageCircle,
      title: 'Kolay İletişim',
      description: 'Satıcılarla doğrudan mesajlaşın ve anlaşın',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Shield,
      title: 'Güvenli Platform',
      description: 'Verileriniz şifrelenir ve güvenli bir şekilde saklanır',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: Users,
      title: 'Geniş Topluluk',
      description: 'Binlerce satıcı ve alıcı bir arada',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Zap,
      title: 'Hızlı ve Kolay',
      description: 'Dakikalar içinde ilan oluşturun ve satıcılarla buluşun',
      color: 'from-primary-500 to-primary-700'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Neden <span className="text-gradient">Arayanvar?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aradığınız ürünleri bulmak için ihtiyacınız olan her şey bir arada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
