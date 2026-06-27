<script setup>
import { ref } from 'vue';

const data = ref([
  { id: 1, title: "Domingo", text: "19", text2: "2", icon: "☀️" },
  { id: 2, title: "Lunes", text: "12", text2: "3", icon: "☀️" },
  { id: 3, title: "Martes", text: "10", text2: "8", icon: "☁️" },
  { id: 4, title: "Miércoles", text: "7", text2: "6", icon: "☔" },
  { id: 5, title: "Jueves", text: "18", text2: "9", icon: "☀️" },
]);

const weatherCodes = ref({
  2: "Despejado",
  3: "Despejado",
  6: "Lluvia Ligera",
  8: "Parcialmente Nublado",
  9: "Despejado",
});
</script>

<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">Pronóstico Semanal - Santiago</h1>
    
    <!-- Contenedor de la fila con espaciado -->
    <div class="row g-3 justify-content-center" id="container2"> 
      
      <!-- El v-for debe ir en la columna para que se cree una celda por cada día -->
      <div 
        v-for="item in data" 
        :key="item.id" 
        class="col-12 col-sm-6 col-md-4 col-lg-2"
      >
        <div class="card weather-card text-center h-100 shadow-sm text-white bg-primary">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ item.title }}</h5>
            <p class="card-text fs-1 my-3">{{ item.icon }}</p>
            <p class="card-text fs-4 fw-bold">
              {{ item.text }}°<span class="fs-6 fw-normal"> / {{ item.text2 }}°</span>
            </p>
            <p class="card-text small text-white-50">
              {{ weatherCodes[item.text2] || 'Desconocido' }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Estilos opcionales para mejorar el aspecto visual */
.weather-card {
  transition: transform 0.2s;
}
.weather-card:hover {
  transform: translateY(-5px);
}
</style>

