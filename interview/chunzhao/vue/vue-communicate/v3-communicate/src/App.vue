<template>
  <div>
    <ParentOne/>
    <ParentTwo/>
    <ExposeParent/>
    <VModelParent/>
    <ProvideParent />
  </div>
</template>

<script setup>
import ParentOne from "./components/ParentOne.vue";
import ParentTwo from "./components/ParentTwo.vue";
import ExposeParent from "./components/ExposeParent.vue";
import VModelParent from "./components/VModelParent.vue";
import ProvideParent from "./components/ProvideParent.vue";
</script>

<style  scoped>

</style>