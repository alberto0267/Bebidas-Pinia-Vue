<script setup>
import { useBebidasStore } from '../stores/bebidas'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import Receta from '../components/Receta.vue'
const bebidas = useBebidasStore()
const { recetas } = storeToRefs(bebidas)

// // 2. Extraemos la propiedad `recetas` como ref reactiva
// const { recetas } = storeToRefs(bebidas)

// // 3. Observamos si cambian las recetas
// watch(recetas, () => {
//   console.log('Recetas cargadas:', recetas.value)
// })
//
</script>

<template>
  <div>
    <h1 class="text-6xl font-extrabold">Recetas</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10 bg-red-500">
      <Receta v-for="(receta, index) in bebidas.recetas" :receta="receta" :key="index" />
    </div>
  </div>
</template>

<style scoped>
</style>
