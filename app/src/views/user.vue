<template>
  <div>
    <CoinflipCard v-for="coin in coins" :key="coin.name" :coin="coin" />
  </div>
</template>
<script setup></script>
<style scoped></style>
