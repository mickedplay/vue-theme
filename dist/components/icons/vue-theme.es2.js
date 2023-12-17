import r from "./vue-theme.es10.js";
import { resolveComponent as e, openBlock as t, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const f = {
  components: {
    Icon: r
  }
};
function m(o, a, _, l, i, u) {
  const n = e("Icon");
  return t(), c(n, s({ icon: ["fas", "arrow-left-long"] }, o.$attrs), null, 16);
}
const g = /* @__PURE__ */ p(f, [["render", m]]);
export {
  g as default
};
