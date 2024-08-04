import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useActivoStore = defineStore('activo', () => {

  const isActivo = ref(false);

  const setActivo = (val) => {
    isActivo.value = val;
  }

  return {
    isActivo,
    setActivo
  }

});
