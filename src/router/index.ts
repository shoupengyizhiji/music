import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: import('@/views/Layout/index.vue'),
      redirect: '/find',
      children: [
        {
          path: '/find',
          component: import('@/views/Home/index.vue'),
        },
        {
          path: '/my',
          component: import('@/views/My/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: import('@/views/Login/index.vue'),
    },
    {
      path: '/search',
      component: import('@/views/Search/index.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: import('@/views/Music/index.vue'),
    },
    {
      path: '/comment',
      component: import('@/views/Comment/index.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
