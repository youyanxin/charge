import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('../page/index/index.vue')), 'index')
const set = r => require.ensure([], () => r(require('../page/set/set.vue')), 'set')
const incomeDetails = r => require.ensure([], () => r(require('../page/incomeDetails/incomeDetails.vue'), 'incomeDetails'))
const chargeDataDetails = r => require.ensure([], () => r(require('../page/chargeDataDetails/chargeDataDetails.vue'), 'chargeDataDetails'))
const userDataDetails = r => require.ensure([], () => r(require('../page/userDataDetails/userDataDetails.vue'), 'userDataDetails'))
const checkDataDetails = r => require.ensure([], () => r(require('../page/checkDataDetails/checkDataDetails.vue'), 'checkDataDetails'))

export default new Router({
  routes: [{
      path: '/', //地址为空时，默认此页面
      redirect: 'index'
    },
    { //首页(今日收益)
      path: '/index',
      name: '/index',
      component: index
    },
    { //设置
      path: '/set',
      name: '/set',
      component: set
    },
    { //收入详情
      path: '/incomeDetails',
      name: '/incomeDetails',
      component: incomeDetails
    },
    {//充电桩分布
      path:'/chargeDataDetails',
      name:'/chargeDataDetails',
      component:chargeDataDetails
    },
    {//数据分布
      path: '/userDataDetails',
      name: '/userDataDetails',
      component: userDataDetails
    },
    {//待审核详情
      path:'/checkDataDetails',
      name:'/checkDataDetails',
      component:checkDataDetails
    }
  ]
})
