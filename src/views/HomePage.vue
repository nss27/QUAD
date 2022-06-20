<template>
    <ion-page mode="ios">
        <ion-content color="quad-blue">
            <div class="title">
                <div>QUAD</div>
                <div>보다 더 새로운 재미</div>
                <div>모두와 함께 즐기는 보드카페 QUAD</div>
            </div>

            <ion-card class="search-box">
                <CheckBoxContainer :init-check-item="CheckItem01"></CheckBoxContainer>
                <div class="br"></div>
                <CheckBoxContainer :init-check-item="CheckItem02"></CheckBoxContainer>
                <div class="br"></div>
                <CheckBoxContainer :init-check-item="CheckItem03"></CheckBoxContainer>
            </ion-card>
        </ion-content>

        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-button expand="full" size="large" color="quad-yellow" id="search-btn" @click="searchGameList">
                    추천 리스트 보기
                </ion-button>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    IonPage,
    IonContent,
    IonFooter,
    IonToolbar,
    IonCard,
    IonButton,
} from '@ionic/vue';
import CheckBoxContainer from "@/components/CheckBoxContainer.vue";
import CheckItem01 from '@/jsons/CheckItem01.json'
import CheckItem02 from '@/jsons/CheckItem02.json'
import CheckItem03 from '@/jsons/CheckItem03.json'
import { getSingleSheetData } from '@/utils/google-sheet-api'

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonFooter,
        IonToolbar,
        IonCard,
        IonButton,
        CheckBoxContainer
    },
    data() {
        return {
            gameList: []
        }
    },
    setup() {
        return {
            CheckItem01,
            CheckItem02,
            CheckItem03,
        }
    },
    methods: {
        searchGameList() {
            const checkList = {
                gameType: this.CheckItem01.items.filter((item: any) => item.isChecked).map((item: any) => item.text),
                gamePersonnel: this.CheckItem02.items.filter((item: any) => item.isChecked).map((item: any) => item.text),
                gameLevel: this.CheckItem03.items.filter((item: any) => item.isChecked).map((item: any) => item.text)
            }

            const params = this.gameList.filter((game: any) => {
                let chk1 = false,
                    chk2 = false,
                    chk3 = false

                checkList.gameType.forEach(type => {
                    if (game['game-type'] == type) {
                        chk1 = true
                        return
                    }
                })

                const strGP: string = game['game-personnel'].replace('인', '')
                const chkGP = Number(checkList.gamePersonnel[0].replace('인', ''))

                if (strGP.includes('-')) {
                    const arrGP = strGP.split('-').map(GP => Number(GP))

                    if (arrGP[0] <= chkGP && arrGP[1] >= chkGP) chk2 = true
                } else {
                    if (Number(strGP) == chkGP) chk2 = true
                }

                checkList.gameLevel.forEach(level => {
                    if (game['game-level'] == level) {
                        chk3 = true
                        return
                    }
                })

                return chk1 && chk2 && chk3
            })

            this.$router.push({
                name: 'gameList',
                params: {
                    gameList: JSON.stringify(params)
                }
            })
        }
    },
    created() {
        getSingleSheetData('게임리스트').then(data => this.gameList = data)
    }
});
</script>

<style scoped>
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 130px;
    text-align: center;
}

.title div:nth-child(1) {
    font-weight: bold;
    font-size: 18px;
}

.title div:nth-child(2) {
    font-weight: bold;
    font-size: 26px;
    margin-top: 20px;
}

.title div:nth-child(3) {
    font-weight: 100;
    font-size: 12px;
    margin-top: 10px;
}

.search-box {
    margin: 0;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 0 20px #00000085;
    height: calc(100% - 130px);
    padding: 40px 0 40px 40px;
    overflow: scroll;
}

ion-footer ion-toolbar {
    --padding-top: 0;
    --padding-bottom: 0;
    --padding-start: 0;
    --padding-end: 0;
}

#search-btn {
    margin: 0;
}

.br {
    height: 40px;
}
</style>