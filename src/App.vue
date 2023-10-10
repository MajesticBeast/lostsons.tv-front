<script setup>
import Navbar from "./components/Navbar.vue";
</script>



<template>
  <div class="dark">
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>
div.dark {
  background: black;
}
</style>
