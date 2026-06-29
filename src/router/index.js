import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import PronosticoSemanal from '../views/PronosticoSemanal.vue'
import PronosticoSemanal2 from '../views/PronosticoSemanal2.vue'

import { useAuthStore } from '../stores/auth.js'
import Login from '../views/Login.vue'

const routes= [   

    {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },

 {
   path:'/',
    name:'Home',
    component:Home,
    meta: { requiresAuth: true } // Protegida
  },

 {
    path:'/PronosticoSemanal',
    name:'PronosticoSemanal',
    component:PronosticoSemanal, 
    meta: { requiresAuth: true }
    
  
},

{
  path:'/PronosticoSemanal2',
  name:'PronosticoSemanal2',
  component:PronosticoSemanal2,
  meta: { requiresAuth: true }
   
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guardia global de navegación
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore() // Inicializar Pinia dentro del guard

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/Login') // Si no está autenticado, directo al login
  } else if (to.name === 'Login' && authStore.isAuthenticated) {
    next('/') // Si ya está logueado, mandarlo al home
  } else {
    next() // Permitir acceso libre
  }
})

export default router