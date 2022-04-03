<template>
  <div class="category-container">
    <a :href='"listproducts/" + data.id ' >
          <img :src="this.$store.state.imageUrl + data.image" alt="jpeg" class="div-category-img" width="332" height="200">

        <h3 class="Category_title">
          {{ data.title }}
        </h3>
    </a>
  </div>

<!--  <div class="catalog_list_item">
     <h3 class="Category_title">{{ data.title }}</h3>
   </div>
   -->
</template>
<script>
export default {
  name: 'CatalogList',
  props: [
    'data'
  ]
}

</script>
<style>
.catalog_list_item {
  display: flex;
  flex-direction: column;
}

.category-container {
  transition: 0.3s;
  list-style: none;
  position: relative;
  /*overflow: hidden;*/
  margin: 10px 5px;
  padding: 5px;
  min-width: 660px;
  height: 300px;
  cursor: pointer;
  background: #FFFEFB;
  /*box-shadow: 0 10px 14px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.5);*/
  border-radius: 15px;
  margin-bottom:20px;
}

.div-category-img {
  min-width: 300px;
  /*float: left;
  position: absolute;
  left: -50px;*/
  overflow: hidden;

  height: 245px;
  /*outline: 1px solid black;*/
}
.Category_title {
  width: 400px;
  height: 50px;
  line-height: 50px;
  margin-top: 10px;
  border: 2px solid darkred;
  border-radius: 20px;
  transition: 0.5s;
}
.Category_title:hover {
background-color: #d8380e;
  color: white;
  transition: 0.5s;
}
.Category_title:active {
  background-color: white;
  color: darkred;
  transition: 0.2s;
}
.category-container img{
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
.category-container:hover img{
  transform: scale(1.1);
}
.category-container a:last-child:hover{
  text-decoration: none;
  opacity: 0.8;
}

</style>