import { defineStore } from "pinia";
import { useBebidasStore } from '../stores/bebidas'
import { ref,watch,onMounted } from "vue";
export const useFavoritosStore = defineStore('Favoritos', ()=>{
    
    const bebidas = useBebidasStore();
    
    const favoritos = ref([]);

    watch(
        favoritos,
        () => {
          guardarLocalStore();
        },
        {
          deep: true,
        }
      );
      
      
      
      
      const guardarLocalStore = () => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
      };
      
      onMounted(() => {
        const favoritosStorage = localStorage.getItem("favoritos");
        if (favoritosStorage) {
            favoritos.value = JSON.parse(favoritosStorage);
        }
      });
      



function handleClickFavoritos(){

console.log('entrando a favoritos')

favoritos.value.push(bebidas.receta);

}

return {
    handleClickFavoritos,
    favoritos

}
})