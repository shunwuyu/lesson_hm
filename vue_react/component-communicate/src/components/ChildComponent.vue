<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="sendMessageToParent">发送消息给父组件</button>
  </div>
</template>

<script setup>
import { 
  defineProps,
  defineEmits,
  ref
} from 'vue'

const childMessage = ref('Hello, Parent!')

defineProps({
  title: {
    type: String,
    required: true
  }
})
// emits 汇报 触发
const emits = defineEmits(['child-message'])
const sendMessageToParent = () => {
  emits('child-message', childMessage.value)
}
</script>

<style scoped>

</style>