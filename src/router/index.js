// import { name } from '@vue/eslint-config-prettier/skip-formatting'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/authenticated/HomePage.vue'),
      children: [
        {
          path: '/Community',
          name: 'CommunityPage',
          component: () => import('@/views/authenticated/CommunityPage.vue'),
        },
        {
          path: '/Assignments',
          name: 'AssignmentPage',
          component: () => import('@/views/authenticated/AssignmentPage.vue'),
        },
        {
          path: '/Events',
          name: 'EventPage',
          component: () => import('@/views/authenticated/EventPage.vue'),
        },
        {
          path: '/Messenger',
          name: 'MessengerPage',
          component: () => import('@/views/authenticated/MessengerPage.vue'),
        },
      ],
    },

    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/guest/LoginPage.vue'),
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: () => import('@/views/guest/RegistrationPage.vue'),
    },
    {
      path: '/test',
      name: 'TestPage',
      component: () => import('@/views/TestProject.vue'),
    },
  ],
})

export default router
