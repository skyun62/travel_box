<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const craftsmen = [
    {
        id: 1,
        name: 'Marten Herma Anderson',
        origin: '德國',
        year: 1971,
        material: '陶土 · 礦物釉料',
        quote: '好的光線不該讓人察覺光源的存在。',
        description: '將建築邏輯植入陶土，在理性的地質層次中尋找詩意。',
        story: 'Marten 在柏林包浩斯學院受訓，深受構成主義影響。他的作品拒絕裝飾，以材料本身的紋理與結構說話。每一件陶器都像一座縮小的建築——有承重、有空間、有光影的流動。',
        tags: ['#陶藝', '#建築感', '#極簡主義', '#包浩斯', '#礦物釉'],
        works: 134,
        exhibitions: 22,
        awards: 8,
        gallery: ['陶土系列 I', '地質釉彩', '構成器皿', '建築陶塑']
    },
    {
        id: 2,
        name: '伊藤美和（いとう みわ）',
        origin: '日本',
        year: 1983,
        material: '吹製玻璃 · 色釉',
        quote: '雖為玻璃質地，卻展現出如雲朵或流體般的有機邊緣。',
        description: '以童趣幽默顛覆玻璃形態，打造充滿生命力的超現實物件。',
        story: '伊藤美和在京都學習傳統吹製玻璃，卻選擇走向截然不同的方向。她的作品常帶著一種幽默的荒誕感——像是玻璃在某個夢境中被重新定義了形狀的規則。',
        tags: ['#玻璃藝術', '#超現實', '#有機造型', '#日本工藝', '#色彩實驗'],
        works: 89,
        exhibitions: 17,
        awards: 11,
        gallery: ['流體玻璃 I', '雲邊系列', '色域實驗', '有機器皿']
    },
    {
        id: 3,
        name: '謝佳珍 (Chia Chen Hsieh)',
        origin: '台灣',
        year: 1988,
        material: '孟宗竹 · 天然漆',
        quote: '靈感源於自然界線條，將韌性十足的竹材轉化為流動語言。',
        description: '利用竹編孔隙創造空氣感與動態的陰影變化。',
        story: '謝佳珍在南投長大，竹林是她童年最熟悉的風景。她將傳統竹編工法與當代設計語彙融合，讓竹子不再只是工具，而是能傳遞情感與空間感受的媒介。',
        tags: ['#竹編', '#台灣工藝', '#永續材料', '#光影設計', '#自然語彙'],
        works: 67,
        exhibitions: 14,
        awards: 6,
        gallery: ['竹光裝置', '孔隙系列', '流動竹編', '陰影器物']
    }
]

const route = useRoute()
const craftsman = computed(() =>
    craftsmen.find(c => c.id === Number(route.params.id))
)

</script>

<template>
    <div v-if="craftsman" class="page">

        <!-- NAV -->
        <nav class="nav">
            <router-link to="/" class="back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                </svg>
                返回
            </router-link>
            <span class="nav-brand">工藝誌</span>
            <span class="nav-origin">{{ craftsman.origin }}</span>
        </nav>

        <!-- HERO -->
        <header class="hero">
            <div class="hero-left">
                <div class="hero-img-wrap">
                    <div class="hero-img"></div>
                    <div class="hero-img-meta">
                        <span>{{ craftsman.material }}</span>
                        <span>Est. {{ craftsman.year }}</span>
                    </div>
                </div>
            </div>

            <div class="hero-right">
                <p class="hero-index">No.0{{ craftsman.id }}</p>
                <h1 class="hero-name">{{ craftsman.name }}</h1>
                <p class="hero-origin">{{ craftsman.origin }}</p>

                <div class="tags">
                    <span v-for="tag in craftsman.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>

                <div class="hero-rule"></div>

                <p class="hero-desc">{{ craftsman.description }}</p>

                <div class="stats">
                    <div class="stat">
                        <span class="stat-val">{{ craftsman.works }}</span>
                        <span class="stat-key">件作品</span>
                    </div>
                    <div class="stat">
                        <span class="stat-val">{{ craftsman.exhibitions }}</span>
                        <span class="stat-key">次展覽</span>
                    </div>
                    <div class="stat">
                        <span class="stat-val">{{ craftsman.awards }}</span>
                        <span class="stat-key">項獎項</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- QUOTE -->
        <section class="quote-section">
            <div class="quote-inner">
                <span class="qmark">"</span>
                <p class="qtext">{{ craftsman.quote }}</p>
                <p class="qauthor">— {{ craftsman.name }}</p>
            </div>
        </section>

        <!-- STORY -->
        <section class="story-section">
            <div class="story-label">
                <span>創作故事</span>
            </div>
            <div class="story-body">
                <p>{{ craftsman.story }}</p>
            </div>
        </section>

    </div>

    <!-- NOT FOUND -->
    <div v-else class="not-found">
        <p>找不到此設計師</p>
        <router-link to="/">← 返回首頁</router-link>
    </div>
