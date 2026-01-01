import { createRouter, createWebHistory } from 'vue-router';
import index from '../pages/index.vue';
import dashboard from '../pages/dashboard.vue';
import draw from '../pages/draw.vue';
import signup from '../pages/signup.vue';
import signin from '../pages/signin.vue';
import world from '@/pages/world.vue';
import { SiGin } from 'vue-icons-plus/si';

const routes = [
    {
      path:'/',component: index,
    },
    {
      path: '/dashboard',component: dashboard,
    },
    {
      path: '/draw',component: draw,
    },
    {
      path: '/signup',component: signup,
    },
    {
      path: '/signin',component:signin,
    },
    {
      path: '/world-editor',component: world
    }
  ];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
