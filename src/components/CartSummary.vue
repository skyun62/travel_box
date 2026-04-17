<script setup>
// 接收 cart 陣列，自動計算總計
const props = defineProps({
    cart: {
        type: Array,
        default: () => []
    },
    shippingFee: {
        type: Number,
        default: 60
    }
})

import { computed } from 'vue'

const totalQty = computed(() =>
    props.cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
)
const subTotal = computed(() =>
    props.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
)
const grandTotal = computed(() =>
    props.cart.length ? subTotal.value + props.shippingFee : 0
)
</script>

<template>
    <section>
        <div class="row">
            <div class="col col-10 text-end">數量：</div>
            <div class="col col-2 text-end">{{ totalQty }}</div>
        </div>
        <div class="row">
            <div class="col col-10 text-end">小計：</div>
            <div class="col col-2 text-end">${{ subTotal }}</div>
        </div>
        <div class="row">
            <div class="col col-10 text-end">運費：</div>
            <div class="col col-2 text-end">${{ shippingFee }}</div>
        </div>
        <div class="row fw-bold">
            <div class="col col-10 text-end">總計：</div>
            <div class="col col-2 text-end">${{ grandTotal }}</div>
        </div>
    </section>
</template>