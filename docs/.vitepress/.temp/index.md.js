import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Yazılım Yolculuğu","text":"Sıfırdan Yazılımcı Ol","tagline":"Hiç kod yazmamış biri olarak başla, profesyonel bir yazılımcı olarak bitir.","actions":[{"theme":"brand","text":"Yolculuğa Başla →","link":"/bolumler/01-baslangic"},{"theme":"alt","text":"Roadmap'i Gör","link":"/bolumler/02-calisma-yontemi"}]},"features":[{"icon":"🎯","title":"Adım Adım İlerle","details":"Her bölüm bir öncekinin üzerine inşa edilir. Acele etmene gerek yok, temeli sağlam at."},{"icon":"🧠","title":"Kavramları Anla","details":"Sadece kod yazmayı değil, neden öyle yazdığını öğrenirsin. Dil bağımsız düşünmeyi kazanırsın."},{"icon":"🛠️","title":"Pratikle Pekiştir","details":"Her konunun sonunda egzersizler ve mini projeler var. Öğrenmek yapmaktır."},{"icon":"📚","title":"En İyi Kaynaklar","details":"Her bölümde seçilmiş Türkçe ve İngilizce kaynaklar — ne okuyacağını, ne izleyeceğini bilirsin."},{"icon":"🗺️","title":"Nereye Gidiyorsun?","details":"Frontend mi, backend mi, mobil mi? Her yolun haritası burada."},{"icon":"💼","title":"Kariyere Hazırlan","details":"İş başvurusu, portföy, mülakat — yazılımcı olmak bir iş de."}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1782039436000}`);
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="roadmap-e-genel-bakıs" tabindex="-1">Roadmap&#39;e Genel Bakış <a class="header-anchor" href="#roadmap-e-genel-bakıs" aria-label="Permalink to &quot;Roadmap&#39;e Genel Bakış&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>📍 Buradan Başla</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 🧠 Temel Kavramlar        (2-4 hafta)</span></span>
<span class="line"><span>│   ├── Bilgisayar nasıl çalışır?</span></span>
<span class="line"><span>│   ├── İnternet nedir?</span></span>
<span class="line"><span>│   └── Programlama nedir?</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 💻 Programlamaya Giriş    (4-8 hafta)</span></span>
<span class="line"><span>│   ├── Değişken, koşul, döngü</span></span>
<span class="line"><span>│   ├── Fonksiyon ve mantık</span></span>
<span class="line"><span>│   └── Veri yapıları</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 🛠️ Araçlar                (1-2 hafta)</span></span>
<span class="line"><span>│   ├── Terminal</span></span>
<span class="line"><span>│   ├── Git</span></span>
<span class="line"><span>│   └── VS Code</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 🌐 Web Geliştirme          (8-12 hafta)</span></span>
<span class="line"><span>│   ├── HTML &amp; CSS</span></span>
<span class="line"><span>│   └── JavaScript</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── ⚙️ Backend &amp; Veritabanı   (8-12 hafta)</span></span>
<span class="line"><span>│   ├── Sunucu tarafı programlama</span></span>
<span class="line"><span>│   ├── API tasarımı</span></span>
<span class="line"><span>│   └── Veritabanı</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── 🚀 İleri Seviye &amp; Kariyer  (Sürekli)</span></span>
<span class="line"><span>    ├── Algoritmalar &amp; Veri Yapıları</span></span>
<span class="line"><span>    ├── Yazılım Mimarisi</span></span>
<span class="line"><span>    └── İş Hayatı</span></span></code></pre></div><blockquote><p><strong>Toplam Süre:</strong> Haftada 10-15 saat çalışırsan yaklaşık <strong>6-12 ay</strong> içinde iş başvurusu yapabilir hale gelirsin.</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
