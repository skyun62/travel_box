<script setup>
import { RouterView, RouterLink } from 'vue-router';
import MyNav from './components/MyNav.vue';
import MyFooter from './components/MyFooter.vue';
</script>

<template>
 <MyNav></MyNav>
  <main class="content">
    <RouterView />
  </main>
  <MyFooter />
</template>

<style scoped>

</style>
