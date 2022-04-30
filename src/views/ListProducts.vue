<template>
  <HeaderApp></HeaderApp>
  <h2>Список товаров</h2>
  <div class="page" >

        <ProductCard v-for="item of catalog"
                     v-bind:key="item.id"
                     v-bind:card="item">
              <button class="btn"
                      @click="item.show_cart = true"
                      v-on:click="addToCart(item)"
              >Купить
              </button>
        </ProductCard>

  </div>
</template>

<script>
import ProductCard from '../components/UI/ProductCard.vue'
import HeaderApp from "@/components/HeaderApp";
export default {
  components: {
    HeaderApp,
    ProductCard
  },
  name: 'ListProducts',

  mounted() {
      this.$store.dispatch('loadProductsByCategory', this.$route.params.id);
      return  this.$store.getters.getProductsByCategory
  },
  computed: {
    catalog() {
      return this.$store.getters.getProductsByCategory
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    },
    remove(id) {
      return  this.$store.dispatch('removeFromCart', id)
    }
  }
}

</script>

<style>

</style>