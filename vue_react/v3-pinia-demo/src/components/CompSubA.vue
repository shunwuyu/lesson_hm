<template>
  <div>
    CompSubA
    {{count}}
    <hr>
    {{counterStore.count}}
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore(); // 本地和中央链接的过程
const { count }  = toRefs(counterStore); // 值， 响应式丢失了
</script>

<style scoped>

</style>