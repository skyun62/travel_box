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

<style>
/* 引入字體已在 index.html 處理 */

body,
p,
span,
li,
a,
button,
input,
label {
  font-family: 'Jost', 'Noto Serif TC', sans-serif;
  font-weight: 300;
}

h1,
h2,
h3,
h4,
h5,
h6,
.display-1,
.display-2,
.display-3,
.fs-2,
.fs-4,
.fs-5 {
  font-family: 'Playfair Display', 'Noto Serif TC', serif;
  font-weight: 400;
}

:root {
  --bs-font-sans-serif: 'Jost', 'Noto Serif TC', sans-serif;
  --bs-body-font-family: 'Jost', 'Noto Serif TC', sans-serif;
  --bs-body-font-weight: 300;
}
</style>
