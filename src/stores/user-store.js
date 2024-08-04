import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('usuarios', () => {

  const usuario = ref({
    nombre:"",
    telephone: "",
    email:"",
    aceptar:false
  });

  const setUsuario = (us) => {
    usuario.value = {...us};
  }

  const resetUsuario = () => usuario.value ={
    nombre:"",
    telephone: "",
    email:"",
    aceptar:false
  }

  return {
    usuario,
    setUsuario,
    resetUsuario
  }

});
