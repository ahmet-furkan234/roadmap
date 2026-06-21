# İnternet ve Web

İnsanlar bu ikisini çoğu zaman aynı şey sanır. Değiller.

---

## İnternet Nedir?

İnternet, milyonlarca bilgisayarın birbirine kablolu ve kablosuz olarak bağlanmasıyla oluşan devasa bir ağdır.

Sadece bilgisayarlar değil — telefonlar, sunucular, akıllı televizyonlar, hatta buzdolapları bile bu ağın bir parçası olabilir. Hepsi birbiriyle konuşabilir, veri gönderip alabilir.

Bunu bir şehrin altyapısı gibi düşün: yollar, köprüler, tüneller. Şehrin kendisi değil — ama şehirde hareket etmeyi mümkün kılan iskelet.

### Peki bu bağlantı nasıl çalışır?

Her cihazın bu ağda bir adresi vardır: **IP adresi.** Tıpkı evin posta adresi gibi. Bir veri göndermek istediğinde "nereye gidecek?" sorusunun cevabı bu adrestir.

```
Senin bilgisayarın  →  192.168.1.5
Google'ın sunucusu  →  142.250.74.46
```

Bu adresler sayısal olduğu için insanlar tarafından hatırlaması zordur. Bu yüzden **alan adları (domain)** icat edildi — `google.com` yazdığında aslında o sayısal adrese gidiyorsun.

---

## Web Nedir?

Web, internetin görünen yüzüdür.

İnterneti devasa bir ağ olarak düşünürsen, web bu ağda dolaşmanı sağlayan vagondur. Seni bir noktadan diğerine taşır — bir sayfadan başka bir sayfaya, bir siteden başka bir siteye.

Teknik olarak web şu üç şeyin üzerine kuruludur:

| | Ne işe yarar |
|---|---|
| **HTTP/HTTPS** | Vagonun hareket ettiği ray — veri nasıl taşınır |
| **URL** | Adres — nereye gidiyorsun |
| **HTML** | Sayfanın kendisi — ne görüyorsun |

Tarayıcına `https://google.com` yazdığında şunlar olur:

```
1. Tarayıcı "google.com kimdir?" diye sorar  →  DNS
2. DNS IP adresini döner                      →  142.250.74.46
3. Tarayıcı o adrese bağlanır                →  HTTP isteği
4. Google'ın sunucusu sayfayı gönderir       →  HTML dosyası
5. Tarayıcı HTML'i okuyup ekrana çizer       →  Gördüğün sayfa
```

Bir sayfayı her açtığında bu döngü çalışır — saniyenin çok küçük bir parçasında.

---

## İnternet ≠ Web

Web, internetin üzerinde çalışan bir **servistir** — ama tek servis değildir.

İnterneti kullanan başka şeyler de var:

- **E-posta** — web değil, ama internet üzerinden gider
- **WhatsApp mesajları** — web değil, internet üzerinden
- **Online oyunlar** — web değil, internet üzerinden
- **Dosya transferi (FTP)** — web değil, internet üzerinden

Web sadece tarayıcıyla açtığın sayfalar demektir. İnternet ise bunların hepsinin geçtiği altyapı.

---

## Yazılımcı Olarak Neden Önemli?

Yazacağın uygulamaların büyük çoğunluğu ya web üzerinde çalışacak ya da internet üzerinden veri alıp gönderecek.

Bir web sitesi yaparken aslında şunu yapıyorsun: birisinin tarayıcısına, onun vagonu aracılığıyla, senin sunucundan bir HTML dosyası ulaştırmak. Bu kadarcık.

Bunu anladığında HTML, CSS, JavaScript, API gibi kavramların neden var olduğu kendiliğinden anlam kazanır.

---

## Özet

| | İnternet | Web |
|---|---|---|
| **Nedir** | Devasa bilgisayar ağı | Bu ağda dolaşmayı sağlayan sistem |
| **Nasıl çalışır** | Kablo + kablosuz bağlantı | HTTP + URL + HTML |
| **Örnek** | Yollar ve köprüler | Bu yollarda giden vagon |
| **Olmadan** | Web çalışmaz | İnternet yine de çalışır |

---

> İnterneti inşa eden mühendisler vagonu da beraberinde getirdi. Sen artık o vagona binmeyeceksin — onu tasarlayacaksın.

**Bir sonraki adım:** [Programlama Nedir? →](./05-programlama-nedir)
