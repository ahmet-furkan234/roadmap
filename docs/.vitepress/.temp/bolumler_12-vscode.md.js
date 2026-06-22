import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vscode","description":"","frontmatter":{},"headers":[],"relativePath":"bolumler/12-vscode.md","filePath":"bolumler/12-vscode.md","lastUpdated":1782039436000}');
const _sfc_main = { name: "bolumler/12-vscode.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vscode" tabindex="-1">Vscode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;Vscode&quot;">​</a></h1><blockquote><p>Bu bölüm henüz hazırlanıyor. İçerik eklenecek.</p></blockquote><hr><p><em>İçerik yakında eklenecek.</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bolumler/12-vscode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12Vscode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12Vscode as default
};
