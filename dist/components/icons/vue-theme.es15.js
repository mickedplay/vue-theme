import e from "./vue-theme.es10.js";
import { resolveComponent as c, openBlock as t, createBlock as r, mergeProps as s } from "vue";
import p from "../../_virtual/vue-theme.es.js";
const m = {
  components: {
    Icon: e
  }
};
function a(o, f, l, _, i, u) {
  const n = c("Icon");
  return t(), r(n, s({
    icon: ["fas", "unlock"],
    class: "text-green-500"
  }, o.$attrs), null, 16);
}
const I = /* @__PURE__ */ p(m, [["render", a]]);
export {
  I as default
};
