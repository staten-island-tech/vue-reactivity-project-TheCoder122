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
.ore-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(145deg, #f0e6ff, #d0caff);
}
.ore-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}
.ore-card h3 {
  font-size: 1rem;
  color: #555;
}
</style>
