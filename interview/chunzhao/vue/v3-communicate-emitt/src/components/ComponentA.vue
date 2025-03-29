<template>
  <div>
    ComponentA
    <button @click="handleClick">触发事件</button>
  </div>
</template>

<script setup>
// 
import mitt from '../ mitt'
const handleClick = () => {
  mitt.emit("handleChange");
}
</script>

<style scoped>

</style>