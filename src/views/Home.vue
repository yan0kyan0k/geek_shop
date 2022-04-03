<template>
  <div class="page">

    <div class="ban_block ban1">
      <div>
        <a href="#">
          <img :src="this.$store.state.imageUrl + 'storage/' + JSON.parse(this.$store.state.home.banner)[0]">
        </a>
      </div>
    </div>

    <h2> {{ this.$store.state.home.title }} </h2>
    <br>
    <p class="p-home"> {{ this.$store.state.home.description }} </p>

    <img :src="this.$store.state.imageUrl + this.$store.state.home.image">

    <div class="container tabs_block_main">
      <div class="row">
        <ul class="nav nav-tabs">
          <li class="active"><a href="/#tab1" data-toggle="tab">Хиты</a></li>
          <li><a href="/#tab2" data-toggle="tab">Новинки</a></li>
          <li><a href="/#tab3" data-toggle="tab">Акции</a></li>
        </ul>
      </div>
    </div>

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
  name: 'Home',
  computed: {
    catalog() {
      let cat = this.$store.getters.getCatalog
      console.log(cat.slice(-2))
      return cat.slice(-2);
    },
    home() {
      let home = this.$store.getters.getHome
      return home
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

.ban_block {
  margin: 20px auto;
  width: 100%;
}

.ban_block > div {
  position: relative;
  overflow: hidden;
  background-color: #990f04;
}

.ban_block a {
  display: block;
  padding: 20px 25px 30px;
  position: relative;
}

.ban_block img {
  display: block;
  margin-top: 3px;
}

.ban_block:hover a {
  text-decoration: none;
}

.nav-tabs {
  text-align: center;
  margin: 40px 30px;
  border: 0px;
}

.nav-tabs li {
  float: none;
  display: inline-block;
  margin: 20px;
}

.nav-tabs li a {
  border-radius: 0px;
  border: 0px;
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  color: gray;
  line-height: 60px;
}

.nav-tabs li a:hover,
.nav-tabs li.active a {
  color: #990f04;
  background-color: transparent;
  border: 0px;
}

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

.p-home {
  width: 80%;
  margin-bottom: 50px;
  /*overflow: hidden;*/
  padding: 5px;
  overflow-y: auto;
  top: 60px;
  text-align: justify;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #3F3F3F;
  /*outline: 1px solid rgba(0, 0, 0, 10% );*/
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
  width: 400px;
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