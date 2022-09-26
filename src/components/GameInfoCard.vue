<template>
    <ion-card :router-link="`/game/${game.id}`">
        <div class="img-box">
            <img v-if="game['url-gameImage']" :src="game['url-gameImage']" alt="">
            <img v-else src="assets/icon/icon-quad.png" alt="">
        </div>

        <div class="info-box">
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
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonCard } from '@ionic/vue'

export default defineComponent({
    props: ['game'],
    components: {
        IonCard
    },
})
</script>

<style scoped>
ion-card {
    display: flex;
}

.info-box {
    padding: 16px 16px 16px 0;
    width: calc(100% - 164px);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-flow: row wrap;
}

.title span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.title span:nth-child(1) {
    color: var(--ion-color-quad-orange);
    font-size: 20px;
    font-weight: bold;
}

.text {
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hash-tag {
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.img-box {
    --size: 140px;

    width: var(--size);
    height: var(--size);
    margin: 16px 8px 16px 16px;
    overflow: hidden;
}

.img-box .logo-box {
    --logo-size: var(--size);
}
</style>