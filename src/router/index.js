import Vue from 'vue'
import Router from 'vue-router'

//登录页面和主界面
import Login from '@/views/login'
import Master from '@/views/master'

//组件页
import Home from '@/components/home'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: '登录',
      hidden: true,
      component: Login
    },
    {
      path: '/home',
      name: '主页',
      hidden: false,
      leaf: true,
      icon: 'iconfont icon-ditu',
      component: Master,
      children: [{
        path: '',
        name: '',
        component: Home
      }]
    },
    {
      path: '/device',
      name: '设备',
      // 使用hidden确定是否绘制到导航上面 和 leaf用于确定是否只有一个子节点。
      hidden: false,
      leaf: false,
      component: Master,
      children: [
        {
          path: 'hub',
          name: '集控',
          icon: 'iconfont icon-jizhongqixiankong',
          component: Home
        },
        {
          path: 'lamp',
          name: '路灯',
          icon: 'iconfont icon-ludeng',
          component: Home
        }
      ]
    },
    {
      path: '/about',
      name: '关于',
      // 使用hidden确定是否绘制到导航上面 和 leaf用于确定是否只有一个子节点。
      hidden: true,
      leaf: false,
      component: About
    },
    {
      path: '*',
      hidden: true,
      redirect: {
        path: '/home'
      }
    }
  ]
})
