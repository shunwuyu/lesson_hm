<template>
  <div>
    <p>Mouse X: {{ mousePos.x }}</p>
    <p>Mouse Y: {{ mousePos.y }}</p>
  </div>
</template>

<script setup>
import { 
  // composition api vue3 核心亮点
  reactive,
  onUnmounted,
  onMounted // 生命周期 life cycle 
} from 'vue'
// const x = ref(0)
// const y = ref(0)

const mousePos = reactive({
  x: 0,
  y: 0
})

const mousePosHandler = (e) => {
  mousePos.x = e.pageX
  mousePos.y = e.pageY
  console.log('还在')
}

onMounted(() => {
  window.addEventListener('mousemove', mousePosHandler) 
})
onUnmounted(() => {
  window.removeEventListener('mousemove', mousePosHandler)
})
</script>

<style scoped>

</style>