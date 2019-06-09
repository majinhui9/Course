import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/basics', name: 'Basics', component: _ => { require(['@/view/doc/Basics.md'], _) } },
    { path: '/component', name: 'Component', component: _ => { require(['@/view/doc/Component.md'], _) } },
    { path: '/lifecycle', name: 'Lifecycle', component: _ => { require(['@/view/doc/Lifecycle.md'], _) } },
    { path: '/router', name: 'Router', component: _ => { require(['@/view/doc/Router.md'], _) } },
    { path: '/vuex', name: 'Vuex', component: _ => { require(['@/view/doc/Vuex.md'], _) } },
    { path: '/axios', name: 'Axios', component: _ => { require(['@/view/doc/Axios.md'], _) } },
    { path: '/webpack', name: 'Webpack', component: _ => { require(['@/view/doc/Webpack.md'], _) } },
    { path: '/useskills', name: 'Useskills', component: _ => { require(['@/view/doc/Useskills.md'], _) } },
  ]
})
