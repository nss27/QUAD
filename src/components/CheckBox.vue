<template>
    <div class="title">
        <span>{{ checkItem.title }}</span> 선택
    </div>
    <div class="check-box" :class="checkItem.type">
        <div v-for="(item, index) in items" :key="index" :class="{ active: item.isChecked }" @click="itemClick(item)">{{
        item.text }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'

export default defineComponent({
    props: ['checkItem'],
    setup(props) {
        const { checkItem } = toRefs(props);
        const items = ref(checkItem.value.items);

        const itemClick = (item: any) => {
            if (!checkItem.value.type.multiChoice) {
                (items.value as any[]).map(item => {
                    item.isChecked = false;
                    return item;
                });
            }

            item.isChecked = !item.isChecked;
        }

        return {
            items,
            itemClick,
        }
    }
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

.check-box div {
    white-space: nowrap;
}

.check-box.bar div {
    padding: 8px 16px;
    border-radius: 14px;
    border: dashed 1px;
}

.check-box.circle div {
    --size: 60px;

    min-width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: solid 1px;
    line-height: var(--size);
    text-align: center;
    font-size: 18px;
}

.check-box.bar div.active,
.check-box.circle div.active {
    border: none;
    background-color: var(--ion-color-quad-orange);
    color: #ffffff;
}
</style>