<template>
  <HeaderApp></HeaderApp>
  <h2>Корзина</h2>
  <transition-group name="transit_1">
      <ProductFromCart
                       v-for="item of cart"
                       v-bind:key="item.id"
                       v-bind:card="item">
      </ProductFromCart>
    </transition-group >
  <div class="page">
    <div class="showOllPrice">
      <span class="span_name" v-if="!this.$store.getters.getCart.length" >{{cartIsEmpty.name}}</span>
        <div class="container_demo_cart" v-else>
            <div class="total_price" v-show="this.$store.getters.getCart.length">
             <h3 class="cart_h3">Итог:</h3>
              <div class="cart_total"><span class="span_cart_description not_bold">Общая цена</span><span class="span_cart_total">{{ convertToNum(totalPrice) }} р</span></div>
              <div class="cart_total"><span class="span_cart_description not_bold">Дисконт</span><span class="span_cart_total">0 р</span></div>
              <div class="cart_total"><span class="span_cart_description not_bold">Доставка</span><span class="span_cart_total">0 р</span></div>
              <div class="cart_total"><span class="span_cart_description">Финальная цена</span><span class="span_cart_total">{{ convertToNum(totalPrice) }} р</span></div>
                  <button type="submit" id="btn_submit">Купить</button>
            </div>

          <input v-show="quantity"
                 type="number"
                 class="input_num"
                 v-model="quantity"
          />
        </div>

    </div>
  </div>
  <ClearBooth></ClearBooth>
  <FooterApp></FooterApp>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import ProductFromCart from "@/components/UI/ProductFromCart";
import ClearBooth from "@/components/ClearBooth";
import FooterApp from "@/components/FooterApp";

export default {
  name: 'Cart',

  components: {FooterApp, ClearBooth, ProductFromCart, HeaderApp},
  data: ()=>({
    totalPrice: [],
    cartIsEmpty: {name: "Корзина пуста - добавьте товар"}

  }),
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    quantity: {
      get() {
        this.totalPriceCount()
      }
    }
  },
  methods: {
    convertToNum(num) {
      return num.toLocaleString().replaceAll(',', ' ')
    },
    remove(id) {
      this.$store.dispatch('removeFromCart', id)
    },
    totalPriceCount(){
      this.totalPrice = []
      for (let i=0;i<this.$store.getters.getCart.length;i++){
        let item = this.$store.getters.getCart[i]
        let result = Number(item.price) * item.quantity
        this.totalPrice.push(result)
      }
      this.itemDelete(this.$store.getters.getCart)
      this.totalPrice = this.sum(this.totalPrice)
    },
    sum(arr) {
      let num = 0
      for (let i=0;i<arr.length;i++){
        num += arr[i]
      }
      return num
    },
    itemDelete (arr) {
      for (let i=0;i<arr.length;i++){
        let item = arr[i]
        if( item.quantity <= 0 || null || undefined ){
          this.remove(item.id)
        }
      }
    }
  }
}
</script>

<style scoped>
.page {
  /*border: 1px solid black;*/

}
.container_demo_cart {
  min-height: 100%;
  width: 80%;
  /*border: 1px solid green;*/
}
.showOllPrice {
  position: relative;
  min-width: 100%;
  /*border: 1px solid red;*/
  min-height: 200px;
}
.showOllPrice > .span_name {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  margin: auto;
  color: grey;
  font-weight: bold;
  font-size: 32px;
  /*padding: 100px;*/
  /*border: 1px solid black;*/
}
.total_price {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  /*border: 1px solid black;*/
  /*border-radius: 10px;*/
  height: 400px;
  min-width: 80%;
  padding: 10px;
  /*box-shadow: 0 2px 4px grey;*/
  /*border-top: 1px solid grey;*/
  border-bottom: 1px solid grey;
}
#btn_submit {
  min-width: 170px;
  height: 30px;
  background-color: rgba(0,0,0,20%);
  border: none;
  outline: none;
  border-radius: 15px;
}
#btn_submit:hover {
  color: white;
  background-color: rgba(0,0,0,60%);

}
.cart_h3 {
  width: 100%;
  text-align: left;
  padding-left: 10px;
  color: black;
}

.cart_total {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  /*border: 1px solid black;*/
  width: 100%;
  height: 70px;
  line-height: 70px;
}
.span_cart_total {
  width: 300px;
  /*border: 1px solid black;*/
  text-align: right;
  margin: 0;
  padding: 5px;
  color: black;

}
.span_cart_description {
  width: 300px;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
  /*border: 1px solid black;*/
  text-align: left;
  margin: 0;
  color: black;
  padding: 5px;
}
.not_bold {
  font-weight: normal;
  color: grey;

}

.transit_1-item {
  display: inline-block;
  transition: 1s;

}
.transit_1-enter-active,
.transit_1-leave-active {
  transition: all 1s ease;
  /*margin: 0 0 50px 0;*/

}
.transit_1-enter-from,
.transit_1-leave-to {
  opacity: 0;
  margin-bottom: -235px;

  /*transform: translateX(1000px) scale(0.1);*/
  transition: 0.6s;
}
@media (max-width: 856px) {

}
@media (max-width: 670px) {

}
@media (max-width: 400px) {
  .container_demo_cart {
    width: 95%;
    /*border: 1px solid green;*/
  }
  .showOllPrice {
    min-width: 95%;
    /*border: 1px solid red;*/

  }
  .total_price {
    height: 100%;
    border-bottom: 1px solid grey;
  }
  .showOllPrice > .span_name {
    font-size: 24px;
    /*border: 1px solid black;*/
  }
  .cart_h3 {
    text-align: center;
    padding-left: 0;
  }
  .cart_total {
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid black;
    width: 100%;
    height: 150px;
  }
  .span_cart_description {
    width: 330px;
    font-weight: bold;
    /*border: 1px solid black;*/
    text-align: center;
    color: black;
  }
  .span_cart_total {
    width: 330px;
    /*border: 1px solid black;*/
    text-align: center;
  }
  #btn_submit {
    /*border: 1px solid black;*/
    padding: 10px;
    line-height: 10px;
    margin-top: 20px;
    margin-bottom: 15px;
    border: none;
    outline: none;
  }
}
</style>