<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>Ingreso al Sistema</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label>Correo Electrónico</label>
          <input v-model="email" type="email" placeholder="ejemplo@correo.com" required />
        </div>
        <div class="input-group">
          <label>Contraseña</label>
          <input v-model="password" type="password" placeholder="******" required />
        </div>
        <button type="submit" class="btn-submit">Entrar</button>
      </form>
      <p v-if="errorMsg" class="error-text">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMsg = ref('')

const authStore = useAuthStore()
const router = useRouter()

const handleSubmit = async () => {
  errorMsg.value = ''
  // Ejecuta la acción login del store de Pinia
  const success = await authStore.login(email.value, password.value)
  
  if (success) {
    router.push('/') // Redirige a la vista principal del clima (Home.vue)
  } else {
    errorMsg.value = 'Error: Prueba con user@example.com y 123456'
  }
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
.login-card {
  background: #f4f7f6;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}
h2 { color: #02529c; margin-bottom: 20px; text-align: center; }
.input-group { margin-bottom: 15px; text-align: left; }
label { display: block; font-weight: bold; margin-bottom: 5px; color: #333; }
input { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; }
.btn-submit { width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 16px; }
.btn-submit:hover { background: #0056b3; }
.error-text { color: red; margin-top: 15px; text-align: center; font-size: 14px; }
</style>
