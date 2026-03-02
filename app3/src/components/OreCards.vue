<template>
  <div class="ore-card">
    <h2>{{ ore.name }}</h2>
    <h3>{{ ore.value }}</h3>
  </div>
</template>
<script setup>
defineProps({
  ore: {
    type: Object,
    required: true,
  },
})
</script>
<style scoped>
.ore-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 220px;
  padding: 16px;
  background: linear-gradient(145deg, #fdf6e3, #e2e2e2);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.3s;
  text-align: center;
  cursor: pointer;
}
.ore-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(145deg, #f0e6ff, #d0caff);
}
.ore-card h2 {
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
