import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/cariProfil',
    name: 'CariProfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/CariProfil.vue')
  },
  {
    path: '/profilPejabat',
    name: 'ProfilPejabat',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilPejabat.vue')
  },
  {
    path: '/detailBeritaHomePage',
    name: 'DetailBeritaHomePage',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailBeritaHomePage.vue')
  },
  {
    path: '/detailBeritaBeritaUtama',
    name: 'DetailBeritaBeritaUtama',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailBeritaBeritaUtama.vue')
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import(/* webpackChunkName: "about" */ '../views/Berita.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')
  },
  {
    path: '/editProfil',
    name: 'EditProfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditProfil.vue')
  },
  {
    path: '/gantiEmail',
    name: 'GantiEmail',
    component: () => import(/* webpackChunkName: "about" */ '../views/GantiEmail.vue')
  },
  {
    path: '/verifikasiEmail',
    name: 'VerifikasiEmail',
    component: () => import(/* webpackChunkName: "about" */ '../views/VerifikasiEmail.vue')
  },
  {
    path: '/gantiPassword',
    name: 'GantiPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/GantiPassword.vue')
  },
  {
    path: '/tentangKami',
    name: 'TetangKami',
    component: () => import(/* webpackChunkName: "about" */ '../views/TentangKami.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
