<script setup>
import { computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => ['g_1.jpg', 'g_2.jpg', 'g_3.jpg', 'g_4.jpg', 'g_5.jpg', 'g_6.jpg']
  }
})

const resolvedImages = computed(() =>
  props.images.map(name => new URL(`../assets/img/${name}`, import.meta.url).href)
)
</script>

<template>
  <div class="row" style="height: 600px;">

    <!-- 左欄：上方兩張小圖 + 下方一張大圖 -->
    <div class="col-12 col-md-6 d-flex flex-column" style="height: 100%;">
      <div class="row flex-grow-0" style="height: 33.333%;">
        <div class="col p-1 h-100">
          <img class="w-100 h-100" style="object-fit: cover;" :src="resolvedImages[0]" alt="">
        </div>
        <div class="col p-1 h-100">
          <img class="w-100 h-100" style="object-fit: cover;" :src="resolvedImages[1]" alt="">
        </div>
      </div>
      <div class="row flex-grow-1" style="height: 66.666%;">
        <div class="col p-1 h-100">
          <img class="w-100 h-100" style="object-fit: cover;" :src="resolvedImages[2]" alt="">
        </div>
      </div>
    </div>

    <!-- 右欄：上方一張大圖 + 下方兩張小圖 -->
    <div class="col-12 col-md-6 d-flex flex-column" style="height: 100%;">
      <div class="row flex-grow-1" style="height: 66.666%;">
        <div class="col p-1 h-100">
          <img class="w-100 h-100" style="object-fit: cover;" :src="resolvedImages[3]" alt="">
        </div>
      </div>
      <div class="row flex-grow-0" style="height: 33.333%;">
        <div class="col p-1 h-100">
          <img class="w-100 h-100" style="object-fit: cover;" :src="resolvedImages[4]" alt="">
        </div>
        <div class="col p-1 h-100">
          <img class="w-100 h-100" style="object-fit: cover;" :src="resolvedImages[5]" alt="">
        </div>
      </div>
    </div>

  </div>
</template>