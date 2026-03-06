<template>
  <div>
    <div class="container">
      <OreCard v-for="ore in ores" :key="ore.name" :ore="ore" @click="selectOre(ore)" />
      <div class="anvil">
        <div v-for="(ore, index) in selectedOre" :key="index" class="anvil-ore">
          {{ ore.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import OreCard from '@/components/OreCards.vue'
const forge = reactive({
  selectedOres: [],
  totalWeight: 0,
  totalValue: 0,
})
function selectOre(ore) {
  forge.selectedOres.push(ore)
  forge.totalWeight += ore.weight
  forge.totalValue += ore.value
}
const ores = ref([
  { name: 'Copper', value: 0.01, weight: 1 },
  { name: 'Iron', value: 0.02, weight: 2 },
  { name: 'Gold', value: 0.05, weight: 3 },
  { name: 'Silver', value: 0.03, weight: 2 },
  { name: 'Diamond', value: 0.1, weight: 4 },
  { name: 'Stardust', value: 200, weight: 5 },
  { name: 'Uranium', value: 15, weight: 6 },
  { name: 'Platinum', value: 0.07, weight: 7 },
  { name: 'Mithril', value: 300, weight: 8 },
  { name: 'Adamantite', value: 400, weight: 9 },
  { name: 'Lightite', value: 500, weight: 10 },
  { name: 'Purple-Rose Gold', value: 6000, weight: 11 },
  { name: 'Million Year Plants', value: 8000000, weight: 12 },
  { name: 'Realm Core', value: 900000000000000000, weight: 13 },
  { name: 'Star Core', value: 1000000000, weight: 14 },
  { name: 'Extracted Black Hole', value: 7000000000000, weight: 15 },
  { name: 'Refined Dark Matter', value: 10000000000, weight: 16 },
  { name: 'Grass', value: Infinity, weight: 17 },
  { name: 'Divine Blood', value: 100000000000000, weight: 18 },
  { name: 'X Corp Extracted Metals', value: 10000000, weight: 19 },
  { name: 'Strange Matter', value: 8000000000000, weight: 20 },
  { name: 'AntiMatter', value: 60000, weight: 21 },
  { name: 'Wheel of Adaptation', value: 700000000, weight: 22 },
  { name: 'Exotic Matter', value: 100000000000, weight: 23 },
  { name: 'Liquid Time', value: 40000000000000000, weight: 24 },
  { name: 'Devouring Metal', value: 30000000, weight: 25 },
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
