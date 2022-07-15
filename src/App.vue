<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import googleApi from '@/utils/google-sheet-api'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created() {
    googleApi.getSingleSheetData('게임리스트').then(data => localStorage.gameList = JSON.stringify(data));
  }
});
</script>