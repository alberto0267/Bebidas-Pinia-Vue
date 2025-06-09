<script setup>
import { useFavoritosStore } from '../stores/favoritos'
import Receta from '../components/Receta.vue'
const favoritos = useFavoritosStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Receta v-for="(receta, index) in favoritos.favoritos" :receta="receta" :key="index" />
    <p v-if="favoritos.favoritos.length === 0" class="text-red-500 text-xl mt-5">
      No hay favoritos Agregados
    </p>
  </div>
</template>

<style scoped>
</style>
