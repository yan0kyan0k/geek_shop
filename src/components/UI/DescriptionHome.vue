<template>
  <div class="description">
    <h1 class="h1_description">Добро пожаловать!</h1>
    <h3 class="h3_description">Наш интернет магазин приветствует вас!</h3>
    <p class="p_description">{{this.$store.state.home.description}}</p>
    <h3 class="h3_description">Наши менеджеры всегда будут рады вам помочь.</h3>
  </div>
</template>

<script>
export default {
  name: "DescriptionHome.vue"
}
</script>

<style scoped lang="scss">
.description {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 400px;
  min-width: 100px;
  color: grey;
.h1_description {
  color: darkred;
}
.h3_description {
  color: coral;
}
.p_description {
  font-family: sans-serif;
  letter-spacing: 0.2px;
  text-align: left;
  font-size: 24px;
  padding: 5px;
  width: 95%;
}
}
</style>