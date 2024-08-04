<template>
  <div class="bg-1">
    <q-page class=" flex flex-center" @click="init">
      <MyCarrousel tamanio="width:900px"></MyCarrousel>

    </q-page>

  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import 'animate.css';
import MyCarrousel from 'src/components/MyCarrousel.vue';

  const router = useRouter();

  const init = () => {
    router.push('/form');
  }

</script>

<style scoped>
 .bg-1{
  background-image: url('../assets/fondo-azul.png');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }
 .slide-right {
	-webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>
