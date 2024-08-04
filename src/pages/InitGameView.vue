<template>
  <div class="bg-2">
    <q-page class="flex flex-center column animate__animated animate__fadeIn">
      <q-page-sticky position="top-right" :offset="[150, 100]">
        <img
          alt="Itau logo"
          src="~assets/logo-ks.svg"
          style="width: 300px; "
          @click="init"
        >
      </q-page-sticky>
      <h1 class="itau-font-blk text-espanol" v-if="isLoading"> {{$t('gameReady')}} </h1>
      <h1 class="text-espanol itau-font-blk animate__animated animate__bounce animate__repeat-3 " style="font-size: 15rem; ;" v-else> {{count}}</h1>
      <!-- <h1 class="itau-font"></h1> -->
    </q-page>
  </div>
  </template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuestionStore } from 'src/stores/question-store';
import 'animate.css';

const router = useRouter();

const { readQuestion } = useQuestionStore();

const isLoading = ref(true);

const count = ref(3);

let intervalo = null;

const iniciar = () => {
  readQuestion();

  setTimeout(function () {
    isLoading.value = false;
    iniciarCount();
  }, 3000);

}

const iniciarCount = () =>{
  intervalo = setInterval(setReloj, 1000);
}

const setReloj = () => {

  count.value--;
  if (count.value <= 0) {
    clearInterval(intervalo);
    router.push('/trivia')
  }

}

onMounted(()=>{
  iniciar();
})

</script>

<style scoped>
 .bg-2{
  background-image: url('../assets/fondo_blanco.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }

</style>