</template>

<style scoped>
/* ── RESET & BASE ── */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.page {
    background: #fff;
    color: #111;
    font-family: 'Georgia', 'Noto Serif TC', serif;
    min-height: 100vh;
}

/* ── NAV ── */
.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    height: 58px;
    background: rgba(255, 255, 255, 0.93);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid #e8e8e8;
}

.back {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #999;
    text-decoration: none;
    transition: color 0.2s;
}

.back:hover {
    color: #111;
}

.nav-brand {
    font-size: 15px;
    letter-spacing: 0.2em;
    color: #111;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav-origin {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #ccc;
}

/* ── HERO ── */
.hero {
    padding:50px;
    display: grid;
    grid-template-columns: 55% 45%;
    min-height: 100vh;
}

.hero-left {
    position: relative;
    overflow: hidden;
}

.hero-img-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.hero-img {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background: linear-gradient(160deg, #e4e0d8 0%, #cdc8be 100%);
    /* 換成真實圖片：background: url('...') center/cover */
}

.hero-img-meta {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.hero-img-meta span {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(80, 75, 68, 0.7);
    background: rgba(255, 255, 255, 0.6);
    padding: 3px 8px;
    backdrop-filter: blur(6px);
    width: fit-content;
}

.hero-right {
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid #e8e8e8;
}

.hero-index {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    color: #ccc;
    margin-bottom: 1.5rem;
}

.hero-name {
    font-size: clamp(1.8rem, 3vw, 3.2rem);
    font-weight: 400;
    line-height: 1.1;
    color: #111;
    margin-bottom: 0.4rem;
}

.hero-origin {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #aaa;
    margin-bottom: 2rem;
}

/* TAGS */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 2.5rem;
}

.tag {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: #888;
    border: 1px solid #e0e0e0;
    padding: 4px 10px;
    border-radius: 2px;
    transition: border-color 0.2s, color 0.2s;
    cursor: default;
}

.tag:hover {
    border-color: #aaa;
    color: #444;
}

.hero-rule {
    width: 36px;
    height: 1px;
    background: #ddd;
    margin-bottom: 2rem;
}

.hero-desc {
    font-size: 15px;
    line-height: 1.9;
    color: #666;
    margin-bottom: 3rem;
    max-width: 32ch;
}

/* STATS */
.stats {
    display: flex;
    gap: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid #e8e8e8;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stat-val {
    font-size: 1.8rem;
    font-weight: 400;
    color: #111;
    line-height: 1;
}

.stat-key {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #bbb;
}

/* ── QUOTE ── */
.quote-section {
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
}

.quote-inner {
    max-width: 760px;
    margin: 0 auto;
    padding:3rem 2rem;
    text-align: center;
}

.qmark {
    display: block;
    font-size: 5rem;
    line-height: 0.5;
    color: #e0e0e0;
    margin-bottom: 2rem;
}

.qtext {
    font-size: clamp(1.3rem, 2vw, 1.9rem);
    font-weight: 400;
    line-height: 1.65;
    color: #111;
    letter-spacing: 0.03em;
    margin-bottom: 2rem;
}

.qauthor {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #bbb;
}

/* ── STORY ── */
.story-section {
    display: grid;
    grid-template-columns: 240px 1fr;
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 4rem;
    gap: 4rem;
    border-bottom: 1px solid #e8e8e8;
}

.story-label {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #bbb;
    padding-top: 4px;
}

.story-body p {
    font-size: 15px;
    line-height: 2;
    color: #555;
}



/* ── NOT FOUND ── */
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 1.5rem;
    font-size: 14px;
    color: #aaa;
    font-family: 'Helvetica Neue', sans-serif;
}

.not-found a {
    color: #888;
    text-decoration: none;
    letter-spacing: 0.1em;
}

/* ── RWD ── */
@media (max-width: 860px) {
    .nav {
        padding: 0 1.5rem;
    }

    .nav-brand {
        display: none;
    }

    .hero {
        grid-template-columns: 1fr;
        min-height: auto;
    }

    .hero-img {
        min-height: 320px;
    }

    .hero-right {
        padding: 3rem 1.5rem;
        border-left: none;
        border-top: 1px solid #e8e8e8;
    }

    .story-section {
        grid-template-columns: 1fr;
        padding: 4rem 3rem;
        gap: 1.5rem;
    }

    .gallery-grid {
        grid-template-columns: 1fr 1fr;
    }

    .g-item:nth-child(2) {
        border-right: none;
    }

    .g-item:nth-child(3) {
        border-right: 1px solid #e8e8e8;
    }

    .g-item:nth-child(4) {
        border-right: none;
    }
}
</style>