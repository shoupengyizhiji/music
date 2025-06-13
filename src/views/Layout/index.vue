<template>
  <div class="flex flex-col h-screen">
    <div class="flex-1 flex flex-col"><RouterView /></div>
    <Footer class=""></Footer>
  </div>
</template>
<script setup>
import Footer from './components/Footer.vue'
</script>
