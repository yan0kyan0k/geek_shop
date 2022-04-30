<template>
  <h2>Карта проезда в офис</h2>
  <div class="container_map">
    <img class="img_yandex" :src="this.$store.state.imageUrl + this.$store.state.home.image" width="900" height="650" alt="jpeg">
  </div>


</template>

<script>


export default {
  name: "YandexMaps.vue",

}
</script>

<style scoped>
.container_map {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 4%);
  margin: 50px auto;
  /*border: 1px solid black;*/
}
.container_map:hover .img_yandex {
  transform: scale(1);
  transition: 1s;
}


.img_yandex {
transform: scale(0.5);
  transition: 1s;
}
@media (max-width: 660px) {
  .container_map:hover .img_yandex {
    transform: scale(0.5);
    transition: 1s;
  }
  .img_yandex {
    width: 650px;
    height: 600px;

  }
}@media (max-width: 560px) {
  .container_map:hover .img_yandex {
    transform: scale(0.8);
    transition: 1s;
  }
  .img_yandex {
    width: 550px;
    height: 500px;

  }
}@media (max-width: 460px) {
  .container_map:hover .img_yandex {
    transform: scale(0.8);
    transition: 1s;
  }
  .img_yandex {
    width: 450px;
    height: 400px;

  }
}@media (max-width: 360px) {
  .container_map:hover .img_yandex {
    transform: scale(0.8);
    transition: 1s;
  }
  .img_yandex {
    width: 370px;
    height: 300px;

  }
}
</style>