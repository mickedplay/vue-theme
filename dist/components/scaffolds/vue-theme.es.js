import { openBlock as o, createElementBlock as n, renderSlot as r } from "vue";
import "./vue-theme.es2.js";
import s from "../../_virtual/vue-theme.es.js";
const t = {}, d = { class: "app-container w-full h-screen grid overflow-hidden default-transition grid-cols-[4rem,1fr] lg:grid-cols-[20rem,1fr] grid-rows-[4rem,1fr,5rem] lg:grid-rows-[4rem,1fr,3rem]" };
function i(e, a, f, l, u, c) {
  return o(), n("div", d, [
    r(e.$slots, "logo", {}, void 0, !0),
    r(e.$slots, "topbar", {}, void 0, !0),
    r(e.$slots, "sidebar", {}, void 0, !0),
    r(e.$slots, "main", {}, void 0, !0),
    r(e.$slots, "footer", {}, void 0, !0)
  ]);
}
const g = /* @__PURE__ */ s(t, [["render", i], ["__scopeId", "data-v-abd0a506"]]);
export {
  g as default
};
