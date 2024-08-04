<template>
  <div class="bg-2 ">
    <q-page class="flex flex-center column animate__animated animate__fadeIn">
      <q-page-sticky position="top-right" :offset="[150, 100]">
        <img
          alt="Itau logo"
          src="~assets/logo-azul.png"
          style="width: 350px; "
        >
      </q-page-sticky>
        <div class="row q-pb-lg">
          <div class="col-12">
            <div class="text-h2 itau-font-blk text-espanol">{{$t('init')}}</div>
          </div>
        </div>
        <div class="row q-gutter-xl">
          <q-btn size="1.5rem" color="portugues" text-color="portugues" glossy rounded icon-right="play_circle" @click="$i18n.locale = 'es'">{{$t('esp')}}</q-btn>
          <!-- <q-btn size="1.5rem" color="portugues" text-color="portugues" glossy rounded icon-right="play_circle" @click="$i18n.locale = 'pt'">{{$t('port')}}</q-btn> -->
          <q-btn size="1.5rem" color="portugues" text-color="portugues" glossy rounded icon-right="play_circle" @click="$i18n.locale = 'en-US'">{{$t('en')}}</q-btn>
        </div>
      <q-page-sticky position="bottom-right" :offset="[28, 24]">
        <q-btn size="1.5rem" fab icon="navigate_next" color="portugues" @click="handleNext()">
          <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-portugues text-subtitle2 text-center">{{$t('next')}}</q-tooltip>
        </q-btn>
      </q-page-sticky>
    </q-page>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { onMounted, computed, ref } from 'vue';
  import 'animate.css';

  const router = useRouter();
  const { locale, t } = useI18n({ useScope: 'global' });

  const slide = ref(1);

  const handleNext = () =>{
    localStorage.setItem('language', locale.value)
    router.push('/form')
  }

  onMounted(()=>{
    locale.value = localStorage.getItem('language');
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
