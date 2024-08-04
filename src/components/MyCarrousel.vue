<template>
  <div class="row">
        <div class="col-12">
        <q-carousel
        animated
        v-model="slide"
        infinite
        autoplay
        transition-prev="scale"
        transition-next="scale"
        style="background-color: transparent;"
        >
        <q-carousel-slide :name="1" class="flex flex-center">
          <img
            alt="Quasar logo"
            src="~assets/logo-blanco.svg"
            :style="tamanio"
          >
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="flex flex-center">
          <img
            alt="Quasar logo"
            src="~assets/logo-kids.svg"
            :style="tamanio"
          >
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="flex flex-center">
          <img
            alt="Quasar logo"
            src="~assets/logo-teens.svg"
            :style="tamanio"
          >
        </q-carousel-slide>
      </q-carousel>
      </div>
    </div>
</template>

<script setup>
  import { ref } from 'vue';

  const slide= ref(1);

  defineProps(['tamanio'])

</script>
