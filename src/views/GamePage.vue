<template>
    <ion-page mode="ios">
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="bg-img">
                <img src="https://image.yes24.com/goods/67447169/XL" alt="">
            </div>

            <div class="game-info">
                <div class="info-box">
                    <div class="title">
                        <span>클루</span>
                        <span>추리(5인)</span>
                    </div>
                    <br>
                    <div class="text">
                        "범인은 이 안에 있다"
                        <br>탐정이 되어 살인사건을 추리해보자
                    </div>
                    <br>
                    <div class="hash-tag">
                        #협잡 #추리 #기억력 #패밀리
                    </div>
                </div>

                <ion-card>
                    <ion-card-content>
                        <div class="item">
                            <span>1인</span>
                            <span>인원수</span>
                        </div>
                        <div class="item">
                            <span>3</span>
                            <span>난이도</span>
                        </div>
                        <div class="item">
                            <span>30분</span>
                            <span>플레이타임</span>
                        </div>
                        <div class="item">
                            <span>23</span>
                            <span>위치</span>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>

            <div class="play-info">
                <iframe src="https://www.youtube.com/embed/7Ium0jpht0g" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

                <img src="https://divedice1.wisacdn.com/_data/attach/202107/10/b94ecc73afee7dfd2cbf86f111a850db.jpg"
                    alt="">
            </div>
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
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
} from '@ionic/vue'

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonCard,
        IonCardContent,
    }
})
</script>

<style scoped>
ion-toolbar {
    --background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0) 100%);
}

.bg-img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    z-index: -1;
    overflow: hidden;
}

.bg-img img {
    height: 100%;
    max-width: none;
}

.game-info {
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    display: flex;
    justify-content: flex-end;
    flex-flow: column wrap;
}

.game-info > * {
    width: 100%;
}

.game-info ion-card {
    margin: 0;
    border-radius: 30px 30px 0 0;
}

.game-info ion-card ion-card-content {
    display: flex;
    justify-content: space-around;
}

.game-info ion-card ion-card-content .item {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

.game-info ion-card ion-card-content .item span:nth-child(1) {
    font-size: 24px;
    font-weight: bold;
}

.game-info ion-card ion-card-content .item span:nth-child(2) {
    font-size: 12px;
}

.play-info {
    background: var(--background);
}

.play-info iframe {
    width: 100vw;
    height: calc(100vw / 16 * 9);
}

.play-info img {
    width: 100vw;
}

.info-box {
    padding: 16px;
    color: #ffffff;
}

.info-box .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-flow: row wrap;
}

.info-box .title span:nth-child(1) {
    font-size: 40px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.info-box .text {
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
}

.info-box .hash-tag {
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>