import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/add/addBook.vue'
import about from '../components/channel/about.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    component: index,
    children: [{
      path: 'about',
      component: about,
      name: 'about'
    }]
  }]
})
