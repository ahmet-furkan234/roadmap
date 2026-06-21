# Programlama Nedir?

Programlama, belirli bir dil aracılığıyla bir sorunu çözmeye yarayan bütündür.

Bu tanımın her kelimesi önemli.

---

## Bir Dil

Programlama dilleri, tıpkı İngilizce veya Türkçe gibi birer dildir.

Her dilin kendine özgü kelimeleri, kuralları ve sözdizimi vardır. İngilizce'de "if" kelimesi bir koşul belirtir. JavaScript'te de `if` aynı işi yapar. Python'da da. Ama her birinin yazılış biçimi, kuralları, alışkanlıkları farklıdır — tıpkı dillerin birbirinden farklı olması gibi.

```
Türkçe:     Eğer yaş 18'den büyükse, "girebilirsin" yaz.
JavaScript: if (yas > 18) { console.log("girebilirsin") }
Python:     if yas > 18: print("girebilirsin")
```

Üçü de aynı şeyi söylüyor. Farklı dillerde.

### Kelimeler ve anlamları

Her programlama dilinde iki tür kelime vardır:

**Dilin kendi kelimeleri (anahtar kelimeler)** — önceden tanımlanmış, özel anlamı olan kelimeler. Bunları sen icat edemezsin, dilin sana verdiği kelimelerdir.

```
if, else, for, while, return, true, false...
```

**Senin koyduğun kelimeler (değişken, fonksiyon isimleri)** — sen yaratırsın, sen isim verirsin.

```
kullanici, sifre, toplamHesapla, siparisListesi...
```

Bu ikisinin bir araya gelmesiyle cümleler, cümlelerin bir araya gelmesiyle programlar oluşur.

---

## Belirli Bir Sorun

Programlama havada yapılmaz. Arkasında her zaman bir problem vardır.

"Kullanıcı giriş yapabilsin" — problem.
"Ürünlerin fiyatlarını listele" — problem.
"Mesajı karşı tarafa ilet" — problem.

Kod, bu problemlerin çözümüdür. Önce problemi anlamadan kod yazmaya çalışmak, cevabı bilmeden soru sormaya çalışmak gibidir.

Bu yüzden iyi bir yazılımcı her zaman şunu sorar: **"Tam olarak ne çözmek istiyorum?"**

---

## Kelimelerin Birleşimi: Programı Oluşturur

Tek bir kelime bir şey ifade etmez. Ama kelimeler bir araya gelince anlam doğar.

Aynısı kodda da geçerli:

```
kullanici          → sadece bir isim, bir şey yapmaz
kullanici.yas      → kullanıcının yaşına bakıyoruz
kullanici.yas > 18 → karşılaştırma yapıyoruz
if (kullanici.yas > 18) { girisIzniVer() }  → karar veriyoruz
```

Her satır bir öncekinin üzerine inşa edilir. Kelimeler cümle olur, cümleler blok olur, bloklar program olur.

---

## Peki Hangi Dili Öğrenmeli?

Bu soruyu herkes sorar ve çoğu zaman yanlış ağırlık verilir.

Şunu düşün: Türkçe bilen biri İspanyolca öğrenmek istediğinde sıfırdan başlamaz. Dil nedir, cümle nasıl kurulur, fiil nasıl çekilir — bunları zaten biliyor. Sadece yeni kelimeleri ve yeni kuralları öğreniyor.

Programlamada da aynısı geçerli. **İlk dili öğrendiğinde ikincisi çok daha kolay gelir.** Çünkü mantık aynı, sadece sözdizimi değişiyor.

O yüzden şu an hangi dili seçtiğin, zannettiğin kadar kritik değil. Önemli olan **bir dili iyi öğrenmek** — kelimeleri, kuralları, düşünme biçimini içselleştirmek.

---

## Özet

| Kavram | Anlamı |
|---|---|
| Programlama dili | Problemi çözmek için kullanılan dil — İngilizce gibi |
| Anahtar kelimeler | Dilin sana verdiği özel kelimeler |
| Değişken / Fonksiyon | Senin koyduğun kelimeler |
| Program | Bu kelimelerin anlamlı bir araya gelmesi |
| Problem | Her programın arkasındaki neden |

---

> Dil öğrenmek kelime ezberlemek değildir. Düşünme biçimini kazanmaktır. Programlama da öyle — syntax değil, problemleri dile döküp çözme alışkanlığı.

---

## 📚 Kaynaklar

- [Yazılım Bilimi — Sıfırdan Yazılım Öğrenme Serisi](https://www.youtube.com/watch?v=nxkRb_I33_A) — "Nasıl başlarım?" sorusuna direkt cevap veren Türkçe video serisi. Bu bölümle birlikte izle.
- [BTK Akademi — Algoritma Programlama ve Veri Yapılarına Giriş](https://www.btkakademi.gov.tr/portal/course/algoritma-programlama-ve-veri-yapilarina-giris-12565) — Programlamanın mantığını dil bağımsız öğreten ücretsiz Türkçe kurs.
- [Patika.dev](https://www.patika.dev/) — Hangi dili öğreneceğine karar verdikten sonra buradan ilgili öğrenme yoluna gir.

**Bir sonraki adım:** [Değişkenler ve Veri Tipleri →](./06-degiskenler)
