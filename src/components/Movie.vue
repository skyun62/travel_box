<script setup>
import { ref, onMounted, computed } from 'vue';

// import default 
const movies = ref([]);

// 統一處理
const normalizedMovies = computed(() =>
    movies.value.map(movie => ({
        title: movie.Title,
        year: movie.Year,
        runtime: movie.Runtime,
        poster: movie.Poster || 'https://via.placeholder.com/200x300?text=No+Image'
    }))
);

onMounted(async () => {
    try {
        const res = await fetch(
            'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies'
        );
        movies.value = await res.json();
    } catch (err) {
        console.error(err);
    }
});
</script>

<template>
    <div class="movie-list">
        <div v-for="movie in normalizedMovies" :key="movie.title" class="movie-card">
            <img :src="movie.poster" :alt="movie.title" />
            <div class="movie-info">
                <span class="title">{{ movie.title }}</span>
                <p>年份: {{ movie.year }}</p>
                <p>時長: {{ movie.runtime }}</p>
            </div>
        </div>
    </div>

</template>

<style scoped>
.movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.movie-card {
    display: flex;
    gap: 10px;
    width: 260px;
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 8px;
    align-items: center;
}

.movie-card img {
    width: 80px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
}

.movie-info {
    display: flex;
    flex-direction: column;
}

.movie-info .title {
    font-weight: bold;
    font-size: 18px;
}
</style>
