<template>
  <!-- Contenedor principal equivalente a tu id="container" -->

  <div class="container">
  <div class="row g-10 container--row__tarjetas" id="container">
  
    
    <!-- Renderizado dinámico con v-for -->
    <div 
      v-for="(item, i) in data" 
      :key="item.id" 
      class="col-12 col-md-2"
    >
      <div class="container--card h-100 text-white bg-primary mb-3" style="max-width: 18rem">
        
        <!-- Enlace condicional por si url no existe -->
        <a :href="item.url || '#'">
          <img src="../img/screenxubo-sun-23076.gif" class="card-img-top" alt="Ir a pagina">
        </a>
        
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          
          <div class="card-text">
            <!-- Muestra los datos de la API si ya cargaron -->
            <template v-if="weatherData[i]">
              <h1 class="bi bi-thermometer-half card--text">
                {{ Math.round(weatherData[i].current.temperature_2m) }}&deg;C
              </h1>
              <h2 class="bi bi-wind card--text">
                {{ Math.round(weatherData[i].current.wind_speed_10m) }}km/h
              </h2>
              <p class="badge-box">
                <span class="badge bg-info">
                  {{ weatherCodes[weatherData[i].current.weather_code] || 'Desconocido' }}
                </span>
              </p>
            </template>
            
            <!-- Estado de carga -->
            <template v-else>
              <p>Cargando clima...</p>
            </template>
          </div>

        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Tus datos estáticos
const data = [
  { id: 1, title: "Santiago", text: "19", text2: "2", url: "PronosticoSemanal" },
  { id: 2, title: "Madrid", text: "12", text2: "3", url: "PronosticoSemanal2" },
  { id: 3, title: "Londres", text: "2", text2: "8" },
  { id: 4, title: "Moscu", text: "2", text2: "6" },
  { id: 5, title: "Buenos aires", text: "18", text2: "9" },
];

// Diccionario de códigos de clima
const weatherCodes = {
  0: "Despejado ☀️",
  1: "Principalmente despejado 🌤️",
  2: "Parcialmente nublado ☁️",
  3: "Nublado ☁️",
  45: "Niebla 🌫️",
  48: "Niebla con helada ❄️",
  51: "Llovizna ligera 🌧️",
  53: "Llovizna 🌧️",
  55: "Llovizna densa 🌧️",
  56: "Llovizna helada ligera ❄️",
  57: "Llovizna helada densa ❄️",
  61: "Lluvia ligera 🌧️",
  63: "Lluvia 🌧️",
  65: "Lluvia densa 🌧️",
  66: "Lluvia helada ligera ❄️",
  67: "Lluvia helada densa ❄️",
  71: "Precipitación de nieve ligera ❄️",
  73: "Precipitación de nieve ❄️",
  75: "Precipitación de nieve densa ❄️",
  77: "Granizo 🌪️"
};

// Variable reactiva para guardar la respuesta de la API
const weatherData = ref([]);

// Llamada a la API cuando el componente se monta
onMounted(() => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569,40.4165,51.5085,55.752,-34.6131&longitude=-70.6483,-3.7026,-0.1257,37.6178,-58.3772&daily=temperature_2m_max,temperature_2m_min,weather_code&current=weather_code,temperature_2m,wind_speed_10m&timezone=auto`;
  
  fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      weatherData.value = pagina;
    })
    .catch((error) => console.error("Error cargando el clima:", error));
    console.log(weatherData);
});
</script>

<style scoped>
.badge {
  font-size: 10px;
}

.badge-box {
  text-align: left;
}

.card--text {
  font-size: 25px;
}

.card-img-top {
  cursor: pointer;
}

.container--card {
  border-radius: 15px;
  box-shadow: 10px 10px 5px grey;
}
.container--row__tarjetas {
  display: flex;
  justify-content: center;
}

h1 {
  text-align: right;
}

h2 {
  text-align: right;
}

.card-body{
  padding: 10px;
}
</style>
