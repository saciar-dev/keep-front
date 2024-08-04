<template>
  <div class="row q-gutter-md flex flex-center">
    <div class="col-6">
      <q-card class="my-card text-center" style="background: radial-gradient(circle, #e07878 0%, #cf0808 100%)">
        <q-item clickable @click="$i18n.locale = 'es'">
          <q-item-section avatar>
            <q-img src="../assets/esp.svg"></q-img>
          </q-item-section>
          <q-item-section>
            <div class="text-h3 text-white">{{$t('esp')}}</div>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div class="col-6">
      <q-card class="my-card text-center" style="background: radial-gradient(circle, #47d672 0%, #0d8b3d 100%)">
          <q-item clickable @click="$i18n.locale = 'pt'">
          <q-item-section avatar>
            <q-img src="../assets/por.svg" ></q-img>
          </q-item-section>
          <q-item-section>
            <div class="text-h3 text-white">{{$t('port')}}</div>
          </q-item-section>
        </q-item>
    </q-card>
    </div>
  </div>
</template>

<!-- <template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Choose Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template> -->

<!-- <script>
import { useI18n } from 'vue-i18n'

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
      localeOptions: [
        { value: 'es', label: 'Español' },
        { value: 'pt', label: 'Portugues' }
      ]
    }
  }
}
</script> -->
