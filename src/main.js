// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

const CONFIG = require('./utils/global.config.js')

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.Global = CONFIG

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  methods: {
    checkLogin() {
      //只负责跳转，把逻辑放到特定的页面去。

    }
  },
  created() {
    //应用首次加载检查登录状态
    this.checkLogin()
  },
  watch: {
    '$route': 'checkLogin'
  },
  template: '<App/>',
  components: {
    App
  }
})
