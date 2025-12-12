import { createRouter, createWebHistory } from 'vue-router';
import index from '../pages/index.vue';
import dashboard from '../pages/dashboard.vue';
import draw from '../pages/draw.vue';


const routes = [
    {
      path:'/',component: index,
    },
    {
      path: '/dashboard',component: dashboard,
    },
    {
      path: '/draw',component: draw,
    }
  ];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
