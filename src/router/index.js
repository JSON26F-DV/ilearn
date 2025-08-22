import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('@/views/authenticated/HomePage.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/community',
          name: 'CommunityPage',
          component: () => import('@/views/authenticated/CommunityPage.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/assignments',
          name: 'AssignmentPage',
          component: () => import('@/views/authenticated/AssignmentPage.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/events',
          name: 'EventPage',
          component: () => import('@/views/authenticated/EventPage.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/messenger',
          name: 'MessengerPage',
          component: () => import('@/views/authenticated/MessengerPage.vue'),
          meta: {
            requiresAuth: true,
          },
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !(await getCurrentUser())) {
    alert('You must login first')
    next('/login')
  } else {
    next()
  }
})

export default router
