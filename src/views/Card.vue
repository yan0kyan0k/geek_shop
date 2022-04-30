<template>
  <LogoSvg></LogoSvg>
  <NavBar></NavBar>
  <h2>Карточка товара</h2>
  <div class="container_card">
        <h1>{{this.$store.state.card.title}}</h1>
<!--        <div>{{this.$store.state.card.id}}</div>-->
    <div class="container_img">
<!--      <fa icon="magnifying-glass" class="glass" />-->
      <img :src="this.$store.state.imageUrl + this.$store.state.card.image" alt="jpg">
    </div>

        <h3>{{this.$store.state.card.price}} руб</h3>
<!--        <p>{{this.$store.state.card.short_description}}</p>-->
        <p>{{this.$store.state.card.description}}</p>
  </div>
</template>

<script>

import NavBar from "@/components/UI/NavBar"
import LogoSvg from "@/components/UI/LogoSvg"
export default {
  name: "Card.vue",
  components: {LogoSvg, NavBar},
  mounted() {
    this.$store.dispatch('loadCard', this.$route.params.id)
  },
}
</script>

<style scoped lang="scss">

.container_card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px auto;
  min-height: 70%;
  width: 80%;
  background-color: white;
  h1 {
    margin: 20px auto;
    color: darkred;
    font-size: 2em;
  }
  .container_img {
    width: 50%;
    height: 50%;
    position: relative;
    transition: 0.6s;

  }
  .container_img:hover {
    height: 70%;
    width: 70%;
    transition: 0.3s;
  }
  img {
    //border: 1px solid darkred;
    height: 100%;
    width: 100%;
    transition: 0.3s;
  }
  h3 {
    margin: 20px auto 0 auto;
    color: #fe633b;
    font-size: 2em;
  }
  p {
    margin: 5px auto;
    padding: 20px;
    color: grey;
    font-size: 1.2em;
    letter-spacing: 0.8px;
    text-align: center;
  }
  p:first-line {
    color: coral;
  }
  p:first-letter {
    color: #fe633b;
    font-size: 60px;
    font-weight: bold;
    font-family: sans-serif;
  }
}

//.container_card:hover {
//  box-shadow: 0 10px 10px grey,0 10px 10px grey;
//  transition: 200ms;
//
//}

</style>