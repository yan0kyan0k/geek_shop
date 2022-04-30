<template>
  <HeaderApp></HeaderApp>
  <h2>Каталог</h2>
  <div class="page">
    <CatalogList v-for="item of catalogCategory"
                 v-bind:key="item.id"
                 v-bind:dataCategory="item" />
  </div>
  <ClearBooth></ClearBooth>
  <FooterApp></FooterApp>
</template>
<script>
import CatalogList from './CatalogList'
import HeaderApp from "@/components/HeaderApp";
import ClearBooth from "@/components/ClearBooth";
import FooterApp from "@/components/FooterApp";

export default {
  name: 'Catalog',

  components: {FooterApp, ClearBooth, HeaderApp, CatalogList },
  computed: {
    catalogCategory() {
      // console.log(this.$store.getters.getCategory)
      return this.$store.getters.getCategory
    }
  }
}
</script>
<style lang="scss" scoped>

</style>