import { resolveComponent as r, openBlock as s, createBlock as t, normalizeClass as c } from "vue";
import i from "../../_virtual/vue-theme.es.js";
const a = {
  props: {
    icon: {
      type: Array,
      required: !0
    },
    size: {
      type: String,
      required: !1,
      validator: (o) => ["2xs", "xs", "sm", "lg", "xl", "2xl"].includes(o)
    }
  }
};
function l(o, f, e, d, _, m) {
  const n = r("fa");
  return s(), t(n, {
    icon: e.icon,
    "fixed-width": "",
    class: c({ ["fa-" + e.size]: e.size })
  }, null, 8, ["icon", "class"]);
}
const x = /* @__PURE__ */ i(a, [["render", l]]);
export {
  x as default
};
