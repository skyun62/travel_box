<script setup>

</script>

<template>
  <div class="col-12 col-lg text-center mb-5">
    <div class="circle rounded-circle bg-secondary mx-auto"></div>
    <h2 class="fs-2">
      <slot name="title">預設標題</slot>
    </h2>
    <p>
      <slot name="content">這是預設的內文內容。</slot>
    </p>
    <button type="button" class="btn btn-secondary">View detail</button>
  </div>
</template>


<style scoped>
.circle {
  width: 150px;
  height: 150px;
}
</style>