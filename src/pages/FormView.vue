<template>
  <div class="bg-2">
  <q-page class="flex flex-center column animate__animated animate__fadeIn">
    <q-page-sticky position="top-right" :offset="[100, -50]">
        <!-- <img
          alt="Itau logo"
          src="~assets/logo-teens.png"
          style="width: 350px; "
        > -->
        <MyCarrousel tamanio="width:250px"></MyCarrousel>
      </q-page-sticky>

    <q-page-sticky position="bottom-left" :offset="[28, 24]">
      <q-btn size="1.5rem" fab icon="navigate_before" color="espanol" text-color="espanol" @click="handleBack()">
        <q-tooltip anchor="bottom left" self="top middle" :offset="[10, 10]" class="bg-portugues text-subtitle2 text-center">{{$t('back')}}</q-tooltip>
      </q-btn>
    </q-page-sticky>
    <div class="text-h2 q-pb-xl text-center itau-font-blk text-portugues">{{$t('formTitle')}}</div>
  <div class="q-pa-xs " style="width: 50rem;">
    <q-form
    @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-mb-md"
    >
      <q-input
      style="font-size: 1.5rem;"
      class="flex-inline"
        filled
        bg-color="white"
        color="espanol"
        v-model="name"
        :label="$t('name')"
        lazy-rules
        @input="onNameChange"
        @focus="showNameKeyboard=true; showTelephoneKeyboard=false"
        :rules="[ val => val && val.length > 0 || $t('error')]"
      />

      <q-input
        filled
        bg-color="white"
        style="font-size: 1.5rem;"
        color="espanol"
        v-model="telephone"
        type="email"
        :label="$t('email')"
        lazy-rules
        @input="onTelephoneChange"
        @focus="showNameKeyboard=false; showTelephoneKeyboard=true"
        :rules="[
          val => val && val.length > 0 || $t('error'),
        ]"
      />

      <q-toggle class="text-white" color="blue" v-model="accept" :label="$t('disclaim')" />

      <div>
        <q-btn outline :label="$t('acept')" type="submit" color="portugues"/>
        <q-btn outline :label="$t('reset')" type="reset" color="espanol" text-color="portugues" class="q-ml-sm" />
      </div>
    </q-form>

  </div>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onNameChange" @onKeyPress="onNameKeyPress" :input="name" v-if="showNameKeyboard"></SimpleKeyboard>
  <SimpleKeyboard style="width: 75%;" :lang="locale" @onChange="onTelephoneChange" @onKeyPress="onTelephoneKeyPress" :input="telephone" v-if="showTelephoneKeyboard"></SimpleKeyboard>
</q-page>
</div>
</template>

<script setup>
  import SimpleKeyboard from 'src/components/SimpleKeyboard.vue';
  import { onBeforeMount, ref} from 'vue'
  import { useUserStore } from 'src/stores/user-store';
  import { useI18n } from 'vue-i18n';
  import {api} from 'boot/axios';
  import { Notify } from 'quasar'
  import 'animate.css';

  import { useRouter } from 'vue-router';
import MyCarrousel from 'src/components/MyCarrousel.vue';

  const router = useRouter();

  const { locale, t } = useI18n({ useScope: 'global' });

  const name = ref(null)
  const telephone = ref(null)
  const accept = ref(false)

  const showNameKeyboard = ref(false);
  const showTelephoneKeyboard = ref(false);

  const { setUsuario } = useUserStore();

  const onSubmit = () => {

    if(name.value != null && telephone.value !=null && accept.value){
      //checkUser();
      setUsuario({
          nombre:name.value,
          telephone:telephone.value,
          aceptar:accept.value
        });
        localStorage.setItem('user', JSON.stringify({
          nombre:name.value,
          telephone:telephone.value,
          aceptar:accept.value
        }));
        router.push('/initGame')
    }
    else if(!accept.value){
      Notify.create(t('errorDisclaimer'))
    }
    else{
      Notify.create(t('errorData'))
    }

  }

  const checkUser = () =>{
    api.get(`/usuario?nombre=${name.value}&telefono=${telephone.value}`)
    .then(response => {
      console.log(response);
      if(response.status == 204){
        setUsuario({
          nombre:name.value,
          telephone:telephone.value,
          aceptar:accept.value
        });
        localStorage.setItem('user', JSON.stringify({
          nombre:name.value,
          telephone:telephone.value,
          aceptar:accept.value
        }));

        router.push('/initGame')
      }
      else{
        Notify.create(t('errorDuplicate'))
      }
    })

  }

  const handleBack = () =>{
    onReset();
    router.push('/')
  }

  const onReset = () => {
        name.value = null
        telephone.value = null
        accept.value = false
      }

  onBeforeMount(() =>{

    const usuario =JSON.parse(localStorage.getItem('user'));
    if(usuario){
      name.value = usuario.nombre;
      telephone.value = telephone.email;
      accept.value = usuario.aceptar;
    }
  })

  const onNameChange = (input) => {
      name.value = input;
  }
  const onNameKeyPress = (button) => {

    if(button == '{enter}')
    showNameKeyboard.value = false;
  }
  const onTelephoneChange = (input) => {
      telephone.value = input;
  }
  const onTelephoneKeyPress = (button) => {

    if(button == '{enter}')
    showTelephoneKeyboard.value = false;
  }

</script>

<style scoped>
 .bg-2{
  background-image: url('../assets/fondo-azul.png');
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }

</style>
