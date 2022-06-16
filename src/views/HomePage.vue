<template>
    <ion-page mode="ios">
        <ion-content color="quad-blue">
            <div class="title">
                <div>QUAD</div>
                <div>보다 더 새로운 재미</div>
                <div>모두와 함께 즐기는 보드카페 QUAD</div>
            </div>

            <ion-card class="search-box">
                <CheckBoxContainer :check-item="CheckItem01"></CheckBoxContainer>
                <div class="br"></div>
                <CheckBoxContainer :check-item="CheckItem02"></CheckBoxContainer>
                <div class="br"></div>
                <CheckBoxContainer :check-item="CheckItem03"></CheckBoxContainer>
            </ion-card>
        </ion-content>

        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-button expand="full" size="large" color="quad-yellow" id="search-btn" router-link="/gameList">
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
    setup() {
        return {
            CheckItem01,
            CheckItem02,
            CheckItem03
        }
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