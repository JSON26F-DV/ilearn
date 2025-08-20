// import { name } from '@vue/eslint-config-prettier/skip-formatting'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('@/views/authenticated/HomePage.vue'),
      children: [
        {
          path: '/community',
          name: 'CommunityPage',
          component: () => import('@/views/authenticated/CommunityPage.vue'),
        },
        {
          path: '/assignments',
          name: 'AssignmentPage',
          component: () => import('@/views/authenticated/AssignmentPage.vue'),
        },
        {
          path: '/events',
          name: 'EventPage',
          component: () => import('@/views/authenticated/EventPage.vue'),
        },
        {
          path: '/messenger',
          name: 'MessengerPage',
          component: () => import('@/views/authenticated/MessengerPage.vue'),
        },
      ],
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/guest/LoginPage.vue'),
    },
    {
      path: '/registration',
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
