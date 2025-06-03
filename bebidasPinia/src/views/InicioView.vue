<script setup>
import { useBebidasStore } from '../stores/bebidas'

import Receta from '../components/Receta.vue'
const bebidas = useBebidasStore()
</script>

<template>
  <div>
    <h1 class="text-6xl font-extrabold">Recetas</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
      <Receta v-for="(receta, index) in bebidas.recetas" :receta="receta" :key="index" />
      <p v-if="bebidas.recetas.length === 0" class="text-red-500 text-xl mt-5">
        No hay resultados con ese filtro
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
