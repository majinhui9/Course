import Vue from 'vue'
// import iView from 'iview';
import 'iview/dist/styles/iview.css';
// Vue.use(iView);

// iview 按需引入
import { Sider, Menu, Submenu, Icon, MenuItem, Layout, Header, Content } from 'iview';

const components = {
  Sider, Menu, Submenu, Icon, MenuItem, Layout, Header, Content,
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
