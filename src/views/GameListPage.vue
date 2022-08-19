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
import { Storage } from '@capacitor/storage';

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
            gameList: Array as any
        }
    },
    async mounted() {
        const gameType = String(this.$route.params.gameType).split(','),
        gamePersonnel = String(this.$route.params.gamePersonnel).split(','),
        gameLevel = String(this.$route.params.gameLevel).split(',');

        const result = await Storage.get({key: 'gameList'});

        if(result.value) {
            this.gameList = JSON.parse(result.value).filter((game: any) => {
                let chk1 = false,
                    chk2 = false,
                    chk3 = false;
    
                for(let i=0; i<gameType.length; i++) {
                    if (game['game-type'] == gameType[i]) {
                        chk1 = true
                        break
                    }
                }
    
                const strGP: string = game['game-personnel'].replace('인', '')
                const chkGP = Number(gamePersonnel[0].replace('인', ''))
    
                if (strGP.includes('-')) {
                    const arrGP = strGP.split('-').map(GP => Number(GP))
    
                    if (arrGP[0] <= chkGP && arrGP[1] >= chkGP) chk2 = true
                } else {
                    if (Number(strGP) == chkGP) chk2 = true
                }
    
                for(let i=0; i<gameLevel.length; i++) {
                    if (game['game-level'] == gameLevel[i]) {
                        chk3 = true
                        break
                    }
                }
    
                return chk1 && chk2 && chk3
            })
        }
    },
})
</script>