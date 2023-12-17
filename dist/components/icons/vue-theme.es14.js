import e from "./vue-theme.es10.js";
import { resolveComponent as r, openBlock as t, createBlock as c, mergeProps as p } from "vue";
import s from "../../_virtual/vue-theme.es.js";
const a = {
  components: {
    Icon: e
  }
};
function m(o, f, _, i, l, d) {
  const n = r("Icon");
  return t(), c(n, p({ icon: ["fas", "paper-plane"] }, o.$attrs), null, 16);
}
const k = /* @__PURE__ */ s(a, [["render", m]]);
export {
  k as default
};
