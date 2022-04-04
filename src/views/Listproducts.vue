<template>
  <div class="page">
    <h2>Список товаров</h2>
    <div class="product-list">
      <ProductCard v-for="item of catalog" v-bind:key="item.id" v-bind:data="item">
        <button class="btn" v-on:click="addToCart(item)">Купить</button>

      </ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {ProductCard},
  name: 'Listproducts',
  computed: {
    catalog() {
      //, this.$route.params.id
      if(this.$store.state.catalog != undefined && this.$store.state.catalog[0].category_id != this.$route.params.id){
        this.$store.dispatch('loadProdutsByCategory', this.$route.params.id);
      }
      return this.$store.getters.getCatalog
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    }
  }
}
</script>

<style>
.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  /*flex-wrap: wrap;*/
  width: 100%;
  height: 100%;
  /*margin: 30px 0 0 0;*/
  /*border: 1px solid black;*/
}

.page {
  position: relative;
  /*border: 4px solid yellow;*/
  /*background-color: rgba(0,0,0,1%);*/
  /*min-height: 2100px;*/
  /*max-width: 2000px;*/
}

h2 {
  color: grey;
  width: 200px;
  align-self: center;
  margin-top: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  border-bottom: 5px solid grey;
}

.btn {
  outline: none;
  background: #990f04;
  position: absolute;
  box-shadow: 1px 3px 4px 1px grey;
  bottom: 14px;
  color: white;
  right: 60px;
  width: 260px;
  padding: 7px;
  margin: 10px;
  border-radius: 15px 15px;
  transition: 0.2s;
  border: none;
}

.btn:hover {
  background: #d8380e;
  cursor: pointer;
}

.btn:active {
  background: #fc816c;
}

@media (max-width: 400px) {
  .page {
    min-width: 360px;
  }
}
</style>