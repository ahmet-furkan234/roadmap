import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Javascript","description":"","frontmatter":{},"headers":[],"relativePath":"bolumler/15-javascript.md","filePath":"bolumler/15-javascript.md","lastUpdated":1782039436000}');
const _sfc_main = { name: "bolumler/15-javascript.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="javascript" tabindex="-1">Javascript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;Javascript&quot;">​</a></h1><blockquote><p>Bu bölüm henüz hazırlanıyor. İçerik eklenecek.</p></blockquote><hr><p><em>İçerik yakında eklenecek.</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bolumler/15-javascript.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _15Javascript = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _15Javascript as default
};
