<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div>
    <RouterView />
  </div>
  
</template>

<style>
#div_scroll{
  overflow-y:auto;
  border-style: double;
  height: 800px;
  width: 500px;
  background-color: rgb(223, 233, 235);
}
</style>
