import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import PronosticoSemanal from '../views/PronosticoSemanal.vue'
import PronosticoSemanal2 from '../views/PronosticoSemanal2.vue'

const routes= [   
  {
    path:'/',
    name:'Home',
    component:Home
  },

 {
    path:'/PronosticoSemanal',
    name:'PronosticoSemanal',
    component:PronosticoSemanal, 
  
},

{
  path:'/PronosticoSemanal2',
  name:'PronosticoSemanal2',
  component:PronosticoSemanal2,
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
