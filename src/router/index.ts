import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import CraneView from '@/views/CraneView.vue'
import WarehouseView from '@/views/WarehouseView.vue'
import ProjectMgtView from '@/views/ProjectMgtView.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUsView,
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUsView,
    },
    {
      path: '/crane',
      name: 'crane',
      component: CraneView,
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: WarehouseView,
    },
    {
      path: '/projectManagement',
      name: 'projectManagement',
      component: ProjectMgtView,
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: ErrorView 
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router