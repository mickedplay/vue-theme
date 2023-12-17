import e from "./vue-theme.es10.js";
import { resolveComponent as r, openBlock as t, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const m = {
  components: {
    Icon: e
  }
};
function a(o, f, i, _, l, u) {
  const n = r("Icon");
  return t(), c(n, s({ icon: ["fas", "link"] }, o.$attrs), null, 16);
}
const I = /* @__PURE__ */ p(m, [["render", a]]);
export {
  I as default
};
