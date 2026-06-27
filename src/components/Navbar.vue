<script setup>

</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary m-3">
      <div class="container-fluid">
       <router-link to="/" custom v-slot="{href}"> <a class="navbar-brand"  :href=" href">El Clima <img src="../img/sunny_45dp_FFFF55.svg" alt=""></a> </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                mas clima
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link to="/PronosticoSemanal" custom v-slot="{ href}" ><a class="dropdown-item" :href="href">Clima semanal Santiago <i class="bi bi-brightness-high"></i> </a> </router-link>
                </li>
                <li><router-link to="/PronosticoSemanal2" custom v-slot="{ href}" ><a class="dropdown-item" :href="href">Clima semanal Madrid <i class="bi bi-brightness-high"></i> </a> </router-link>
                </li>
              </ul> 
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

</template>

<style scoped>
.navbar {
  border-radius: 10px;
  box-shadow: 10px 10px 5px grey;
  
}
</style>