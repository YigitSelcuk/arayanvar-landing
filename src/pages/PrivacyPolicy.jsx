import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft size={20} />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-primary-100">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giriş</h2>
            <p className="text-gray-600 leading-relaxed">
              Arayanvar olarak, kullanıcılarımızın gizliliğini korumayı en önemli önceliklerimizden biri olarak görüyoruz. 
              Bu Gizlilik Politikası, kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Bilgiler</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Arayanvar platformunu kullanırken aşağıdaki bilgileri toplayabiliriz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon numarası)</li>
              <li>Konum bilgileri (izniniz dahilinde)</li>
              <li>Profil fotoğrafı ve kullanıcı tercihleri</li>
              <li>İlan içerikleri ve mesajlaşma geçmişi</li>
              <li>Cihaz bilgileri ve IP adresi</li>
              <li>Uygulama kullanım istatistikleri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bilgilerin Kullanımı</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Topladığımız bilgileri şu amaçlarla kullanırız:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Platform hizmetlerini sağlamak ve geliştirmek</li>
              <li>Kullanıcılar arasında eşleştirme yapmak</li>
              <li>Güvenlik ve dolandırıcılık önleme</li>
              <li>Müşteri desteği sağlamak</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
              <li>Kullanıcı deneyimini kişiselleştirmek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bilgi Paylaşımı</h2>
            <p className="text-gray-600 leading-relaxed">
              Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız. Ancak aşağıdaki durumlarda bilgi paylaşımı yapılabilir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
              <li>Yasal zorunluluklar ve mahkeme kararları</li>
              <li>Platform güvenliğini sağlamak için</li>
              <li>Hizmet sağlayıcılarımız (sunucu, analitik vb.) ile sınırlı olarak</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Veri Güvenliği</h2>
            <p className="text-gray-600 leading-relaxed">
              Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz. Tüm hassas veriler şifrelenir 
              ve güvenli sunucularda saklanır. Ancak, internet üzerinden veri iletiminin %100 güvenli olmadığını unutmayın.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kullanıcı Hakları</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              KVKK kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verilerinize erişim talep etme</li>
              <li>Kişisel verilerinizin düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin silinmesini talep etme</li>
              <li>Veri işlemeye itiraz etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Çerezler (Cookies)</h2>
            <p className="text-gray-600 leading-relaxed">
              Platformumuz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Tarayıcı ayarlarınızdan çerezleri 
              yönetebilir veya devre dışı bırakabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Çocukların Gizliliği</h2>
            <p className="text-gray-600 leading-relaxed">
              Platformumuz 18 yaş altı kullanıcılara yönelik değildir. Bilerek 18 yaş altı kullanıcılardan veri toplamıyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Değişiklikler</h2>
            <p className="text-gray-600 leading-relaxed">
              Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda kullanıcılarımızı 
              bilgilendireceğiz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. İletişim</h2>
            <p className="text-gray-600 leading-relaxed">
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="mt-4 p-4 bg-primary-50 rounded-lg">
              <p className="text-gray-700"><strong>E-posta:</strong> info@arayanvar.com</p>
              <p className="text-gray-700"><strong>Telefon:</strong> +90 555 123 45 67</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
