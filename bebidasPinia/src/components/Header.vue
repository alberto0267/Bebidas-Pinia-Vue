<script setup>
import InicioView from '../views/InicioView.vue'
import { computed, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useBebidasStore } from '../stores/bebidas'
import { useNotificacionStore } from '../stores/notificacion'
const notificacion = useNotificacionStore()

const route = useRoute()
const store = useBebidasStore()
//Lo siguiente imprime todo que que hay en bebidas,js asi saber qu estamos llamando lo correcto
console.log('object keys', Object.keys(store))
console.log(store)

const formulario = computed(() => {
  return route.name === 'inicio'
})

const cambioBackground = computed(() => {
  return route.name === 'inicio' ? 'header' : 'bg-slate-800'
})

onMounted(() => {
  store.fetchCategorias()
})

const handleSubmit = () => {
  store.obtenerRecetas()
}

// watch(bebida, (nueva, antigua) => {
//   console.log('¡Cambió la bebida!')
// })
</script>

<template>
  <header :class="cambioBackground">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between">
        <div class="">
          <RouterLink :to="{ name: 'inicio' }">
            <img src="/img/logo.svg" alt="Logotipo" class="w-32" />
          </RouterLink>
        </div>

        <nav class="flex gap-6">
          <RouterLink
            :to="{ name: 'inicio' }"
            class="text-white uppercase font-bold"
            active-class="text-red-500"
            >Inicio</RouterLink
          >
          <RouterLink
            :to="{ name: 'favoritos' }"
            class="text-white uppercase font-bold"
            active-class="text-blue-500"
            >Favoritos</RouterLink
          >
          <RouterLink
            :to="{ name: 'ai' }"
            class="text-white uppercase font-bold"
            active-class="text-blue-500"
            >Generador con AI
          </RouterLink>
        </nav>
      </div>

      <form
        action=""
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        v-if="formulario"
        @submit.prevent="handleSubmit"
      >
        <div class="space-y- 4">
          <label for="ingrediente" class="block text-white uppercase font-extrabold text-log">
            Nombre o Ingredientes</label
          >
          <input
            type="text"
            id="ingrediente"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o Ingrediente: ej. Vodka, Tequila,etc"
            v-model="store.busqueda.nombre"
          />
        </div>
        <div class="space-y- 4">
          <label for="ingrediente" class="block text-white uppercase font-extrabold text-log">
            Cetegoria</label
          >
          <select
            id="categoria"
            class="p-3 w-full rounded-lg focus:outline-none"
            v-model="store.busqueda.categoria"
          >
            <option value="">--Seleccione</option>
            <option
              v-for="categorias in store.listaCategorias"
              :key="categorias"
              :value="categorias"
            >
              {{ categorias }}
            </option>
          </select>
        </div>
        <input
          type="submit"
          value="Buscar Recetas"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 uppercase"
        />
      </form>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url('../assets/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>

