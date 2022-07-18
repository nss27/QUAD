<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import googleApi from '@/utils/google-sheet-api';
import { Storage } from '@capacitor/storage';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  async created() {
    const data = await googleApi.getSingleSheetData('게임리스트');

    if(data) {
      await Storage.set({
        key: 'gameList',
        value: JSON.stringify(data)
      });
    }
  }
});
</script>