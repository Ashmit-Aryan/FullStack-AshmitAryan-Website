import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FileNotFound from '../views/FileNotFound.vue'

import AllApps from '../views/AllApps'
import FullApps from '../views/FullApps';
import FullNews from '../views/FullNews'
import TechExplain from '../views/TechExplain'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'*',
    name:'FileNotFound',
    component: FileNotFound
  },
  {
    path: '/all-apps',
    name: 'AllApps',
    component: AllApps
  },
  {
    path: '/full-news/:id',
    name: 'FullNews',
    component: FullNews
  },
  {
    path: '/full-apps/:id',
    name : 'FullApps',
    component: FullApps
  },
  {
    path: '/tech-explain/:id',
    name: 'TechExplain',
    component: TechExplain
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
