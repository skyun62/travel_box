<script setup>
import LikeButton from '@/components/LikeButton.vue';

// 測試用的拍立得
import { ref } from 'vue'
import PolaroidView from '@/components/PolaroidView.vue';

const photos = ref([])

const titleInput = ref('')
const urlInput = ref('')

const addPhoto = () => {
  if (!titleInput.value || !urlInput.value) return

  photos.value.push({
    id: Date.now(),
    title: titleInput.value,
    url: urlInput.value,
    liked: false
  })

  titleInput.value = ''
  urlInput.value = ''
}

const deletePhoto = (id) => {
  photos.value = photos.value.filter(p => p.id !== id)
}
</script>

<template>
  <!-- 新增的拍立得 -->
  <div class="controls">
    <input v-model="titleInput" placeholder="請輸入標題" />
    <input v-model="urlInput" placeholder="請輸入圖片網址" />
    <button @click="addPhoto">新增照片</button>
  </div>

  <div class="swiper">
    <PolaroidView v-for="photo in photos" :key="photo.id" :photo="photo" @delete="deletePhoto" />
  </div>
  <!-- 新增用 -->

  <div class="polaroid-wall">
    <div v-for="n in 20" :key="n" class="wall-item">
    <div class="polaroid">
      <div class="filter">
        <div class="photo">
          <img :src="`https://picsum.photos/400/500?${n}`" />
        </div>
      </div>
      <LikeButton class="like-btn" />
      <div class="caption"></div>
    </div>
  </div>
  </div>
</template>


<style scoped>
/* 新增區 */
.controls {
  margin: 30px auto;
  display: flex;
  justify-content: center; /* 置中 */
  align-items: center;
  gap: 12px;
  max-width: 800px;
}

.controls input {
  padding: 10px 12px;
  width: 220px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.controls input:focus {
  border-color: #c9a58b;
}

.controls button {
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background-color: #c9a58b;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.controls button:hover {
  background-color: #b58d73;
}

.controls button:active {
  transform: translateY(1px);
}


.swiper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
  padding: 10px;
  background: #faf7f5;
}

/* 新增 */

.polaroid-wall {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 40px;
  background: #faf7f5;
  /* 牆面底色 */
}

.polaroid {
  width: 220px;
  background: #fff;
  padding: 15px 15px 25px;
  box-shadow: 10px 5px 10px rgba(166, 166, 166, 0.15);
  border-radius: 2px;
  transition: transform 0.3s ease;
  position: relative;
}

/* 照片區（比例控制） */
.photo {
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #eee;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 拍立得文字 */
.caption {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #ba9393;
  font-family: 'Courier New', monospace;
}

.like-btn {
  font-size: 15px;
  position: absolute;
  left: 10px;
  z-index: 10;
  cursor: pointer;
}
</style>