import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Yazılım Yolculuğu',
  description: 'Sıfırdan yazılımcı olmak için kapsamlı rehber',
  lang: 'tr-TR',
  base: '/roadmap/',
  lastUpdated: true,

  themeConfig: {
    logo: '🗺️',
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'Roadmap', link: '/bolumler/01-baslangic' },
    ],

    sidebar: [
      {
        text: '🚀 Başlangıç',
        items: [
          { text: 'Neden Yazılım?', link: '/bolumler/01-baslangic' },
          { text: 'Nasıl Çalışmalısın?', link: '/bolumler/02-calisma-yontemi' },
        ],
      },
      {
        text: '🧠 Temel Kavramlar',
        collapsed: false,
        items: [
          { text: 'Bilgisayarını Tanı', link: '/bolumler/03-bilgisayar-temelleri' },
          { text: 'İnternet ve Web', link: '/bolumler/04-internet-ve-web' },
          { text: 'Programlama Nedir?', link: '/bolumler/05-programlama-nedir' },
        ],
      },
      {
        text: '💻 Programlamaya Giriş',
        collapsed: false,
        items: [
          { text: 'Değişkenler ve Veri Tipleri', link: '/bolumler/06-degiskenler' },
          { text: 'Koşullar ve Döngüler', link: '/bolumler/07-kosullar-donguler' },
          { text: 'Fonksiyonlar', link: '/bolumler/08-fonksiyonlar' },
          { text: 'Veri Yapıları', link: '/bolumler/09-veri-yapilari' },
        ],
      },
      {
        text: '🛠️ Araçlar',
        collapsed: false,
        items: [
          { text: 'Terminal Kullanımı', link: '/bolumler/10-terminal' },
          { text: 'Git ve Versiyon Kontrolü', link: '/bolumler/11-git' },
          { text: 'VS Code Kullanımı', link: '/bolumler/12-vscode' },
        ],
      },
      {
        text: '🌐 Web Geliştirme',
        collapsed: true,
        items: [
          { text: 'HTML Temelleri', link: '/bolumler/13-html' },
          { text: 'CSS Temelleri', link: '/bolumler/14-css' },
          { text: 'JavaScript Temelleri', link: '/bolumler/15-javascript' },
        ],
      },
      {
        text: '⚙️ Backend ve Veritabanı',
        collapsed: true,
        items: [
          { text: 'Backend Nedir?', link: '/bolumler/16-backend-nedir' },
          { text: 'API Nedir?', link: '/bolumler/17-api' },
          { text: 'Veritabanı Temelleri', link: '/bolumler/18-veritabani' },
        ],
      },
      {
        text: '📦 İleri Seviye',
        collapsed: true,
        items: [
          { text: 'Algoritmalar', link: '/bolumler/19-algoritmalar' },
          { text: 'Yazılım Mimarisi', link: '/bolumler/20-mimari' },
          { text: 'İş Hayatı ve Kariyer', link: '/bolumler/21-kariyer' },
        ],
      },
    ],

    socialLinks: [],

    footer: {
      message: 'Yazılım yolculuğunda her adım bir ilerlemedir.',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/roadmap/edit/main/docs/:path',
      text: 'Bu sayfayı düzenle',
    },
  },
})
