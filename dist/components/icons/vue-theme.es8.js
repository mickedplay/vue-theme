import n from "./vue-theme.es10.js";
import { resolveComponent as t, openBlock as r, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const a = {
  components: {
    Icon: n
  }
};
function m(o, f, _, l, i, d) {
  const e = t("Icon");
  return r(), c(e, s({
    icon: ["far", "trash-can"],
    class: "text-red-400"
  }, o.$attrs), null, 16);
}
const x = /* @__PURE__ */ p(a, [["render", m]]);
export {
  x as default
};
