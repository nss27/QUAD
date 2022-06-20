<template>
    <ion-page mode="ios">
        <ion-header class="ion-no-border" collapse="fade">
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>{{ game['game-name'] }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="false">
            <div class="bg-img">
                <img v-if="game['url-gameImage']" :src="game['url-gameImage']" alt="">
                <LogoContainer v-else></LogoContainer>
            </div>

            <div class="game-info">
                <div class="info-box">
                    <ion-header collapse="condense">
                        <ion-toolbar color="transparent"></ion-toolbar>
                    </ion-header>

                    <div class="title">
                        <span>{{ game['game-name'] }}</span>
                        <span>{{ game['game-type'] }}({{ game['game-personnel'] }})</span>
                    </div>
                    <div class="text">
                        {{ game['game-comment'] }}
                    </div>
                    <div class="hash-tag">
                        {{ game['game-hashTag'] }}
                    </div>
                </div>

                <ion-card>
                    <ion-card-content>
                        <div class="item">
                            <span>{{ game['game-personnel'] }}</span>
                            <span>인원수</span>
                        </div>
                        <div class="item">
                            <span>{{ game['game-level'] }}</span>
                            <span>난이도</span>
                        </div>
                        <div class="item">
                            <span>{{ game['game-playTime'] }}</span>
                            <span>플레이타임</span>
                        </div>
                        <div class="item">
                            <span>{{ game['position'] }}</span>
                            <span>위치</span>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>

            <div class="play-info">
                <iframe v-if="game['url-youtube']" :src="game['url-youtube']" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

                <NullBoxContainer type="video" v-else></NullBoxContainer>

                <img v-if="game['url-gameDescriptionImage']" :src="game['url-gameDescriptionImage']" alt="">
                
                <NullBoxContainer type="image" v-else></NullBoxContainer>
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
    IonTitle
} from '@ionic/vue'
import LogoContainer from '@/components/LogoContainer.vue'
import NullBoxContainer from '@/components/NullBoxContainer.vue'

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
        IonTitle,
        LogoContainer,
        NullBoxContainer
    },
    data() {
        return {
            game: JSON.parse(String(this.$route.params.game))
        }
    },
})
</script>

<style scoped>
.bg-img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
}

.bg-img img {
    height: 100%;
    max-width: none;
}

.bg-img .logo-box {
    --logo-size: 100vh;
}

.game-info {
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    display: flex;
    justify-content: flex-end;
    flex-flow: column wrap;
}

.game-info>* {
    width: 100%;
}

.game-info ion-card {
    margin: 0;
    border-radius: 30px 30px 0 0;
}

.game-info ion-card ion-card-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
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

.play-info,
.play-info>* {
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
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 190px;
}

.info-box ion-header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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