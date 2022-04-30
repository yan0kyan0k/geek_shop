<template>
  <h2>Наши контакты</h2>
<div class="container_contacts">
  <h3 class="number">8-(963)-538-32-91</h3>
  <h3 class="email">Svalka@mail.ru</h3>
</div>
</template>

<script>
export default {
  name: "Contacts.vue"
}
</script>

<style scoped lang="scss">
.container_contacts {
  margin: 40px 0 0 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 4%);
  h3{
    color: grey;
  }
}
</style>