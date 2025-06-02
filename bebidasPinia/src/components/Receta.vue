<script setup>
const props = defineProps({
  receta: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded shadow p-4 cursor-pointer">
    <img :src="receta.strDrinkThumb" alt="" />
    <h2 class="text-lg font-bold text-black">{{ receta.strDrink }}</h2>
  </div>
</template>
