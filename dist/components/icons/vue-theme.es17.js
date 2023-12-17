import n from "./vue-theme.es10.js";
import { resolveComponent as c, openBlock as t, createBlock as e } from "vue";
import r from "../../_virtual/vue-theme.es.js";
const p = {
  components: {
    Icon: n
  }
};
function s(i, m, _, a, f, d) {
  const o = c("Icon");
  return t(), e(o, {
    icon: ["fas", "spinner"],
    spin: ""
  });
}
const $ = /* @__PURE__ */ r(p, [["render", s]]);
export {
  $ as default
};
