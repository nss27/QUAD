<template>
    <div class="null-box">
        <div class="text">{{ text }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['type'],
    computed: {
        text() {
            let result = ''

            switch (this.type) {
                case 'video':
                    result = '조회된 영상이 없습니다'
                    break

                case 'image':
                    result = '조회된 이미지가 없습니다'
                    break;

                default:
                    result = '조회된 데이터가 없습니다'
                    break
            }

            return result
        }
    }
})
</script>

<style scoped>
.null-box {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>