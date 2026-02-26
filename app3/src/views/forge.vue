<template>
  <div>
    <div class="container">
      <OreCard v-for="ore in ores" :key="ore.name" :ore="ore" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import OreCard from '@/components/OreCards.vue'
const ores = ref([
  { name: 'Copper', value: 0.01 },
  { name: 'Iron', value: 0.02 },
  { name: 'Gold', value: 0.05 },
  { name: 'Silver', value: 0.03 },
  { name: 'Diamond', value: 0.1 },
  { name: 'Stardust', value: 200 },
  { name: 'Uranium', value: 15 },
  { name: 'Platinum', value: 0.07 },
  { name: 'Mithril', value: 300 },
  { name: 'Adamantite', value: 400 },
  { name: 'Lightite', value: 500 },
  { name: 'Purple-Rose Gold', value: 6000 },
  { name: 'Million Year Plants', value: 8000000 },
  { name: 'Realm Core', value: 900000000000000000 },
  { name: 'Star Core', value: 1000000000 },
  { name: 'Extracted Black Hole', value: 7000000000000 },
  { name: 'Refined Dark Matter', value: 10000000000 },
  { name: 'Grass', value: Infinity },
  { name: 'Divine Blood', value: 100000000000000 },
  { name: 'X Corp Extracted Metals', value: 10000000 },
  { name: 'Strange Matter', value: 8000000000000 },
  { name: 'AntiMatter', value: 60000 },
  { name: 'Wheel of Adaptation', value: 700000000 },
  { name: 'Exotic Matter', value: 100000000000 },
  { name: 'Liquid Time', value: 40000000000000000 },
  { name: 'Devouring Metal', value: 300000000 },
])
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
}
</style>
