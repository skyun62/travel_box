<script setup>
// currentStep: 1~4，決定哪一段 progress-bar 填滿
const props = defineProps({
    currentStep: {
        type: Number,
        default: 1
    }
})

const steps = [
    { label: '確認購物車' },
    { label: '付款與運送' },
    { label: '填寫資料' },
    { label: '完成訂單' },
]

// 每個步驟右邊的進度條要填多少
// 規則：step < currentStep → 100%，step === currentStep → 25%，其餘 → 0%
function barWidth(stepIndex) {
    const step = stepIndex + 1 // 1-based
    if (step < props.currentStep) return '100%'
    if (step === props.currentStep) return '25%'
    return '0%'
}
</script>

<template>
    <div class="row text-center">
        <div v-for="(step, index) in steps" :key="index"
            class="col-progress col d-flex flex-column align-items-center justify-content-center"
            style="height: 100px;">
            <div class="box-progress d-flex align-items-center position-relative w-100">
                <div class="mx-auto my-circle rounded-circle text-white d-flex justify-content-center align-items-center"
                    style="width: 40px; height: 40px; background-color: #3a8fb7; flex-shrink: 0;">
                    {{ index + 1 }}
                </div>
                <!-- 最後一步不需要進度條 -->
                <div v-if="index < steps.length - 1" class="progress ms-2 flex-fill" style="height: 8px;">
                    <div class="progress-bar" style="background-color: #3a8fb7;" :style="{ width: barWidth(index) }">
                    </div>
                </div>
            </div>
            {{ step.label }}
        </div>
    </div>
</template>

<style scoped>
.col-progress {
    min-width: 0;
    font-size: 13px;
}
</style>