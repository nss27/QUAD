<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import {
//   getSingleSheetData,
//   getMultiSheetData
// } from '@/utils/google-sheet-api'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  // created() {
  //   getSingleSheetData().then(data => console.log(data))
  //   getMultiSheetData().then(data => console.log(data))
  // },
});
</script>