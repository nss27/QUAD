<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>추천 리스트</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <template v-if="!Common.isNull(gameList)">
                <GameInfoCardVue v-for="game in gameList" :key="game['id']" :game="game"></GameInfoCardVue>
            </template>

            <NoDataVue v-else></NoDataVue>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    loadingController,
    alertController
} from '@ionic/vue';
import { useRoute } from 'vue-router';
import GoogleApi from '@/utils/GoogleApi';
import Common from '@/utils/Common';
import GameInfoCardVue from '@/components/GameInfoCard.vue';
import NoDataVue from '@/components/NoData.vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        GameInfoCardVue,
        NoDataVue
    },
    setup() {
        const gameList = ref();
        const route = useRoute();

        onMounted(async () => {
            const gameType = String(route.params.gameType).split(','),
                gamePersonnel = String(route.params.gamePersonnel).split(','),
                gameLevel = String(route.params.gameLevel).split(',');

            const loading = await loadingController.create({
                message: "데이터 조회중",
                mode: "ios",
            });

            await loading.present();

            try {
                const list: any[] = await GoogleApi.getSingleSheetData('게임리스트');

                gameList.value = list.filter(gameInfo => {
                    let chk1 = false,
                        chk2 = false,
                        chk3 = false;

                    for (let i = 0; i < gameType.length; i++) {
                        if (gameInfo['game-type'] == gameType[i]) {
                            chk1 = true
                            break
                        }
                    }

                    const strGP: string = gameInfo['game-personnel'].replace('인', '')
                    const chkGP = Number(gamePersonnel[0].replace('인', ''))

                    if (strGP.includes('-')) {
                        const arrGP = strGP.split('-').map(GP => Number(GP))

                        if (arrGP[0] <= chkGP && arrGP[1] >= chkGP) chk2 = true
                    } else {
                        if (Number(strGP) == chkGP) chk2 = true
                    }

                    for (let i = 0; i < gameLevel.length; i++) {
                        if (gameInfo['game-level'] == gameLevel[i]) {
                            chk3 = true
                            break
                        }
                    }

                    return chk1 && chk2 && chk3
                }).sort((a, b) => Number(a.id) - Number(b.id));
            } catch (error) {
                const alert = await alertController.create({
                    header: "오류 발생",
                    subHeader: `${error}`,
                    buttons: ["OK"],
                    mode: "ios",
                });

                await alert.present();
            } finally {
                await loading.dismiss();
            }
        })

        return {
            Common,
            gameList
        }
    },
})
</script>