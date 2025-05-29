import fecth from '../lib/fecth.js'


export default {

    obtenerCategorias (){
        return fecth('/list.php?c=list')
    }
}