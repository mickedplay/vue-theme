import e from "./vue-theme.es10.js";
import { resolveComponent as r, openBlock as t, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const f = {
  components: {
    Icon: e
  }
};
function m(o, a, _, i, l, u) {
  const n = r("Icon");
  return t(), c(n, s({ icon: ["fas", "chevron-left"] }, o.$attrs), null, 16);
}
const h = /* @__PURE__ */ p(f, [["render", m]]);
export {
  h as default
};
