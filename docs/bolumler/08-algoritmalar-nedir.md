# Algoritmalar Nedir?

Algoritma kelimesini duyan çoğu insan karmaşık matematik formülleri hayal eder. Oysa çok daha basit ve çok daha yakın bir şey.

---

## Algoritma Nedir?

Algoritma, bir problemi çözmek için izlenen **adım adım talimatlar dizisidir.**

Hepsi bu.

Sabah kalktığında çay demleme sürecin bir algoritmadır:

```
1. Su dolu çaydanlığı ocağa koy
2. Ocağı yak
3. Su kaynayınca çayı demle
4. 10 dakika bekle
5. Bardağa dök
```

Bu adımların sırası önemlidir. 4. adımı 2. adımdan önce yaparsan çay olmaz. Algoritmalar da böyle çalışır — adımların sırası, koşulları ve tekrarları bellidir.

---

## Neden Önemli?

Kod yazmak aslında algoritmayı bir dile çevirmektir.

Önce "bu problemi nasıl çözeceğim?" sorusunu cevaplamalısın. Sonra o cevabı koda dökersin. Algoritman yanlışsa, yazdığın kod ne kadar düzgün olursa olsun yanlış sonuç verir.

Bunu şöyle düşün: bir inşaat planı olmadan duvar örülmez. Algoritma, yazılımın planıdır.

### Gerçek hayat örneği

Sana bir liste verildi: `[5, 2, 8, 1, 9, 3]`
Görevin bu listeyi küçükten büyüğe sıralamak.

Bunu nasıl yaparsın?

**Yöntem 1 — Sezgisel:**
Listeye bak, en küçüğü bul, başa koy. Kalanlar arasından tekrar en küçüğü bul, yanına koy. Bitene kadar devam et.

**Yöntem 2 — Karşılaştırmalı:**
Yan yana iki sayıya bak. Soldaki büyükse yer değiştir. Listenin sonuna gel. Tekrar başa dön. Hiç yer değiştirmeden geçebilene kadar devam et.

İkisi de aynı sonuca ulaşır ama biri daha hızlı çalışır. İşte bu fark — algoritma seçimi — yazılımda kritiktir. Küçük bir listede hissedilmez. Ama milyon satırlık veride saniyeler ile saatler arasındaki fark olur.

---

## Algoritmanın Üç Temel Unsuru

**1. Sıralı Adımlar**
Her adım bir öncekinin üzerine kuruludur. Sıra bozulursa sonuç bozulur.

```
✓ Önce hamuru yoğur, sonra şekil ver, sonra pişir
✗ Önce pişir, sonra hamuru yoğur
```

**2. Koşullar**
"Eğer şöyle ise şunu yap, değilse bunu yap." Kararlar algoritmanın yönünü değiştirir.

```
Eğer kişinin yaşı 18'den büyükse → girişe izin ver
Değilse → geri çevir
```

**3. Tekrarlar**
Aynı işlemi birden fazla kez yapma ihtiyacı. "Listedeki her eleman için şunu yap."

```
Sepetteki her ürün için:
    fiyatını al
    toplama ekle
Toplam fiyatı göster
```

---

## Algoritma Olmadan Ne Olur?

Algoritmasız kod yazmak, rotasız araba kullanmak gibidir. Hareket edersin ama nereye gittiğini bilmezsin.

Deneyimsiz yazılımcıların en büyük hatası direkt koda atlamaktır. Önce algoritmayı — bazen sadece kağıt üzerinde — çözmek, kod yazmayı çok daha kolay ve hatasız hale getirir.

Profesyonel bir yazılımcı çoğu zaman koddan önce şunu yapar:

```
Problemi anla
  ↓
Adımları yaz (kağıtta, kelimelerle)
  ↓
Adımları test et (zihinde veya örneklerle)
  ↓
Koda çevir
```

---

## Algoritma ve Matematik

Algoritmalar matematiğin bir dalıdır — ama ileri matematik bilmek gerekmez.

Temel mantık yeterlidir: "eğer... ise", "her biri için", "tekrar et". Bu üç yapı, dünyadaki algoritmaların büyük çoğunluğunun iskeletidir.

İleride öğreneceğin sıralama, arama, veri yapıları gibi konular — hepsi bu basit yapıların üzerine inşa edilir.

---

## Özet

| Kavram | Anlamı |
|---|---|
| Algoritma | Problemi çözmek için adım adım talimatlar |
| Sıralı adımlar | Her adım belirli bir sıradadır |
| Koşul | "Eğer şöyle ise..." kararı |
| Tekrar | Aynı işlemi birden fazla kez yapma |
| Neden önemli | Kod doğru olsa bile algoritma yanlışsa sonuç yanlıştır |

---

> Algoritma düşünmek, bir problemi çözülmüş gibi kafanda adım adım canlandırabilmektir. Bu beceri zamanla gelişir — ama bilinçli olarak pratik yapılmalıdır.

## 📚 Kaynaklar

- [BTK Akademi — Algoritma Programlama ve Veri Yapılarına Giriş](https://www.btkakademi.gov.tr/portal/course/algoritma-programlama-ve-veri-yapilarina-giris-12565) — Algoritma mantığını sıfırdan öğreten ücretsiz Türkçe kurs.
- [Yazılım Bilimi](https://www.youtube.com/@YazilimBilimiAnkara) — Algoritma ve veri yapılarını Türkçe anlatan video serisi.

**Bir sonraki adım:** [Değişkenler ve Veri Tipleri →](./09-degiskenler)
