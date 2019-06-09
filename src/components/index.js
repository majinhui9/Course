import Vue from 'vue'


const components = {
  TitleMenu: () => import('./TitleMenu.vue')
}

const myvue = {
  install(Vue) {
    Object.keys(components).forEach(item => Vue.component(components[item].name, components[item]))
  },
  ...components
}
Vue.use(myvue)
export default myvue
