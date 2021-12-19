import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import Test from '../views/Test.vue'
import Stipop from '../views/Stipop.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/detail/:imoticonId',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/stipop',
    name: 'Stipop',
    component: Stipop
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
