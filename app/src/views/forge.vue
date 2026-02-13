<template>
  <div>
    <OreCard v-for="ore in ores" :key="ore.name" :ore="ore" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import OreCard from '@/components/metals.vue'
const ores = ref([
  { name: 'Copper', value: 1 },
  { name: 'Iron', value: 2 },
  { name: 'Gold', value: 5 },
  { name: 'Silver', value: 3 },
  { name: 'Diamond', value: 10 },
  { name: 'Stardust', value: 200 },
  { name: 'Uranium', value: 15 },
  { name: 'Platinum', value: 7 },
  { name: 'Mithril', value: 300 },
  { name: 'Adamantite', value: 400 },
  { name: 'Lightite', value: 500 },
  { name: 'Purple-Rose Gold', value: 600 },
  { name: 'Million Year Bamboo', value: 800 },
])
</script>
<style scoped></style>
