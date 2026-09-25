/**
 * router/index.ts
 */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Course from '@/components/Course.vue'
import Apply from '@/components/Apply.vue'
import About from '@/components/AboutUs.vue'
import Contact from '@/components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Smith Institute of Applied Skills | Home' },
    },
    {
      path: '/courses',
      alias: '/course',
      name: 'Course',
      component: Course,
      meta: { title: 'School of Cabinetry | Smith Institute' },
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply,
      meta: { title: 'Online Student Application | Smith Institute' },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { title: 'About Us | Smith Institute of Applied Skills' },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { title: 'Contact Us | Smith Institute of Applied Skills' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// Dynamically update page title on navigation
router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Smith Institute of Applied Skills'
})

export default router