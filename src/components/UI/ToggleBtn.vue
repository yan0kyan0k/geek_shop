<template>
<!--  :href="this.srcToggle + 'cart'"-->
<!--  :href="this.stock[i].src"-->
  <div class="container_tab">


    <ul class="tab_ul_nav">
      <li   v-for="(stockItem, i) in stock" key="i"
            @click="stockItemToggle(stockItem.id)"
            data-toggle="tab"
            :class="[stockItem.tgl === false ?'bold' : 'active']"
      >

          {{ stockItem.name }}

      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "toggleBtn.vue",
  data: () =>({
    stock: [
        {name:'Хиты',count:6,id:0,tgl: true},
        {name:'Новинки',count:10,id:1,tgl: false},
        {name:'Акции',count:9,id:2,tgl: false}
    ]
  }),
  methods: {
    give(count){
      // console.log( count, 'емит')
      return this.$emit('give', count)
    },
    stockItemToggle(id) {
      for (let i=0; i < this.stock.length; i++) {
        let itemTgl = this.stock[i];
        if (itemTgl.id === id) {
                 this.give(itemTgl)
          for (let i=0; i < this.stock.length; i++) {
            let item = this.stock[i]
            item.tgl = false;

          }

          return this.stock[`${id}`].tgl = !this.stock[`${id}`].tgl
        }
      }
    }
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  color: gray;
  text-decoration: none;
  margin: 10px;
}
.active {
  color: #990f04;
  text-decoration: none;
  margin: 10px;
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
}
.container_tab {
  /*border: 1px solid black;*/
  width: 100%;
  background-color: rgba(0, 0, 0, 4%);
  margin: 10px auto;
}
.tab_ul_nav {
  display: flex;
  flex-wrap: wrap;
  /*width: 500px;*/
  justify-content: center;
  margin: 10px auto;
  /*border: 1px solid black;*/
}

.tab_ul_nav li {
  float: none;
  display: inline-block;
  margin: 20px;
}





</style>