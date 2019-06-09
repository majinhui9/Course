import Vue from 'vue'
import App from './App'
import router from './router'
import './components/index'
import Prismjs from 'prismjs' // 用于md代码块高亮
import 'prismjs/themes/prism-tomorrow.css'
// import 'github-markdown-css/github-markdown.css'


router.afterEach(route => {
  Vue.nextTick(Prismjs.highlightAll)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
