<template>
    <div class="title">
        <span>{{ checkItem.title }}</span> 선택
    </div>
    <div class="check-box" :class="checkItem.type">
        <span v-for="(item, index) in checkItem.items" :key="index" :class="{ active: item.isChecked }"
            @click="itemClick(index)">{{ item.text }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['checkItem'],
    methods: {
        itemClick(index: number) {
            const item = this.checkItem.items[index]
            item.isChecked = !item.isChecked
        }
    },
})
</script>

<style scoped>
.title {
    font-size: 20px;
    margin-bottom: 40px;
}

.title span {
    color: var(--ion-color-quad-orange);
    border-bottom: solid 4px;
    padding-bottom: 10px;
    font-weight: bold;
}

.check-box {
    display: flex;
    gap: 15px;
    flex-flow: column wrap;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-left: -50px;
    padding: 0 50px;
    align-items: center;
}

.check-box::-webkit-scrollbar {
    display: none;
}

.check-box.bar {
    height: 36px;
}

.check-box.circle {
    height: 60px;
}

.check-box.bar span {
    padding: 8px 16px;
    border-radius: 14px;
    border: dashed 1px;
}

.check-box.circle span {
    --size: 60px;

    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: solid 1px;
    line-height: var(--size);
    text-align: center;
    font-size: 18px;
}

.check-box.bar span.active,
.check-box.circle span.active {
    border: none;
    background-color: var(--ion-color-quad-orange);
    color: #ffffff;
}
</style>