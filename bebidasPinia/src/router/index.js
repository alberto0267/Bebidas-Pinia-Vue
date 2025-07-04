import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue';
// import Favoritos from '../views/FavoritosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
  
  path:'/',
  name:'inicio',
  component:InicioView,
},
{
  path:'/favoritos',
  name:'favoritos',
  component : () => import('../views/FavoritosView.vue')
},
{
  path:'/ai',
  name:'ai',
  component : () => import('../views/AiView.vue')
}
 
  ],
})

export default router
