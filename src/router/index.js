import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pagservicios1',
    name: 'Pagservicios1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagservicios1.vue')
  },
  {
    path: '/pagservicios2',
    name: 'Pagservicios2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagservicios2.vue')
  },
  {
    path: '/pagservicios3',
    name: 'Pagservicios3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagservicios3.vue')
  },
  {
    path: '/divisionvendedor',
    name: 'Divisionvendedor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Divisionvendedor.vue')
  },
  {
    path: '/vendetuplasticonaturales',
    name: 'Vendetuplasticonaturales',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vendetuplasticonaturales.vue')
  },
  {
    path: '/vendetuplasticojuridicas',
    name: 'Vendetuplasticojuridicas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vendetuplasticojuridicas.vue')
  },
  {
    path: '/comprarplastico',
    name: 'Comprarplastico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Comprarplastico.vue')
  },
  {
    path: '/pagnoticia1',
    name: 'Pagnoticia1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagnoticia1.vue')
  },
  {
    path: '/pagnoticia2',
    name: 'Pagnoticia2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagnoticia2.vue')
  },
  {
    path: '/pagnoticia3',
    name: 'Pagnoticia3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagnoticia3.vue')
  },
  {
    path: '/pagnoticia4',
    name: 'Pagnoticia4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagnoticia4.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
