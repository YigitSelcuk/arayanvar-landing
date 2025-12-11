# Arayanvar Landing Page

Modern ve responsive landing page for Arayanvar - Kayıp Eşya Bulma Platformu

## 🚀 Teknolojiler

- React 18
- Vite
- Tailwind CSS
- Framer Motion (animasyonlar)
- Lucide React (ikonlar)

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install
# veya
yarn install

# Development server'ı başlat
npm run dev
# veya
yarn dev

# Production build
npm run build
# veya
yarn build
```

## 🎨 Özellikler

- ✨ Modern ve responsive tasarım
- 🎭 Smooth animasyonlar (Framer Motion)
- 📱 Mobile-first yaklaşım
- 🎨 Tailwind CSS ile özelleştirilebilir
- ⚡ Vite ile hızlı development
- 🌈 Gradient ve modern UI elementleri

## 📂 Proje Yapısı

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation bar
│   ├── Hero.jsx         # Hero section
│   ├── Stats.jsx        # İstatistikler
│   ├── Features.jsx     # Özellikler
│   ├── HowItWorks.jsx   # Nasıl çalışır
│   ├── Download.jsx     # Uygulama indirme
│   └── Footer.jsx       # Footer
├── App.jsx              # Ana component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Sections

1. **Hero** - Ana başlık ve CTA
2. **Stats** - İstatistikler
3. **Features** - Platform özellikleri
4. **How It Works** - 4 adımlı süreç
5. **Download** - Uygulama indirme linkleri
6. **Footer** - İletişim ve linkler

## 🔧 Özelleştirme

Tailwind config dosyasından renkleri ve animasyonları özelleştirebilirsiniz:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: { ... }
    }
  }
}
```

## 📱 Responsive

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deploy

```bash
npm run build
```

Build klasörü production-ready static files içerir.
