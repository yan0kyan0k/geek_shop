<template>
  <div class="card">
        <div class="product-container">
        <img :src="this.$store.state.imageUrl + card.image" alt="jpeg" class="div-product-img" width="200" height="200">
        <h3 class="h3-product">{{ card.title }}</h3>
          <div class="switch"
                  @click="$router.push('/product/' + card.id)"
          >подробнее</div>
        <div v-if="card.quantity" class="div_quantity">
          <input type="number" class="input_num" v-model="quantity" />
        </div>
          <transition name="slide-fade">
            <div v-show="card.show_cart" class="addCheck">
              <div class="delete_addCheck"
                   @click="card.show_cart = false"
                   v-on:click="remove(card.id)"
              ><fa icon="circle-xmark"
                   class="icon_cart_delete" />
              </div>
              <fa icon="cart-arrow-down"
                  class="icon_cart_down"/>
            </div>
          </transition>

        <span class="span-group-price">{{ card.price }} руб</span>
        <slot  class="slot_btn"></slot>
        </div>
  </div>
</template>

<script>
  import Card from '../../views/Card'
  export default {
    name: 'ProductCard',
    components: {Card},
    computed: {
      quantity: {
        get() {
          // console.log(this.card.quantity)

          return this.card.quantity
        },
        set(value) {
          this.$store.dispatch('setQuantity', {id: this.card.id, quantity: value})
        }
      }
    },
    methods: {
      // totalPriceCount (){
      //   for (let i=0;i<this.$store.getters.getCart.length;i++){
      //        let item = this.$store.getters.getCart[i]
      //        let result = Number(item.price) * item.quantity
      //        this.totalPrice.push(result)
      //        console.log( this.totalPrice)
      //   }
      //   function sum (arr) {
      //     let num = 0
      //     for (let i=0;i<arr.length;i++){
      //         num += arr[i]
      //     }
      //     return num
      //   }
      //   this.totalPrice = sum(this.totalPrice)
      // },
      remove(id) {
        return  this.$store.dispatch('removeFromCart', id)
      }
    },
    props: [
      'card'
    ]
  }
</script>


<style scoped>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(40px);
  opacity: 0;
  transition: 0.2s;
}
.slide-fade-leave-to {
  opacity: 0;
  transition: 300ms;
}
.card {
  margin: 20px;
}

.addCheck {
  position: absolute;
  top: 0;
  right: 10px;
  padding: 5px;
  /*border: 1px solid red;*/
  text-align: center;
}
.delete_addCheck {
  position: absolute;
  top: 3px;
  right: 2px;
  /*border: 1px solid red;*/
  width: 30px;
  height: 30px;

}
.icon_cart_delete {
  width: 15px;
  /*border: 1px solid red;*/
  color: red;
  line-height: 10px;
  opacity: 0;
  transition: 0.3s;
}
.icon_cart_down {
  color: green;
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.addCheck:hover .icon_cart_delete{
  width: 20px;
  height: 20px;
    /*border: 1px solid red;*/
    color: red;
    line-height: 10px;
    opacity: 1;
  transition: 0.3s;
}

.product-container {
  transition: 0.3s;
  list-style: none;
  position: relative;
  min-width: 320px;
  height: 400px;
  cursor: pointer;
  background: #FFFEFB;
  /*box-shadow: 0 10px 14px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.5);*/
  border-radius: 15px;
  /*border: 1px solid black;*/
}


.product-container:hover {
  box-shadow: 0 10px 14px rgba(0, 0, 0, 18%), 0 5px 7px rgba(0, 0, 0, 15%);
}

.div-product-img {
  width: 220px;
  height: 180px;
  /*float: left;*/
  position: absolute;
  left: 53px;
  top: 80px;
  /*outline: 1px solid black;*/
}

.h3-product {
  position: absolute;
  width: 95%;
  min-height: 25px;
  right: 7px;
  top: 40px;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3F3F3F;
  padding: 0;
  letter-spacing: 0.01em;
  /*border: 1px solid black;*/
}
.div_quantity {
  position: relative;
  top: 290px;
  left: 100px;
  width: 60px;
  height: 35px;
  border: 1px solid rgba(0,0,0,20%);
  border-radius: 10px;
  z-index: 99;
  /*border-radius: 5px;*/
  /*outline: none;*/

}
.div_quantity .input_num {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  width: 50px;
  height: 25px;
  outline: none;
  border: none;
  border-radius: 10px;
}
.input_num:hover {
  box-shadow:  0 2px 4px rgba(0, 0, 0, 48%);
}


.p-body-product {
  position: absolute;
  width: 300px;
  height: 125px;
  /*overflow: hidden;*/
  padding: 5px;
  overflow-y: auto;
  right: 20px;
  top: 60px;
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 20px;
  color: #3F3F3F;
  /*outline: 1px solid rgba(0, 0, 0, 10% );*/
}
.p-body-product::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(0, 0, 0, 4%);

}
.span-group-price {
  position: absolute;
  width: 200px;
  /*border: 1px solid black;*/
  height: 30px;
  right: 50px;
  padding: 5px;
  bottom: 80px;
  letter-spacing: 0.02em;
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: rgba(0, 0, 0, 70%);
  /*border: 1px solid black;*/
}
.product-container:hover .switch {
  opacity: 1;
  transition: 500ms;
}
.switch {
  position: absolute;
  padding: 4px;
  top: 8px;
  left: 8px;
  /*border: 1px solid black;*/
  width: 60px;
  height: 15px;
  line-height: 10px;
  font-weight: bold;
  font-size: 10px;
  border-radius: 5px;
  background-color: darkred;
  color: white;
  opacity: 0;
  transition: 500ms;
}
.switch:hover {
  background-color: #d8380e;
}
.switch:active {
  background-color: rgba(204,27,40,100%);
}


</style>
