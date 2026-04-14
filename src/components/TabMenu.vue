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
    gap: 10px;
    margin-bottom: 20px;
}

.tab-btn {
    font-weight: bold;
    padding: 8px 16px;
    border: none;
    background: #eee;
    cursor: pointer;
    border-radius: 6px 6px 0px 0px;
}

.tab-btn.active {
    background: #ba9393;
    color: #fff;
}
</style>
