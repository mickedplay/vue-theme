import n from "./vue-theme.es10.js";
import { resolveComponent as t, openBlock as e, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const m = {
  components: {
    Icon: n
  }
};
function a(o, f, i, _, l, u) {
  const r = t("Icon");
  return e(), c(r, s({ icon: ["fas", "arrow-right"] }, o.$attrs), null, 16);
}
const g = /* @__PURE__ */ p(m, [["render", a]]);
export {
  g as default
};
