<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';




</script>

<template>


<Navbar/>

<router-view></router-view>

<div class="footer">
<Footer/>
</div>

</template>

<style scoped>
.footer{
    margin-top: 50px;
}


</style>
