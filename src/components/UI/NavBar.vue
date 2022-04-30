<template>
  <nav class="header-nav">
    <router-link class="router-link" to="/" data-tooltip="Главная"
    ><fa icon="shop" class="icon-header-nav"  />
    </router-link>
    <router-link  class="router-link" to="/Catalog" data-tooltip="Каталог"
    ><fa icon="align-justify" class="icon-header-nav" />
    </router-link>
    <router-link class="router-link" to="/cart" data-tooltip="Корзина"
    ><span v-if="this.$store.getters.getCartCount !== 0" class="oll_quantity_show">{{this.$store.getters.getCartCount}}</span><fa icon="cart-shopping" class="icon-header-nav" />
    </router-link>
    <router-link class="router-link" to="/form" data-tooltip="Форма"
    ><fa icon="address-card" class="icon-header-nav" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar.vue",
  props: ['card'],
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
.oll_quantity_show {
  position: relative;
  padding: 4px;
  top: -1px;
  left: 2px;
  font-size: 0.5em;
  border-radius: 10px;
  color: white;
  z-index: 909;
}
.header-nav {
  margin: 20px auto 0 auto;
  width: 100%;
  min-height: 80px;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: space-around;
  //border: 1px solid black;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  padding: 5px;
  top: -35px;
  left: -20px;
  width: 70px;
  color: darkred;
  height: 20px;
  font-size: 1.1em;
  //opacity: 0;
  transition: 0.2s;
  //border: 1px solid black;
}

.router-link:hover[data-tooltip]::after {

  color: #d8380e;
  transform: scale(1.2);
  //opacity: 1;
}
.router-link {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  margin-top: 20px;
  color: darkred;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  height: 30px;
  width: 30px;
  //border: 1px solid black;
  padding: 5px;
  border-radius: 4px 4px;
  .icon-header-nav {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    line-height: 20px;
    padding: 0;
    border: none;
  }

}

.router-link:hover .icon-header-nav {
  color: #D8380E;
  //color: #fc816c;
  border: none;

}
@media (max-width: 400px) {

  .header-nav {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0;
    transition: 100ms;
    width: 140px;
    height: 200px;
    //border: 1px solid black;
  }
    .router-link {
      margin: 30px 10px 20px 10px;
      //border: 1px solid black;
    }
}
@media (max-width: 360px) {
  .header-nav  {
    order: 2;
  }
}
</style>