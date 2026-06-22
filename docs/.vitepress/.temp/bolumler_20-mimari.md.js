import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mimari","description":"","frontmatter":{},"headers":[],"relativePath":"bolumler/20-mimari.md","filePath":"bolumler/20-mimari.md","lastUpdated":1782039436000}');
const _sfc_main = { name: "bolumler/20-mimari.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mimari" tabindex="-1">Mimari <a class="header-anchor" href="#mimari" aria-label="Permalink to &quot;Mimari&quot;">​</a></h1><blockquote><p>Bu bölüm henüz hazırlanıyor. İçerik eklenecek.</p></blockquote><hr><p><em>İçerik yakında eklenecek.</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bolumler/20-mimari.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20Mimari = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _20Mimari as default
};
