
<script setup>
import { Martini } from 'lucide-vue-next'

import { computed, ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useModalStore } from '../stores/modal'
import { useBebidasStore } from '../stores/bebidas'
import Receta from '../components/Receta.vue'
const bebidas = useBebidasStore()
const modal = useModalStore()

const agregarIngredientes = computed(() => {
  const ingredientes = []

  for (let i = 1; i < 15; i++) {
    const ingrediente = bebidas.receta[`strIngredient${i}`]
    const cantidad = bebidas.receta[`strMeasure${i}`]
    if (ingrediente) {
      ingredientes.push({
        nombre: ingrediente,
        cantidad: cantidad || '',
      })
    }
  }
  return ingredientes
})

const instrucciones = computed(() => {
  let instruccion = ref('Sin instrucciones 😂')

  if (bebidas.receta.strInstructionsES) {
    instruccion = bebidas.receta.strInstructionsES
  } else {
    instruccion = bebidas.receta.strInstructions
  }
  return instruccion
})
</script>

<template>
  <TransitionRoot as="template" :show="modal.modal">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3 text-center">
                  <!-- Ícono animado pro -->
                  <div class="flex justify-center mb-2">
                    <Martini
                      class="w-16 h-16 text-fuchsia-500 animate-pulse drop-shadow-[0_0_8px_#f0f]"
                    />
                  </div>

                  <h2 class="text-2xl font-bold text-center animate-glitch uppercase tracking-wide">
                    {{ bebidas.receta.strDrink }}
                  </h2>
                  <img
                    :src="bebidas.receta.strDrinkThumb"
                    :alt="bebidas.receta.strDrink"
                    class="mx-auto rounded-lg shadow-md w-84 h-auto object-cover"
                  />
                  <div
                    class="modal px-6 py-4 bg-white rounded-xl shadow-lg space-y-6 text-gray-800"
                  >
                    <div>
                      <h3 class="text-xl font-bold mb-2 border-b pb-1">🧪 Ingredientes</h3>
                      <ul class="list-disc list-inside space-y-1">
                        <li v-for="(item, index) in agregarIngredientes" :key="index">
                          <span class="font-semibold">{{ item.nombre }}</span>
                          <span v-if="item.cantidad"> - {{ item.cantidad }}</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 class="text-xl font-bold mb-2 border-b pb-1">📋 Instrucciones</h3>
                      <p class="leading-relaxed whitespace-pre-line">
                        {{ instrucciones }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  @click="modal.handleClickModal()"
                  class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Cerrar
                </button>
                <button
                  class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-red-600 transition"
                >
                  Agregar a Favoritos
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<style scoped>
/* @keyframes glitch {
  0% {
    text-shadow: 2px 0 red, -2px 0 cyan;
    color: white;
  }
  20% {
    text-shadow: -2px 0 magenta, 2px 0 lime;
    color: #ff00cc;
  }
  40% {
    text-shadow: 2px 2px blue, -2px -2px yellow;
    color: #00ffff;
  }
  60% {
    text-shadow: -2px -2px orange, 2px 2px green;
    color: #fff;
  }
  80% {
    text-shadow: 2px 0 purple, -2px 0 aqua;
    color: #ff6600;
  }
  100% {
    text-shadow: none;
    color: white;
  }
}

.animate-glitch {
  animation: glitch 1.5s infinite;
} */
</style>
