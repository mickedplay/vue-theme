import e from "./vue-theme.es10.js";
import { resolveComponent as r, openBlock as c, createBlock as t, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const m = {
  components: {
    Icon: e
  }
};
function a(o, f, _, i, l, d) {
  const n = r("Icon");
  return c(), t(n, s({ icon: ["fas", "chevron-down"] }, o.$attrs), null, 16);
}
const h = /* @__PURE__ */ p(m, [["render", a]]);
export {
  h as default
};
