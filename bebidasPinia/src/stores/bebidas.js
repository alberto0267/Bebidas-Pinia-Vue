import { defineStore } from "pinia";
import { ref , reactive} from "vue";
export const useBebidasStore = defineStore('bebidas' , () =>{
    const listaCategorias = ref([]);
    const recetasNombre = ref([]);
    const recetasCategorias=ref([]);
    const recetas = ref([]);

const busqueda = ref({
    nombre:'',
    categoria:''
});

function fetchCategorias (){
  // https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', {
        // method: 'GET',
      })
        .then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Mensaje de error:', errorData);
            console.error('Errores de peticion')
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



function fetchBusqueda(){

  
 const categoriaBuscada = busqueda.value.nombre;
//  console.log(busqueda.value.categoria)

 
const {nombre, categoria} = busqueda.value;
console.log('Categoria' , categoria);
console.log('Nombre' , nombre);

console.log(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`)
console.log(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`)

if(nombre && categoria){

console.log('entra en if')

 const fetchNombre =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`, {
    // method: 'GET',
  })
    
    ///////
     
 const fetchCategoria =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`, {
  // method: 'GET',
})
 


  //Al tener dos fecth lanzo promise para que no pete


  Promise.all([fetchCategoria, fetchNombre])
  .then(([responseCategorias,responseNombre])=>{
      return Promise.all([responseCategorias.json(), responseNombre.json()]);

  })

.then(([dataNombre,dataCategoria])=>{
recetasNombre.value = dataNombre.drinks;
recetasCategorias.value = dataCategoria.drinks;


console.log('Recetas por nombre:', recetasNombre.value);
console.log('Recetas por categoría:', recetasCategorias.value);

const recetasFiltradas = recetasNombre.value.filter(nombre =>
  recetasCategorias.value.some(cat => cat.idDrink === nombre.idDrink)
)

recetas.value = recetasFiltradas

})

.catch(error => {
  console.error('Error combinando ambas búsquedas:', error);
});




}else if (nombre) {
  fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`)
    .then(res => res.json())
    .then(data => {
      recetas.value = data.drinks;
      console.log('Recetas solo por nombre:', recetas.value);
    })
    .catch(error => console.error('Error por nombre:', error));
}

else if (categoria) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`)
    .then(res => res.json())
    .then(data => {
      recetas.value = data.drinks;
      console.log('Recetas solo por categoría:', recetas.value);
    })
    .catch(error => console.error('Error por categoría:', error));
}

else {
  recetas.value = [];
  console.log('No se ingresó ningún filtro');
}






}
function obtenerRecetas() {
return fetchBusqueda();

}




// const categorias =  ref([]);

return {

    fetchCategorias,
    listaCategorias,
    busqueda,
    obtenerRecetas, 
    recetas,
    fetchBusqueda,
    recetasCategorias,
    recetasNombre
}

})
