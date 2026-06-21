# Değişkenler ve Veri Tipleri

## Önce: Veri Nedir?

Her şeyden önce şunu anlamak gerekiyor: bilgisayarlar ne yapar?

**Veri alır, işler, veri üretir.**

Hepsi bu. Kullanıcı bir form doldurur — veri. Butona tıklar — veri. Bir sayı hesaplanır — veri. Ekrana bir yazı çıkar — veri.

Veri, bilgisayarın üzerinde çalıştığı her şeydir. Bir isim, bir sayı, bir tarih, bir resim — hepsi verdir. Yazılımcının işi bu veriyi almak, anlamlı bir şekilde işlemek ve bir yere iletmektir.

---

## Değişken Nedir?

Veriyi bir yerde tutman gerekiyor. İşte bunun için **değişken** var.

Değişkeni bir kağıt parçası gibi düşün.

Kağıda bir şey yazarsın. O şey orada durur. İstediğinde okursun. İstediğinde silersin ve başka bir şey yazarsın.

```
kağıt = "Ahmet"
kağıt = "Mehmet"    ← üstüne yeni bir şey yazdın
```

Kodda da aynısı:

```js
isim = "Ahmet"
isim = "Mehmet"     ← değer değişti, kağıt aynı kağıt
```

Kağıdın bir de adı var — `isim`. Bu ad sayesinde ona istediğin zaman ulaşabiliyorsun. Yüzlerce kağıt olsa bile "isim yazan kağıdı getir" diyebiliyorsun.

### Neden önemli?

Çünkü programlar statik değil, dinamiktir. Her kullanıcı farklı bir isim girer. Her sipariş farklı bir fiyat taşır. Her gün farklı bir tarih var.

Değişken olmadan program sadece tek bir kullanıcı için, tek bir değerle çalışabilirdi. Değişkenler programı esnek yapar.

---

## Veri Tipleri: Kağıda Ne Yazıyorsun?

Her kağıda her şey yazılmaz — ya da yazılsa da anlamı değişir.

"3" yazan kağıt ile 3 yazan kağıt farklıdır. Biri metin, diğeri sayı. İkisini toplamak istediğinde bu fark önem kazanır.

Bilgisayar da veriyi türüne göre ayırt eder. Buna **veri tipi** denir.

### Temel veri tipleri

**Metin (String)**
Tırnak içine yazılan her şey metindir. İsimler, cümleler, adresler...

```
"Ahmet"
"İstanbul"
"Merhaba dünya!"
"42"          ← bu da metin, sayı değil — tırnak içinde
```

**Sayı (Number)**
Hesaplama yapılabilen değerler. Tırnak yok.

```
42
3.14
-7
1000000
```

**Doğru/Yanlış (Boolean)**
Sadece iki değer alabilir: `true` ya da `false`. Evet ya da hayır.

```
kullanicıGirisYaptiMi = true
urunStokta = false
```

**Boş (Null / Undefined)**
"Henüz bir değer yok" demektir. Kağıt var ama üzerinde hiçbir şey yazılı değil.

```
kullaniciAdresi = null     ← adres girilmedi
```

---

## Kağıt Analojisini Genişletelim

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   isim          │     │   yas           │     │   aktifMi       │
│                 │     │                 │     │                 │
│   "Ahmet"       │     │   25            │     │   true          │
│                 │     │                 │     │                 │
│   (metin)       │     │   (sayı)        │     │   (boolean)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

Her kağıdın bir adı var, bir değeri var, bir tipi var.

Ad → ona nasıl ulaşırsın
Değer → içinde ne var
Tip → ne tür bir şey

---

## Pratik: Zihninde Canlandır

Bir kullanıcı kayıt formu düşün:

```
Ad Soyad   : [Ahmet Yılmaz    ]
Yaş        : [28              ]
E-posta    : [ahmet@mail.com  ]
Üye mi?    : [✓               ]
```

Bu formun arkasında şunlar var:

```
adSoyad   = "Ahmet Yılmaz"     → metin
yas       = 28                  → sayı
eposta    = "ahmet@mail.com"    → metin
uyeMi     = true                → boolean
```

Dört kağıt. Dört farklı değer. Dört farklı tip.

---

## Özet

| Kavram | Anlamı | Örnek |
|---|---|---|
| Veri | Bilgisayarın üzerinde çalıştığı her şey | isim, yaş, fiyat |
| Değişken | Veriyi tutan kağıt | `isim = "Ahmet"` |
| String | Metin verisi | `"Merhaba"` |
| Number | Sayı verisi | `42` |
| Boolean | Evet/Hayır verisi | `true`, `false` |
| Null | Henüz değer yok | `null` |

---

> Değişkenler olmadan program bir fotoğraf gibidir — donmuş, tek bir anı. Değişkenlerle program bir film olur — hareket eder, değişir, tepki verir.

---

## 📚 Kaynaklar

- [BTK Akademi — Sıfırdan İleri Seviye Python](https://www.btkakademi.gov.tr/portal/course/sifirdan-ileri-seviye-python-programlama-5877) — Değişken ve veri tipleri konusunu Python üzerinden pratiğe dökmek için. Tamamen ücretsiz, Türkçe.
- [Yazılım Bilimi](https://www.youtube.com/@YazilimBilimiAnkara) — JavaScript, Python ve Java üzerinden değişken ve veri tipi anlatımları var. Hangi dili seçersen o dildeki videoya bak.
- [Yakın Kampüs](https://www.youtube.com/channel/UCrFuOhaISP4OMarjFR4dYBA) — Temel programlama kavramlarını farklı dillerde anlatan 1000+ ücretsiz Türkçe video.

**Bir sonraki adım:** [Koşullar ve Döngüler →](./07-kosullar-donguler)
