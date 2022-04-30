<template>

  <div class="card_from_cart">
<!--    <button @click="run()">press</button>-->
<!--    <button @click="pushis(this.$store.getters.getCart)">go</button>-->


    <div class="product-container_from_cart">
      <div class="wrapper_img">
        <img :src="this.$store.state.imageUrl + card.image" alt="jpeg" class="product-img" width="120" height="120">
      </div>
      <h3 class="h3-product_from_cart">{{ card.title }}</h3>
      <h5 class="h5-product_description_from_cart">{{ card.short_description }}</h5>
      <div class="switch_from_cart"
           @click="$router.push('/product/' + card.id)"
      >подробнее <fa icon="angles-right" class="icon_cart_angles-right"/></div>

      <div  class="div_quantity_from_cart">
        <button class="btn_quantity icon_plus" v-on:click="addToCart(card)"><fa icon="plus" class="icon_cart_plus"/></button>
        <input type="number"
               class="input_num_cart"
               v-model="quantity"
        />
        <button class="btn_quantity icon_minus" v-on:click="deleteToCartQuantity(card)"><fa icon="minus" class="icon_cart_minus"/></button>
      </div>

<!--      <transition name="slide-fade_cart">-->

<!--      </transition>-->

      <span class="span_group-price_cart">{{convertToNum(Number(card.price) * card.quantity)}} р</span>
      <div class="btn_container">
        <fa icon="heart"
            class="icon_cart_heart"/>
        <button class="slot_btn_cart">Избранное</button>
        <span>|</span>
        <fa icon="trash-can" class="icon_cart_trash"/>
        <button class="slot_btn_cart" v-on:click="remove(card.id)">Удалить</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductFromCart.vue",
  props: ['card'],
  data: ()=>({
  }),
  methods: {
    run() {
      console.log(this.$store.getters.getCartCount)
    },

    deleteToCartQuantity(item) {
      // console.log('delete')
      this.$store.dispatch('deleteToCartQuantity', item)
    },
    addToCart(item) {
      // console.log('add')
      this.$store.dispatch('addToCart', item)
    },
    remove(id) {
      if(this.$store.getters.getCart.length === 1) {
        this.$store.state.ollQuantity = 0
      }
      return  this.$store.dispatch('removeFromCart', id)
    },
    convertToNum(num) {
      return num.toLocaleString().replaceAll(',', ' ')
    }
  },
  computed: {

    quantity: {
      get() {
        // console.log(this.card.quantity, 'get')
        // return this.card.quantity
        // console.log(this.card)

        // this.totalPriceCount()

        // console.log('gogogo')
        // if( this.params.quantity === 0){
        //   console.log('удаление')
        //   return this.remove(this.params.id)
        //   // this.$store.dispatch('removeFromCart', item.id)
        //   // this.remove(item.id)
        //   // this.remove(this.params.id)
        // }
        return this.card.quantity
      },
      set(value) {
       // console.log(value, 'set')
        this.$store.dispatch('setQuantity', {id: this.card.id, quantity: value})

      },
    }
  }
}
</script>

<style scoped>
.card_from_cart {
  /*border: 2px solid red;*/
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 15px auto;
  overflow: hidden;
}

