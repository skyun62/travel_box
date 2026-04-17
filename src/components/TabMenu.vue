<script setup>
const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    activeTab: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['change-tab'])

const selectTab = (tab) => {
    emit('change-tab', tab)
}
</script>

<template>
    <div class="tab-menu">
        <button v-for="tab in tabs" :key="tab" :class="['tab-btn', { active: tab === activeTab }]"
            @click="selectTab(tab)">
            {{ tab }}
        </button>
    </div>
</template>

<style scoped>
.tab-menu {
    display: flex;
    /* 必須拿掉 gap，否則 1/3 + gap 會超過 100% */
    gap: 0; 
    margin-bottom: 0; /* 讓頁籤貼齊下方的內容框 */
    width: 100%;      /* 確保容器撐滿父層（700px） */
}

.tab-btn {
    /* 核心設定：讓按鈕平分剩餘空間，3個按鈕就會自動各佔 1/3 */
    flex: 1; 
    
    font-weight: bold;
    padding: 12px 0;   /* 寬度交給 flex，我們只管上下內距 */
    border: 1px solid #ccc; /* 增加邊框讓分界明顯 */
    background: #fff;
    cursor: pointer;
    border-radius: 8px 8px 0 0; /* 統一圓角或根據需求調整 */
    transition: background 0.2s;
}

.tab-btn.active {
    background: #ba9393;
    color: #fff;
}
</style>
