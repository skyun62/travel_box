cat > /mnt/user-data/outputs/SkeletonImg.vue << 'EOF'
<script setup>
import { ref } from 'vue'

defineProps({
    src:   { type: String, required: true },
    alt:   { type: String, default: '' },
    // 寬高比，用來撐開 skeleton 的高度，格式 '16/9' '4/3' '1/1' 等
    ratio: { type: String, default: '16/9' },
    // 額外的 img class
    imgClass: { type: String, default: '' },
})

const loaded = ref(false)
const error  = ref(false)
</script>

<template>
    <div class="sk-wrap" :style="{ aspectRatio: ratio }">
        <!-- Skeleton（圖片載入完成前顯示） -->
        <div v-if="!loaded && !error" class="sk-bone">
            <div class="sk-shimmer"></div>
        </div>

        <!-- 載入失敗佔位 -->
        <div v-if="error" class="sk-error">
            <i class="bi bi-image"></i>
        </div>

        <!-- 實際圖片：載入完成前用 opacity:0 隱藏，完成後淡入 -->
        <img
            :src="src"
            :alt="alt"
            :class="['sk-img', imgClass, { 'sk-img--ready': loaded }]"
            @load="loaded = true"
            @error="error = true; loaded = false"
        >
    </div>
</template>

<style scoped>
.sk-wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #f0f0f0;
    border-radius: inherit;   /* 繼承父層圓角 */
}

/* Skeleton 底色 */
.sk-bone {
    position: absolute;
    inset: 0;
    background: #e8e8e8;
    overflow: hidden;
}

/* 光澤掃過動畫 */
.sk-shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255,255,255,0.5) 50%,
        transparent 100%
    );
    animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* 載入失敗佔位 */
.sk-error {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    color: #bbb;
    font-size: 28px;
}

/* 圖片本體 */
.sk-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.4s ease;
}

/* 載入完成後淡入 */
.sk-img--ready {
    opacity: 1;
}
</style>