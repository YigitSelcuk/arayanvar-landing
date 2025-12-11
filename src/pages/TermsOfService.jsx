import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft size={20} />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kullanım Şartları</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Hizmet Tanımı</h2>
            <p className="text-gray-600 leading-relaxed">
              Arayanvar, kullanıcıların aradıkları ürünler için ilan verebildiği ve bu ürünlere sahip satıcılarla 
              eşleşebildiği bir platformdur. Bu şartları kabul ederek platformumuzu kullanmayı onaylıyorsunuz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kullanıcı Hesabı</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Platform kullanımı için:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>18 yaşından büyük olmalısınız</li>
              <li>Doğru ve güncel bilgiler sağlamalısınız</li>
              <li>Hesap güvenliğinden siz sorumlusunuz</li>
              <li>Hesabınızı başkalarıyla paylaşamazsınız</li>
              <li>Şüpheli aktiviteleri derhal bildirmelisiniz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. İlan Kuralları</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              İlan verirken:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Gerçek ve doğru bilgiler paylaşmalısınız</li>
              <li>Yasal olmayan ürünler için ilan veremezsiniz</li>
              <li>Telif hakkı ihlali yapan içerik paylaşamazsınız</li>
              <li>Spam veya yanıltıcı içerik yasaktır</li>
              <li>Uygunsuz veya saldırgan içerik paylaşamazsınız</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Yasaklanan Ürünler</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aşağıdaki ürünler için ilan verilemez:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Yasadışı ürünler ve hizmetler</li>
              <li>Silah, mühimmat ve patlayıcı maddeler</li>
              <li>Uyuşturucu ve yasal olmayan ilaçlar</li>
              <li>Çalıntı veya sahte ürünler</li>
              <li>Tehlikeli veya zararlı maddeler</li>
              <li>Yetişkin içerikli materyaller</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kullanıcı Sorumlulukları</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kullanıcılar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Diğer kullanıcılara saygılı davranmalıdır</li>
              <li>Alışveriş işlemlerinden kendileri sorumludur</li>
              <li>Kişisel bilgilerini korumakla yükümlüdür</li>
              <li>Platform kurallarına uymalıdır</li>
              <li>Dolandırıcılık girişimlerini bildirmelidir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Platform Sorumlulukları</h2>
            <p className="text-gray-600 leading-relaxed">
              Arayanvar bir aracı platformdur. Kullanıcılar arasındaki alışverişlerden, ürün kalitesinden veya 
              teslimat sorunlarından sorumlu değiliz. Platform sadece eşleştirme hizmeti sunar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Fikri Mülkiyet</h2>
            <p className="text-gray-600 leading-relaxed">
              Platform içeriği, logosu, tasarımı ve yazılımı Arayanvar'ın mülkiyetindedir. İzinsiz kullanım, 
              kopyalama veya dağıtım yasaktır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hesap Askıya Alma ve Sonlandırma</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aşağıdaki durumlarda hesabınız askıya alınabilir veya sonlandırılabilir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Kullanım şartlarının ihlali</li>
              <li>Dolandırıcılık veya sahte bilgi paylaşımı</li>
              <li>Diğer kullanıcılara zarar verme</li>
              <li>Yasal olmayan aktiviteler</li>
              <li>Tekrarlayan şikayetler</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Ücretler ve Ödemeler</h2>
            <p className="text-gray-600 leading-relaxed">
              Platform kullanımı şu an için ücretsizdir. Gelecekte ücretli özellikler eklenebilir ve kullanıcılar 
              önceden bilgilendirilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Değişiklikler</h2>
            <p className="text-gray-600 leading-relaxed">
              Bu kullanım şartları zaman zaman güncellenebilir. Önemli değişiklikler yapıldığında kullanıcılar 
              bilgilendirilecektir. Güncellemelerden sonra platformu kullanmaya devam etmek, yeni şartları kabul 
              ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Uyuşmazlık Çözümü</h2>
            <p className="text-gray-600 leading-relaxed">
              Bu şartlardan kaynaklanan uyuşmazlıklar Türkiye Cumhuriyeti yasalarına tabidir ve İstanbul mahkemeleri 
              yetkilidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. İletişim</h2>
            <p className="text-gray-600 leading-relaxed">
              Kullanım şartları hakkında sorularınız için:
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

export default TermsOfService
