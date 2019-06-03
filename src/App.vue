<template>
  <div id="app">
    <!-- <router-view/> -->
    <myMenu />
  </div>
</template>

<script>
import myMenu from './view/menu'
export default {
  name: 'App',
  components: {
    myMenu
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
