<template>
  <div>
    <div>
      <p id="count">Lifecyle Component - Count: {{ count }}</p>
    </div>
  </div>
</template>

<script setup>
import { 
  defineProps, 
  onBeforeMount, 
  onMounted, 
  onBeforeUnmount, 
  onUnmounted, 
  onBeforeUpdate, 
  onUpdated 
} from 'vue';

defineProps({
  count: {
    type: Number,
    required: true
  }
})

// console.log('haha');

// 组件有生老病死 
onMounted(() => {
  // on 某个阶段 
  // mounted 挂载
  // 已经完成了挂载
  console.log('已经挂载');
  console.log(document.getElementById('count'), '------');
})
onBeforeMount(() => {
  console.log(document.getElementById('count'), '------');
  console.log('挂载之前')
})

onBeforeUnmount(() => {
  console.log('卸载之前')
})
onUnmounted(() => {
  console.log('卸载')
})
onBeforeUpdate(() => {
  console.log('更新之前')
})
onUpdated(() => {
  console.log('更新之后')
})
</script>

<style scoped>

</style>