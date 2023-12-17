import r from "./vue-theme.es10.js";
import { resolveComponent as e, openBlock as t, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const m = {
  components: {
    Icon: r
  }
};
function a(o, f, i, _, l, h) {
  const n = e("Icon");
  return t(), c(n, s({ icon: ["fas", "chevron-right"] }, o.$attrs), null, 16);
}
const I = /* @__PURE__ */ p(m, [["render", a]]);
export {
  I as default
};
