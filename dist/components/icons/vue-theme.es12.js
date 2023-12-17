import c from "./vue-theme.es10.js";
import { resolveComponent as e, openBlock as t, createBlock as r, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const m = {
  components: {
    Icon: c
  }
};
function a(o, f, _, l, i, d) {
  const n = e("Icon");
  return t(), r(n, s({
    icon: ["fas", "lock"],
    class: "text-red-400"
  }, o.$attrs), null, 16);
}
const I = /* @__PURE__ */ p(m, [["render", a]]);
export {
  I as default
};
