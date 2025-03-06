<template>
  <div>
    <button @click="handleClick">按钮</button>
    <button @click="emit('myClick', 'hello')">按钮</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['myClick'])

const handleClick = () => {
  emit('myClick', 'hello')
}
</script>

<style scoped>

</style>