import Vue from 'vue'
import Router from 'vue-router'
import StateDetail from './views/StateDetail.vue'
import StatesList from './views/StatesList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: StatesList,
    },
    {
      path: '/state/:id',
      name: 'detail',
      component: StateDetail,
    }
  ]
})
