<template>
  <div class="bg-1 col flex flex-center" style="height: 100vh;">
    <div class="text-center">
      <div class="text-h1 itau-font-blk q-pb-xl q-px-xl text-white">{{$t('msg_endless')}}</div>
      <div class="text-h3 animate__animated animate__headShake itau-font-rg q-pt-xl text-blue">Respuestas correctas: {{showResult}}</div>
    </div>
  </div>
  <q-page-sticky position="top-right" :offset="[100, 0]" v-if="!showAnwserResult">
        <!-- <img
          alt="Itau logo"
          src="~assets/logo-blanco-ks.svg"
          style="width: 300px; "
          @click="init"
        > -->
        <MyCarrousel tamanio="width:350px"></MyCarrousel>
      </q-page-sticky>
      <!-- <q-page-sticky position="bottom-left" :offset="[50, 100]">
        <img
          alt="Itau logo"
          src="~assets/logo-kids.png"
          style="width: 150px; "
          @click="init"
        >
      </q-page-sticky>
      <q-page-sticky position="bottom-left" :offset="[200, 100]">
        <img
          alt="Itau logo"
          src="~assets/logo-teens.png"
          style="width: 150px; "
          @click="init"
        >
      </q-page-sticky> -->
  <q-page-sticky position="bottom-right" :offset="[28, 24]">
          <q-btn size="1.5rem" fab icon="home" color="espanol" text-color="espanol" @click="handleHome()">
            <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-subtitle2 text-center">Siguiente</q-tooltip>
          </q-btn>
        </q-page-sticky>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useQuestionStore } from 'src/stores/question-store';
import { useUserStore } from 'src/stores/user-store';
import {api} from 'boot/axios';
import 'animate.css';
import MyCarrousel from 'src/components/MyCarrousel.vue';

const { clearRandomQuestions } = useQuestionStore();
const { resetUsuario } = useUserStore()
const router = useRouter();

const { usuario } = useUserStore();

const handleHome = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('result');

  saveUser();

  clearRandomQuestions();
  resetUsuario();
  router.push('/')
  }

  const showResult = localStorage.getItem('result');

  const saveUser = () => {
    const dato = {
      "nombre": usuario.nombre,
      "telefono": usuario.telephone,
      "correctas": showResult
    }


    api.post('/usuario', dato)
    .then(response => {
      console.log(response);
    })
  }

</script>

<style scoped>
.bg-1{
  background-image: url('../assets/fondo-azul.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }
 </style>
