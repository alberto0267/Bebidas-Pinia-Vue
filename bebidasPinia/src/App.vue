
<script setup>
import Header from './components/Header.vue'
import Modal from './components/Modals.vue'
// import { RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import Notificacion from './components/Notificacion.vue'
</script>

<template>
  <div>
    <Header />
    <main class="container mx-auto mt-10">
      <RouterView />
    </main>
    <Modal />
    <Notificacion />
  </div>
</template>

<style scoped>
</style>
