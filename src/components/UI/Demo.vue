<template>

  <div class="list-demo">

    <transition-group name="list_name" >
      <ProductCard v-for="item of cart" v-bind:key="item.id" v-bind:card="item" >
        <button class="btn btn-cart"
                v-bind="item.show_cart = false"
                v-on:click="remove(item.id)">Удалить</button>
      </ProductCard>
    </transition-group>
  </div>

</template>

<script>
import ProductCard from "./ProductCard";
export default {
  name: "Demo.vue",

  components: {ProductCard},

  computed: {
    catalog() {
      return this.$store.getters.getCatalog
    },
    cart() {
      return this.$store.getters.getCart
    }
  },
  methods: {
    // add() {
    //   return  this.$store.dispatch('addToCart')
    // },
    remove(id) {
      return  this.$store.dispatch('removeFromCart', id)
    }
  }
}
</script>

<style scoped>
.btn-cart {
  position: absolute;
  bottom: 10px;
  right: 25px;

}
.list-demo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;
  padding: 30px;
}
.list_name-item {
  display: inline-block;
  transition: 0.1s;
  margin: 0;

}
.list_name-enter-active,
.list_name-leave-active {
  transition: all 0.1s ease;
}
.list_name-enter-from,
.list_name-leave-to {
  opacity: 0;
  transform: translateY(-1000px) scale(0.1);
  transition: 2s;
}

</style>