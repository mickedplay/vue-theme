import e from "./vue-theme.es10.js";
import { resolveComponent as r, openBlock as t, createBlock as c, mergeProps as p } from "vue";
import s from "../../_virtual/vue-theme.es.js";
const m = {
  components: {
    Icon: e
  }
};
function a(o, f, _, i, l, d) {
  const n = r("Icon");
  return t(), c(n, p({ icon: ["far", "floppy-disk"] }, o.$attrs), null, 16);
}
const k = /* @__PURE__ */ s(m, [["render", a]]);
export {
  k as default
};
