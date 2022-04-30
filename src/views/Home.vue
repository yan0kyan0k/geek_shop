<template>
  <HeaderApp></HeaderApp>
<!--  <h2> {{ this.$store.state.home.title }} </h2>-->

  <div class="page">
    <Slider></Slider>
    <DescriptionHome></DescriptionHome>
    <ToggleBtn @give="go"></ToggleBtn>
    <div class="product-list backgr_img_hit">
      <ProductCard v-for="item of catalog"
                   v-bind:key="item.id"
                   v-bind:card="item">
        <button class="btn"
                @click="item.show_cart = true"
                v-on:click="addToCart(item)"
        >Купить</button>

      </ProductCard>
    </div>
  </div>
<YandexMaps />
<Contacts></Contacts>
  <ClearBooth></ClearBooth>
  <Footer></Footer>
</template>

<script>
import ProductCard from '@/components/UI/ProductCard.vue';
import YandexMaps from "@/components/UI/YandexMaps";
import Slider from "@/components/UI/Slider";
import ToggleBtn from "@/components/UI/ToggleBtn";
import DescriptionHome from "@/components/UI/DescriptionHome";
import HeaderApp from "@/components/HeaderApp";
import Footer from "@/components/FooterApp";
import ClearBooth from "@/components/ClearBooth";
import Contacts from "@/components/UI/Contacts"
export default {

  components: {
    Contacts,
    DescriptionHome,
    ToggleBtn,
    ProductCard,
    YandexMaps,
    Slider,
    HeaderApp,
    Footer,
    ClearBooth

  },
  name: 'Home',
  data: ()=>({
    btn: 6,
    toggleName: 'Хиты'
  }),
  computed: {
    giveBtn() {
      return this.btn
    },
    catalog() {
      if (this.toggleName === 'Хиты') {
        return this.$store.getters.getCatalog.sort((a,b) => Math.random() - 0.5).slice(26 , -this.giveBtn)
      }
      if (this.toggleName === 'Новинки') {
        return this.$store.getters.getCatalog.sort((a,b) => Math.random() - 0.5).slice(20, -this.giveBtn)
      }
      if (this.toggleName === 'Акции') {
        return this.$store.getters.getCatalog.sort((a,b) => Math.random() - 0.5).slice(20, -this.giveBtn)
      }
    }
  },

    methods: {
      addToCart(item) {
        this.$store.dispatch('addToCart', item)
      },

      go(toggleCount) {
        this.toggleName = toggleCount.name
        console.log(toggleCount.count, this.toggleName)
        return this.btn = toggleCount.count

      }
    }
  }

</script>

<style lang="scss">

.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 40px auto;
  padding: 30px 0;
  //background-color: RGBA(255,101,59,10%);
  //background:left 5% / 15% 60% repeat-x url("../assets/xit.jpeg"),

  //border: 1px solid black;
}
.product-list:hover .backgr_img_hit {
  opacity: 0;
}
.backgr_img_hit {
  background:left 25% / 15% 60% no-repeat url("../assets/xit.jpeg");
  opacity: 1;
}
.backgr_img_stock {
  background:left 5% / 15% 60% repeat-x url("../assets/akciya.png");

}
.backgr_img_new {
  background:left 5% / 15% 60% repeat-x url("../assets/novinky.png");

}

.p-home {
  width: 80%;
  margin-bottom: 50px;
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

</style>