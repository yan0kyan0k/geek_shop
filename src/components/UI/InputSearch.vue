<template>
  <input
      type="search"
      name="s"
      maxlength="150"
      class="search"
      spellcheck="false"
      aria-label="Искать товары, новинки и вдохновение"
      aria-placeholder="Искать товары, новинки и вдохновение"
      placeholder="Что вы ищете?"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
  />
</template>

<script>
export default {
  name: "InputSearch.vue"
}
</script>

<style scoped lang="scss">

.search {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #f5f5f5;
  display: block;
  appearance: none;
  width: 16em;
  height: 40px;
  padding: 10px;
  margin: 50px auto 15px auto;
  line-height: 1.5;
  border: 0;
  border-radius: 50em;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: background 0.2s;
  -o-transition: background 0.2s;
  transition: background 0.2s;
}
input[type="search"] {
  color: grey;
}
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
@media (min-width: 1000px) {
  .search {
    margin-right: 10px;
  }

}
@media (max-width: 360px) {
  .search {
    order: 1;
  }
}

</style>