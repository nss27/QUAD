<template>
    <div class="title">
        <span>{{ title }}</span> 선택
    </div>
    <div class="check-box">
        <div class="bar active">미스테리</div>
        <div class="bar">추리</div>
        <div class="bar">추리</div>
        <div class="bar">추리</div>
        <div class="bar">추리</div>
        <div class="bar">추리</div>
        <div class="bar">추리</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['title']
})
</script>

<style scoped>
* {
    color: #000000;
}

.title {
    font-size: 20px;
}

.check-box {
    display: flex;
}
</style>