import e from "./vue-theme.es10.js";
import { resolveComponent as t, openBlock as r, createBlock as c, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const a = {
  components: {
    Icon: e
  }
};
function m(o, f, _, i, l, u) {
  const n = t("Icon");
  return r(), c(n, s({
    icon: ["far", "pen-to-square"],
    class: "text-orange-500"
  }, o.$attrs), null, 16);
}
const x = /* @__PURE__ */ p(a, [["render", m]]);
export {
  x as default
};
