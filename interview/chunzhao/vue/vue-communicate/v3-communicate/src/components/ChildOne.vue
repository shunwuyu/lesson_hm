<template>
  <div>
    ChildOne
    {{ msg1 }}
    {{ msg2 }}
  </div>
</template>

<script>
export default {
  props: ["msg1", "msg2"],
  setup(props) {
    console.log(props)
  }
}
</script>

<style scoped>

</style>