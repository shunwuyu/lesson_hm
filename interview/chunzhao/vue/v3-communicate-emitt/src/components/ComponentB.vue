<template>
  <div>
    ComponentB
  </div>
</template>

<script setup>
import mitt from '../ mitt'
import { onUnmounted } from 'vue';
const someMethod= () => {
  console.log('someMethod')
}
// 消息机制 EventBus
mitt.on('handleChange', someMethod)
onUnmounted(() => {
  mitt.off('handleChange', someMethod)
})
</script>

<style scoped>

</style>