input[type=number] {
  -moz-appearance:textfield;
  position: absolute;
  top: 0;
  left: 50px;
  width: 30px;
  /*border: 1px solid black;*/
  font-size: 16px;
  outline: none;
  border: none;
  padding: 5px 0 5px 5px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.div_quantity_from_cart {
  margin: 0;
  font-size: 14px;
  /*border: 1px solid grey;*/
  border-radius: 10px;
  min-height: 22px;
  position: absolute;
  top: 100px;
  right: 120px;
  width: 140px;
  height: 30px;
}
.icon_cart_plus {
  font-size: 14px;
  color: white;
}
.icon_plus {
  position: absolute;
  top: 0;
  left: 0;
}
.icon_cart_minus {
  font-size: 14px;
  color: white;
}
.icon_minus {
  position: absolute;
  top: 0;
  right: 10px;
}
.btn_quantity {
  width: 30px;
  height: 30px;
  line-height: 15px;
  padding: 5px;
  /*border: 1px solid red;*/
  border: none;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  background-color: grey;
  transition: 0.3s;

}
.btn_quantity:hover {
  background-color: #fe633b;
  transition: 0.3s;

}
.btn_quantity:active {
  background-color: black;
  transition: 0.3s;
}
.product-container_from_cart {
  position: relative;
  overflow: hidden;
  width: 1000px;
  /*min-width: 1200px;*/
  height: 220px;
  display: flex;
  flex-direction: row;
  /*border: 1px solid grey;*/
  background-color: white;
  /*border-top: 1px solid grey;*/
  border-bottom: 1px solid grey;
}
.wrapper_img {
  position: absolute;
  width: 200px;
  height: 100%;
  /*outline: 2px solid lightgray;*/
  border-radius: 10px;
  margin: 5px;
}
.product-img {
  /*padding: 15px;*/
  width: 80%;
  height: 80%;
  /*outline: 2px solid lightgray;*/
  margin-top: 20px;

}
.h3-product_from_cart {
  border-bottom: 1px solid grey;
  position: absolute;
  top: 25px;
  left: 220px;
  min-width: 100px;
  color: grey;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.h5-product_description_from_cart {
  /*border: 2px solid black;*/
  position: absolute;
  padding: 4px;
  bottom: 10px;
  left: 220px;
  width: 390px;
  height: 140px;
  font-size: 14px;
  text-align: left;
  color: darkgrey;
}
.icon_cart_angles-right {
  opacity: 0;
  transition: 0.3s;

}
.switch_from_cart {
  /*border: 2px solid green;*/
  position: absolute;
  color: grey;
  font-size: 12px;
  cursor: pointer;
  top: 5px;
  right: 5px;
  height: 20px;
  padding: 4px;
  transition: 0.3s;

}
.switch_from_cart:hover {
  color: red;
  transition: 0.3s;

}.switch_from_cart:hover .icon_cart_angles-right{
  opacity: 1;
  color: red;
  transition: 0.3s;

}


.span_group-price_cart {
  /*border: 2px solid green;*/
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  top: 40px;
  right: 130px;
  min-width: 120px;
  height: 30px;
  line-height: 30px;
}

.btn_container {
  position: relative;
  top: 150px;
  left: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 50px;
  transition: 0.3s;
  /*border: 1px solid black;*/
}

.icon_cart_trash {
  /*border: 1px solid red;*/
  margin-right: -5px;
  width: 20px;
  height: 20px;
  color: grey;
  transition: 0.3s;
}

.icon_cart_heart {
  /*border: 1px solid red;*/
  margin-right: -5px;
  width: 20px;
  height: 20px;
  color: grey;
  transition: 0.3s;
}
.btn_container:hover .icon_cart_heart {
  color: red;
  transition: 0.3s;

}
.btn_container .slot_btn_cart:hover{
  color: red;
  transition: 0.3s;

}
.btn_container:hover .icon_cart_trash{
  color: red;
  transition: 0.3s;
}
.slot_btn_cart {
  /*border: 2px solid green;*/
  text-align: left;
  border: none;
  width: 100px;
  height: 30px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
}
/*@media (max-width: 856px) {*/

/*}*/
/*@media (max-width: 670px) {*/

/*}*/
/*@media (max-width: 500px) {*/

/*}*/
@media (max-width: 400px) {
  .card_from_cart {
    /*border: 2px solid red;*/
    display: block;
    margin: 15px auto;
    height: 600px;
    width: 360px;
  }
  .product-container_from_cart {
    width: 350px;
    height: 590px;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid grey;
  }
  .switch_from_cart {
    /*border: 2px solid green;*/
    top: -5px;
    right: -15px;
  }
  .h3-product_from_cart {
    border-bottom: none;
    top: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }

  .wrapper_img {
    position: absolute;
    top: 70px;
    left: 80px;
    width: 200px;
    height: 200px;
    /*outline: 2px solid lightgray;*/

  }
  .span_group-price_cart {
    /*border: 2px solid green;*/
    top: 270px;
    left: 125px;
  }
  .div_quantity_from_cart {
    /*border: 1px solid grey;*/
    top: 320px;
    right: 80px;
  }
  .h5-product_description_from_cart {
    /*border: 2px solid black;*/
    position: absolute;
    padding: 4px;
    top: 360px;
    left: 15px;
    width: 320px;
    height: 140px;
    font-size: 14px;
    text-align: center;
    color: darkgrey;
  }
  .btn_container {
    top: 530px;
    left: 20px;
    /*border: 1px solid black;*/
  }
}

</style>