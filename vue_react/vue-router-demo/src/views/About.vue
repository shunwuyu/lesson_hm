<template>
  <div>
    About
    <button @click="goHome">回到首页</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter() // 路由实例 总管

const goHome = () => {
  // js 跳转  
  // Browser Object Model > DOM   
  //BOM API 
  // 破坏了啥？
  // window.location.href="/" 
  router.push('/')
}
</script>

<style  scoped>

</style>