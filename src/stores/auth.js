import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // Estado: lee el estado inicial desde localStorage para persistencia básica
  const token = ref(localStorage.getItem('user_token') || null)
  const user = ref(JSON.parse(localStorage.getItem('user_data')) || null)

  // Getter: computa si el usuario está autenticado
  const isAuthenticated = computed(() => !!token.value)

  // Acciones: funciones para iniciar y cerrar sesión
  const login = async (email, password) => {
    try {
      // Simulación de API. Reemplaza esto con tu llamada fetch/axios si tienes backend
      if (email === 'user@example.com' && password === '123456') {
        const mockToken = 'fake-jwt-token-12345'
        const mockUser = { email, name: 'Usuario Clima' }

        // Guardar en el estado de Pinia
        token.value = mockToken
        user.value = mockUser

        // Guardar en el navegador para que no se borre al recargar la página
        localStorage.setItem('user_token', mockToken)
        localStorage.setItem('user_data', JSON.stringify(mockUser))
        
        return true
      }
      throw new Error('Credenciales incorrectas')
    } catch (error) {
      console.error(error.message)
      return false
    }
  }

  const logout = () => {
    // Limpiar estado
    token.value = null
    user.value = null

    // Limpiar almacenamiento local
    localStorage.removeItem('user_token')
    localStorage.removeItem('user_data')
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout
  }
})
