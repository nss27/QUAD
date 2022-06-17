<template>
    <ion-card router-link="/game/1">
        <img src="https://image.yes24.com/goods/67447169/XL" alt="">
        <div class="info-box">
            <div class="title">
                <span>클루</span>
                <span>추리(5인)</span>
            </div>
            <div class="text">
                "범인은 이 안에 있다"
                <br>탐정이 되어 살인사건을 추리해보자
            </div>
            <div class="hash-tag">
                #협잡 #추리 #기억력 #패밀리
            </div>
        </div>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
    IonCard
} from '@ionic/vue'

export default defineComponent({
    components: {
        IonCard
    }
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

.title span:nth-child(1) {
    color: var(--ion-color-quad-orange);
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

img {
    --size: 140px;

    width: var(--size);
    height: var(--size);
    margin: 16px 8px 16px 16px;
}
</style>