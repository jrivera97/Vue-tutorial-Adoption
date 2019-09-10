import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dogs from './views/Dogs.vue'
import Cats from './views/Cats.vue'
import Pets from './views/Pets.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dogs',
      name: 'dogs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dogs
    },
    {
      path: '/cats',
      name: 'cats',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Cats
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Pets
    }
  ]
})
