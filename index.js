import IconBase from "./IconBase.vue";

export default {
 install(Vue, options) {
  Vue.component(options.as || IconBase.name, IconBase);
 }
};