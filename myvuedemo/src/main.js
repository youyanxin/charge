// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//解决移动端300ms延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

import Vue from 'vue'
import App from './App'
import router from './router'
//import store from './store'

Vue.config.productionTip = false

import VueLazyload from 'vue-lazyload'
//定义懒加载插件
Vue.use(VueLazyload, {
  error: require('./assets/img/notFound.jpg'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
})

//引入公用方法库
import format from './utils/utils';
//将公用方法定义在vue原型
Vue.prototype.format = format;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
