<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const craftsmen = [
    {
        "id": 1,
        "name": "Marten Herma Anderson",
        "origin": "德國",
        "year": 1990,
        "material": "繪畫 / 數位介質",
        "quote": "色彩的沈默有時比聲音更響亮。",
        "description": "致力於極簡主義與色彩理論的探索，透過色塊與線條的對話尋找空間的平衡。",
        "story": "Marten 的創作深受柏林城市景觀與包浩斯風格影響。他習慣將複雜的視覺元素簡化至極致，讓觀者在單純的色塊中感受情緒的起伏與空間的深度。",
        "tags": ["#極簡主義", "#當代藝術", "#色彩理論", "#德國藝術家", "#抽象表現"],
        "works": 42,
        "exhibitions": 12,
        "awards": 4,
        "gallery": ["藍色構圖 01", "重疊的平面", "晨曦之影", "線條與節奏"]
    },
    {
        "id": 2,
        "name": "いとう みわ (伊藤美和)",
        "origin": "日本",
        "year": 1975,
        "material": "陶藝創作",
        "quote": "器皿是盛裝生活溫度的容器。",
        "description": "以細膩的陶藝工法結合日常觀察，創作出具備手感溫度且充滿詩意的生活器物。",
        "story": "伊藤美和在常滑市研習陶藝多年，她擅長捕捉大自然中微小的變化。對她而言，陶土不只是素材，更是連結土地與使用者生活記憶的媒介。",
        "tags": ["#日本工藝", "#現代陶藝", "#器皿設計", "#手作美學", "#生活物件"],
        "works": 120,
        "exhibitions": 25,
        "awards": 8,
        "gallery": ["暖白裂紋杯", "四季之盤", "森林花器", "土地呼吸系列"]
    },
    {
        "id": 3,
        "name": "陳建志 (Chien-Chih, Chen)",
        "origin": "台灣",
        "year": 1994,
        "material": "吹製玻璃",
        "quote": "我向一無所有的白學習，也向繁複無盡的白學習。",
        "description": "融合傳統吹製技法與現代設計，擅長運用乳白玻璃原料，在透明與半透明間捕捉光影流動的記憶。",
        "story": "出生於南投，銘傳大學商品設計系畢業後，在一次偶然中深受玻璃製作過程吸引，決定投入新竹「玲瓏窯」跟隨林瑤農大師學習。他創立了 CCC Glass Works，將玻璃視為記錄時間與情感的容器，特別珍惜在製作過程中產生的隨機性與手工痕跡。",
        "tags": ["#吹製玻璃", "#新竹工藝", "#CCC玻璃製作所", "#白玉系列", "#當代工藝"],
        "works": 85,
        "exhibitions": 10,
        "awards": 5,
        "gallery": ["黑玉系列", "白玉系列", "記憶之壺", "水鏡浮島"]
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
    padding: 50px;
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
    padding: 3rem 2rem;
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