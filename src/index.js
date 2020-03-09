import IconBase from './IconBase.vue'

export default {
  install(Vue, options = {}) {
    Vue.prototype.$IconBaseSrc = options.src
    Vue.component(options.as || IconBase.name, IconBase)
  },
}
