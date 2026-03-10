<template>
  <main class="forge">
    <h1>Forge Builder</h1>
    <section class="forge__stats">
      <h2>Total Weight: {{ totalWeight }}</h2>
      <h2>Total Value: {{ totalValue }}</h2>
      <h3>Items Forged: {{ selectedOres.length }}</h3>
    </section>
    <section class="forge__layout">
      <div class="forge__ores">
        <OreCard
          v-for="ore in ores"
          :key="ore.name"
          :ore="ore"
          @select="addOre"
        />
      </div>
      <div class="forge__anvil">
        <img src="/anvil.png" alt="Anvil" class="forge__anvil-img" />
        <img
          v-for="(ore, i) in selectedOres"
          :key="i"
          :src="ore.img"
          :alt="ore.name"
          class="forge__stack"
          :style="{ bottom: 70 + i * 16 + 'px' }"
        />
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, computed } from 'vue'
import OreCard from '@/components/OreCard.vue'
const ores = ref([
  { name: 'Copper', value: 0.01, weight: 1, img: '/copper.png' },
  { name: 'Iron', value: 0.02, weight: 2, img: '/iron.png' },
  { name: 'Gold', value: 0.05, weight: 3, img: '/gold.png' },
  { name: 'Silver', value: 0.03, weight: 2, img: '/silver.png' },
  { name: 'Diamond', value: 0.1, weight: 4, img: '/diamond.png' },
  { name: 'Stardust', value: 200, weight: 5, img: '/stardust.png' },
  { name: 'Uranium', value: 15, weight: 6, img: '/uranium.png' },
  { name: 'Platinum', value: 0.07, weight: 7, img: '/platinum.png' },
  { name: 'Mithril', value: 300, weight: 8, img: '/mithril.png' },
  { name: 'Adamantite', value: 400, weight: 9, img: '/adamantine.png' },
  { name: 'Lightite', value: 500, weight: 10, img: '/Lightite.png' },
  { name: 'Purple-Rose Gold', value: 6000, weight: 11, img: '/purple-rose-gold.png' },
  { name: 'Million Year Plants', value: 8000000, weight: 12, img: '/DivineMillionAgePlants.png' },
  { name: 'Realm Core', value: 900000000000000000, weight: 13, img: '/RealmCore.png' },
  { name: 'Star Core', value: 1000000000, weight: 14, img: '/starcore.png' },
  { name: 'Extracted Black Hole', value: 7000000000000, weight: 15, img: '/blackhole.png' },
  { name: 'Refined Dark Matter', value: 10000000000, weight: 16, img: '/darkmatter.png' },
  { name: 'Grass', value: Infinity, weight: 17, img: '/grass.png' },
  { name: 'Divine Blood', value: 100000000000000, weight: 18, img: '/divineblood.png' },
  { name: 'X Corp Extracted Metals', value: 10000000, weight: 19, img: '/Xcorpmetal.png' },
  { name: 'Strange Matter', value: 8000000000000, weight: 20, img: '/StrangeMatter.png' },
  { name: 'AntiMatter', value: 60000, weight: 21, img: '/antimatter.png' },
  { name: 'Wheel of Adaptation', value: 700000000, weight: 22, img: '/wheel.png' },
  { name: 'Exotic Matter', value: 100000000000, weight: 23, img: '/exoticmatter.png' },
  { name: 'Liquid Time', value: 40000000000000000, weight: 24, img: '/LiquidTime.png' },
  { name: 'Devouring Metal', value: 30000000, weight: 25, img: '/devouringmetal.png' },
])
const selectedOres = ref([])
function addOre(ore) {
  selectedOres.value.push(ore)
}
const totalWeight = computed(() =>
  selectedOres.value.reduce((sum, ore) => sum + ore.weight, 0)
)
const totalValue = computed(() =>
  selectedOres.value.reduce((sum, ore) => sum + ore.value, 0)
)
</script>
<style scoped>
.forge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.forge__layout {
  display: flex;
  gap: 40px;
}
.forge__ores {
  width: 480px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.forge__anvil {
  position: relative;
  width: 260px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.forge__anvil-img {
  width: 220px;
}
.forge__stack {
  position: absolute;
  width: 70px;
}
</style>
