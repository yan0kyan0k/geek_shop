<template>
  <div id="app" v-cloak>

    <router-view></router-view>



  </div>
</template>

<script>

import './assets/globalStyle.css'

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('loadHome')
    this.$store.dispatch('loadCatalog')
    this.$store.dispatch('loadCatalogCategory')
    this.$store.dispatch('loadCart')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  position: relative;
  background: rgba(255, 254, 251, 60%);
}

</style>
