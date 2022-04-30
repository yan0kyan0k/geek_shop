<template>
  <div class="category-container"
       @click="$router.push('/listProducts/' + dataCategory.id)">

<!--    <a :href='"/listProducts/" + dataCategory.id '><h3 class="category_title">-->
<!--      {{ dataCategory.title }}-->
<!--    </h3></a>-->

    <h3 class="category_title">
        {{ dataCategory.title }}
      </h3>
      <img :src="this.$store.state.imageUrl + dataCategory.image"
           alt="jpeg"
           class="div-category-img"
           width="200"
           height="200">
  </div>
</template>
<script>

export default {
  name: 'CatalogList',
  props: [
    'dataCategory'
  ],
  methods: {}
}

</script>
<style lang="scss">
//.catalog_list_item {
//  display: flex;
//  flex-direction: column;
//}

.category-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  transition: 0.3s;
  margin: 30px auto;
  padding: 5px;
  width: 460px;
  height: 300px;
  cursor: pointer;
  background: #FFFEFB;
  //box-shadow: 0 1px 1px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  //outline: 1px solid black;
  color: grey;
}
.category-container:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8), 0 8px 12px rgba(0, 0, 0, 0.5);

  .category_title {

    //border-bottom: 1px solid darkred;

    transition: 0.5s;
  }
}
.div-category-img {
  width: 70%;
  height: 80%;
  //outline: 1px solid black;
}
.category_title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-top: 0;
  //border-bottom: 1px solid darkred;

  transition: 0.5s;
}

//.category_title:active {
//  background-color: white;
//  color: darkred;
//  transition: 0.2s;
//}




</style>