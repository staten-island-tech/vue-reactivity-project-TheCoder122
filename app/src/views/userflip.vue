<template>
  <div>
    <form action="submit">
      <label for="FLIP">Coinflip:</label>
      <input type="text" v-model="coinflip" />
      <button @click="flipCoin" type="submit">Flip Coin</button>
    </form>
    <h2 v-if="flipped">You flipped {{ coinflip }}</h2>
    <h2 v-else>Please Flip A Coin</h2>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const coinflip = ref('')
const flipped = ref(false)
function flipCoin() {
  const outcomes = ['Heads', 'Tails']
  const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)]
  coinflip.value = randomOutcome
  flipped.value = true
}
</script>
<style scoped></style>
