<script setup>
import { useBebidasStore } from '../stores/bebidas'
const bebidas = useBebidasStore()
const props = defineProps({
  receta: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded shadow p-4 cursor-pointer">
    <img :src="receta.strDrinkThumb" :alt="'Receta de ' + receta.strDrink" />
    <h2 class="text-lg font-bold text-black">{{ receta.strDrink }}</h2>
    <button
      type="button"
      class="bg-orange-400 mt-5 w-full p-3 font-bold text-white text-lg"
      @click="bebidas.verReceta(receta.idDrink)"
    >
      Ver receta
    </button>
  </div>
</template>
