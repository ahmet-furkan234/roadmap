import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Css","description":"","frontmatter":{},"headers":[],"relativePath":"bolumler/14-css.md","filePath":"bolumler/14-css.md","lastUpdated":1782039436000}');
const _sfc_main = { name: "bolumler/14-css.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="css" tabindex="-1">Css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;Css&quot;">​</a></h1><blockquote><p>Bu bölüm henüz hazırlanıyor. İçerik eklenecek.</p></blockquote><hr><p><em>İçerik yakında eklenecek.</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bolumler/14-css.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14Css = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _14Css as default
};
