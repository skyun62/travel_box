<script setup>
import { ref } from 'vue'
//向上傳遞的事件
const emit = defineEmits(['update']);

// 讚數量
const num = ref(0)
const isLiked = ref(false)

//按讚的同時向上發送事件
const addLike = () => {
    num.value++
    emit('update', num.value)
    if (!isLiked.value) {
        isLiked.value = true
    }
}
</script>

<template>
    <button class="like-btn" @click="addLike">
        <i class="bi" :class="isLiked ? 'bi-heart-fill' : 'bi-heart'"></i>
        {{ num }}
    </button>
</template>

<style scoped>
.like-btn {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    color: #e63946;
    display: flex;
    align-items: center;
    gap: 6px;
}
</style>
