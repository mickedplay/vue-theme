import n from "./vue-theme.es10.js";
import { resolveComponent as e, openBlock as t, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const f = {
  components: {
    Icon: n
  }
};
function m(o, a, _, i, l, u) {
  const r = e("Icon");
  return t(), c(r, s({ icon: ["fas", "arrow-left"] }, o.$attrs), null, 16);
}
const k = /* @__PURE__ */ p(f, [["render", m]]);
export {
  k as default
};
