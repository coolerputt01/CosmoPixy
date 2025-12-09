import { createRouter, createWebHistory } from 'vue-router';
import index from '../pages/index.vue';


const routes = [
    {
      path:'/',component: index
    }
  ];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
