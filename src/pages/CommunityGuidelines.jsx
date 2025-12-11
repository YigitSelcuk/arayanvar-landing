import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft size={20} />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Topluluk Kuralları</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hoş Geldiniz!</h2>
            <p className="text-gray-600 leading-relaxed">
              Arayanvar topluluğuna hoş geldiniz! Bu kurallar, platformumuzda güvenli, saygılı ve keyifli bir 
              ortam oluşturmak için hazırlanmıştır. Tüm kullanıcılarımızın bu kurallara uyması beklenmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Saygılı Olun</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Diğer kullanıcılara nazik ve saygılı davranın</li>
              <li>Hakaret, küfür veya saldırgan dil kullanmayın</li>
              <li>Farklı görüşlere hoşgörülü olun</li>
              <li>Kişisel saldırılarda bulunmayın</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dürüst Olun</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Gerçek ve doğru bilgiler paylaşın</li>
              <li>Ürünlerinizi olduğu gibi tanıtın</li>
              <li>Yanıltıcı veya sahte ilan vermeyin</li>
              <li>Fiyatları şeffaf bir şekilde belirtin</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Güvenli Alışveriş</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Kişisel bilgilerinizi koruyun</li>
              <li>Şüpheli durumları bildirin</li>
              <li>Güvenli ödeme yöntemleri kullanın</li>
              <li>Buluşmalarda güvenli yerleri tercih edin</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Spam Yapmayın</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Aynı ilanı tekrar tekrar paylaşmayın</li>
              <li>İlgisiz içerik göndermeyin</li>
              <li>Reklam veya tanıtım spam'i yapmayın</li>
              <li>Otomatik bot kullanmayın</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Yasalara Uyun</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Yasal olmayan ürün satmayın</li>
              <li>Telif haklarına saygı gösterin</li>
              <li>Çalıntı veya sahte ürün paylaşmayın</li>
              <li>Dolandırıcılık yapmayın</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Gizliliğe Saygı</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Başkalarının kişisel bilgilerini paylaşmayın</li>
              <li>İzinsiz fotoğraf veya video paylaşmayın</li>
              <li>Özel mesajları ifşa etmeyin</li>
              <li>Taciz veya rahatsız etmeyin</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kaliteli İçerik</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Net ve anlaşılır fotoğraflar kullanın</li>
              <li>Detaylı açıklamalar yazın</li>
              <li>Doğru kategori seçin</li>
              <li>Uygun başlıklar kullanın</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. İletişim Kuralları</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Mesajlara zamanında cevap verin</li>
              <li>Profesyonel bir dil kullanın</li>
              <li>Anlaşmazlıklarda sakin kalın</li>
              <li>Gereksiz mesaj göndermekten kaçının</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kural İhlalleri</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kural ihlallerinde aşağıdaki yaptırımlar uygulanabilir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Uyarı mesajı</li>
              <li>İçerik kaldırma</li>
              <li>Geçici hesap askıya alma</li>
              <li>Kalıcı hesap kapatma</li>
              <li>Yasal işlem başlatma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Şikayet ve Bildirim</h2>
            <p className="text-gray-600 leading-relaxed">
              Kural ihlali gördüğünüzde lütfen bize bildirin. Her şikayet incelenir ve gerekli aksiyonlar alınır.
            </p>
            <div className="mt-4 p-4 bg-primary-50 rounded-lg">
              <p className="text-gray-700"><strong>E-posta:</strong> info@arayanvar.com</p>
              <p className="text-gray-700"><strong>Telefon:</strong> +90 555 123 45 67</p>
            </div>
          </section>

          <section className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Birlikte Daha İyi!</h3>
            <p className="text-gray-700 leading-relaxed">
              Bu kurallar, Arayanvar topluluğunu herkes için güvenli ve keyifli bir yer yapmak içindir. 
              Kurallara uyarak, pozitif bir topluluk kültürü oluşturmamıza yardımcı olursunuz. Teşekkürler!
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default CommunityGuidelines
