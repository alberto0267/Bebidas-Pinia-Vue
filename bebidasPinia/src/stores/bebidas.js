import { defineStore } from "pinia";
import { ref , reactive} from "vue";

export const useBebidasStore = defineStore('bebidas' , () =>{
    const listaCategorias = ref([]);
const busqueda = ref({
    nombre:'',
    categoria:''
});

function fetchCategorias (){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', {
        // method: 'GET',
      })
        .then(async (response) => {
          if (!response.ok) {
            console.error('Errores de peticion', errorData.errors)
            throw new Error('Algo falla')     
          }
          return response.json()
        })
        .then((data) => {
            listaCategorias.value = data.drinks.map((categorias) => categorias.strCategory)
          console.log('Mensaje del servidor ', data)
        })
        .catch((error) => {
          console.error('error: ', error)
        })
}






const categorias =  ref([]);

return {

    categorias,
    fetchCategorias,
    listaCategorias,
    busqueda
}

})
