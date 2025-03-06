<script setup>
import VirtualList from './VirtualList.vue';
const d = [];
for (let i = 0; i < 100000; i++) {
  d.push({ id: i, value: i });
}
</script>

<template>
<div id="app">
  <VirtualList :listData="d" :itemSize="100"/>
</div>
</template>

<style>
html{
  height: 100%;
}
body{
  height: 100%;
  margin:0;
}
#app{
  height:100%;
}
</style>
