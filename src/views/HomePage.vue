<template>
    <ion-page mode="ios">
        <ion-content color="quad-blue">
            <div class="title">
                <div>QUAD</div>
                <div>보다 더 새로운 재미</div>
                <div>모두와 함께 즐기는 보드카페 QUAD</div>
            </div>

            <ion-card class="search-box">
                <CheckBoxContainer title="장르"></CheckBoxContainer>
                <CheckBoxContainer title="인원수"></CheckBoxContainer>
                <CheckBoxContainer title="난이도"></CheckBoxContainer>
            </ion-card>
        </ion-content>

        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-button expand="full" size="large" color="quad-yellow" id="search-btn">
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

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonFooter,
        IonToolbar,
        IonCard,
        IonButton,
        CheckBoxContainer
    }
});
</script>

<style scoped>
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
}

.search-box {
    margin: 0;
    border-radius: 30px 30px 0 0;
    background: #ffffff;
    box-shadow: 0 0 20px #00000085;
    height: calc(100% - 120px);
    padding: 40px;
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
</style>