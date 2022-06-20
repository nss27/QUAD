<template>
    <ion-page mode="ios">
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>추천 리스트</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <template v-if="gameList.length > 0">
                <GameInfoCard v-for="game in gameList" :key="game['id']" :game="game"></GameInfoCard>
            </template>
            
            <NullBoxContainer v-else></NullBoxContainer>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
} from '@ionic/vue';
import GameInfoCard from '@/components/GameInfoCardContainer.vue';
import NullBoxContainer from '@/components/NullBoxContainer.vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        GameInfoCard,
        NullBoxContainer
    },
    data() {
        return {
            gameList: JSON.parse(String(this.$route.params.gameList))
        }
    },
})
</script>