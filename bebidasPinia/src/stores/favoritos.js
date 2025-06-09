import { defineStore } from "pinia";
import { useBebidasStore } from '../stores/bebidas'
import { ref,watch,onMounted } from "vue";
import { useModalStore } from './modal'
export const useFavoritosStore = defineStore('Favoritos', ()=>{
  const modal = useModalStore();
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
      
    

function favDuplicados(id) {

  return favoritos.value.some(favorito => favorito.idDrink === id);
  
}


function handleClickFavoritos(){
  const id = bebidas.receta.idDrink;


if(favDuplicados(id) ){
favoritos.value = favoritos.value.filter(
  fav => fav.idDrink !== bebidas.receta.idDrink
)
console.log('eliminando... ')
modal.modal===false;
console.log('modal ', modal.handleClickModal())



}else{
  console.log('agregando')
  favoritos.value.push(bebidas.receta);
modal.handleClickModal();
}



}

return {
    handleClickFavoritos,
    favoritos,
    favDuplicados

}
})