import { defineStore } from "pinia";
import { ref } from "vue";
export const useModalStore = defineStore('Modal', ()=>{

const modal = ref(false)


function handleClickModal(){

    modal.value = !modal.value;
}

    return{
        modal, 
        handleClickModal
    }
})