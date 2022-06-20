<template>
    <div class="logo-box">
        <div class="logo">
            <div class="title">QUAD</div>
            <div class="sub-title">4배의 행복, [쿼드]</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped>
.logo-box {
    --logo-size: 200px;

    width: var(--logo-size);
    height: var(--logo-size);
    background-color: var(--ion-color-quad-logo);
    color: var(--ion-color-quad-logo-contrast);
    display: flex;
    align-items: center;
}

.logo {
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.logo div {
    width: 100%;
}

.title {
    font-size: 40px;
}

.sub-title {
    font-size: 12px;
}
</style>