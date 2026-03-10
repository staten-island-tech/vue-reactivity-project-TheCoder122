<template>
  <button class="ore-card" @click="select">
    <img :src="ore.img" :alt="ore.name" class="ore-card__img" />
    <h3>{{ ore.name }}</h3>
    <p>⚖ {{ ore.weight }} | 💰 {{ ore.value }}</p>
  </button>
</template>
<script setup>
const props = defineProps({
  ore: { type: Object, required: true },
})
const emit = defineEmits(['select'])
function select() {
  emit('select', props.ore)
}
</script>
<style scoped>
.ore-card {
  width: 130px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f5f5f5;
  cursor: pointer;
}
.ore-card__img {
  width: 60px;
}
</style>
