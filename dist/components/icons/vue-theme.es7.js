import n from "./vue-theme.es10.js";
import { resolveComponent as r, openBlock as t, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const a = {
  components: {
    Icon: n
  }
};
function m(o, f, _, i, l, u) {
  const e = r("Icon");
  return t(), c(e, s({ icon: ["far", "square-plus"] }, o.$attrs), null, 16);
}
const k = /* @__PURE__ */ p(a, [["render", m]]);
export {
  k as default
};
