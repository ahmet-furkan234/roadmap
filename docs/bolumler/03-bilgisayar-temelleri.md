# Bilgisayarını Tanı

Yazılım öğrenmeye başlamadan önce, üzerinde çalışacağın ortamı tanıman gerekiyor.

Transistörler ve elektrik akımı değil — dosyalar, klasörler, programlar ve işletim sistemi. Bunları kullanıcı olarak değil, artık onu yöneten biri olarak görmeye başlayacaksın.

---

## İşletim Sistemi Nedir?

Bilgisayarı açtığında karşına çıkan her şey — masaüstü, uygulamalar, dosyalar — bunların hepsini yöneten bir yazılım var: **işletim sistemi.**

İşletim sistemi, senin bilgisayarın donanımıyla (ekran, klavye, disk) konuşmasını sağlar. Sen programa tıklarsın, işletim sistemi onu çalıştırır. Dosya kaydedersin, işletim sistemi onu diske yazar.

Üç büyük işletim sistemi var:

| | Windows | macOS | Linux |
|---|---|---|---|
| **Kim kullanır** | En yaygın, genel kullanıcı | Tasarımcı, Apple kullanıcısı | Yazılımcı, sunucu |
| **Yazılım için uygun mu** | Evet | Evet | Evet, ve en güçlüsü |
| **Öğrenme eğrisi** | Düşük | Orta | Yüksek |

Hangisini kullanıyorsan devam et. Yazılım öğrenmek için işletim sistemi değiştirmek zorunda değilsin — ama ileride Linux ile tanışmak işine çok yarayacak.

---

## Dosya Sistemi: Her Şey Bir Dosyadır

Bilgisayarındaki her şey — bir belge, bir resim, bir müzik dosyası, bir program — aslında bir **dosyadır.** Ve bu dosyalar **klasörler** içinde düzenli tutulur.

Yazılımda da aynı mantık geçerli. Yazdığın kod bir dosyadır. Projen bir klasördür. Tüm programlar dosyalardan oluşur.

### Dosya uzantıları

Dosya adının sonundaki `.` ile gelen kısım, dosyanın türünü söyler:

```
resim.jpg       → Fotoğraf
belge.pdf       → PDF belgesi
muzik.mp3       → Ses dosyası
kod.js          → JavaScript kodu
kod.py          → Python kodu
kod.html        → Web sayfası
```

Yazılımcı olarak bu uzantıları tanımak önemli. Bir `.js` dosyası gördüğünde "bu bir JavaScript dosyası" diyebilmek gerekiyor.

### Klasör yapısı

Dosyalar rastgele dağılmaz — bir ağaç yapısı gibi düzenlenir:

```
Belgeler/
├── Projeler/
│   ├── ilk-proje/
│   │   ├── index.html
│   │   └── style.css
│   └── ikinci-proje/
│       └── app.js
└── Notlar/
    └── fikirler.txt
```

Bu yapıyı görmek ve zihninde canlandırmak önemli. İleride terminal kullanmaya başladığında bu ağacın içinde gezineceksin.

---

## RAM ve Disk: İki Farklı Bellek

Bilgisayarda iki tür bellek var. Yazılım öğrenirken bu farkı bilmek işine yarayacak.

**Disk (Depolama)** — kalıcı bellek. Dosyaların, programların, her şeyin tutulduğu yer. Bilgisayarı kapattığında buradaki her şey kalır.

**RAM** — geçici bellek. Şu an açık olan programların, çalışan işlemlerin tutulduğu yer. Bilgisayarı kapattığında buradaki her şey silinir.

Bunu şöyle düşün:
- **Disk** = çantandaki kitap. Her zaman orada.
- **RAM** = masanın üstü. Şu an üzerinde çalıştığın şeyler. Masayı topladığında temizlenir.

Kod yazarken sık sık "bu neden yavaş?" veya "neden bu kadar yer kaplıyor?" sorularıyla karşılaşacaksın. Çoğunlukla cevap bu ikisinin birinde.

---

## Program Nedir?

Program, bilgisayara ne yapacağını söyleyen **talimatlar bütünüdür.**

Tarayıcın bir program. Müzik çaların bir program. Hesap makinesi bir program. Ve ileride senin yazdığın kodlar da birer program olacak.

Bir program çalıştığında şunlar olur:
1. Diskten RAM'e yüklenir
2. İşlemci talimatları sırayla okur ve çalıştırır
3. Program kapandığında RAM'den silinir

Sen kod yazdığında aslında bu talimatları sen oluşturuyorsun. "Kullanıcı butona tıklarsa şunu yap, şu sayıyı hesapla, şu metni göster" — bunların hepsi talimattır.

---

## Pratik: Şimdi Yap

Bilgisayarını bir yazılımcı gibi keşfet:

1. **Dosya yöneticisini aç** — Windows'ta Dosya Gezgini, Mac'te Finder. Klasör yapısına bak. Kaç seviye derinliğe gidebiliyorsun?

2. **Dosya uzantılarını görünür yap** — varsayılan olarak gizlidir. Ayarlardan aç. Artık her dosyanın ne olduğunu göreceksin.

3. **Görev yöneticisini aç** — Windows'ta `Ctrl + Shift + Esc`, Mac'te `Activity Monitor`. RAM'in ne kadarı kullanılıyor? Hangi programlar en çok yer kaplıyor?

4. **Masaüstünde bir klasör oluştur** — adı `projelerim` olsun. İçine birkaç alt klasör ekle. Bu, ileride projelerini düzenleyeceğin yapının taslağı.

---

## Özet

| Kavram | Ne demek |
|---|---|
| İşletim sistemi | Bilgisayarın her şeyini yöneten yazılım |
| Dosya | Bilgisayarda saklanan her şey |
| Klasör | Dosyaları düzenleyen kap |
| Disk | Kalıcı depolama — kapanınca silinmez |
| RAM | Geçici bellek — kapanınca silinir |
| Program | Bilgisayara ne yapacağını söyleyen talimatlar |

---

> Yazılımcı olmak bir kullanıcıdan farklı düşünmek demektir. Kullanıcı "program çalıştı" der. Yazılımcı "hangi dosyadan yüklendi, RAM'de ne kadar yer tuttu, ne zaman kapandı?" diye sorar.

---

## 📚 Kaynaklar

- [BTK Akademi — Bilişim Teknolojileri Temelleri](https://www.btkakademi.gov.tr/) — BTK Akademi'ye gir, arama kutusuna "bilgisayar temelleri" yaz. Ücretsiz, Türkçe, sertifikalı kurslar çıkacak.
- [Yakın Kampüs](https://www.youtube.com/channel/UCrFuOhaISP4OMarjFR4dYBA) — 1000'den fazla ücretsiz Türkçe eğitim videosu. İşletim sistemi ve temel bilgisayar konularını kapsamlı şekilde anlatan içerikler var.

**Bir sonraki adım:** [İnternet ve Web →](./04-internet-ve-web)
