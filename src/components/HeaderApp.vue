<template>
  <header id="header-app">
     <LogoSvg></LogoSvg>
     <NavBar></NavBar>
     <InputSearch></InputSearch>
  </header>
</template>
<script>
import NavBar from "@/components/UI/NavBar"
import LogoSvg from "@/components/UI/LogoSvg"
import InputSearch from "@/components/UI/InputSearch.vue"
export default {
  name: "header-app",
  components: {
    InputSearch,
    LogoSvg,
    NavBar
  }
}

</script>

<style lang="scss">

#header-app {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 10px;
  background: white;
}

@media (max-width: 1000px) {
  .header-app {
    flex-direction: row;
    flex-wrap: wrap;
    //align-items: center;
  }
}
@media (max-width: 980px) {
  #header-app {
    min-height: 230px;
    align-items: flex-end;
    flex-direction: column;
  }
}
@media (max-width: 856px) {

}
@media (max-width: 670px) {

}
@media (max-width: 500px) {

}
@media (max-width: 400px) {
  #header-app {
    min-height: 350px;
  }
}
@media (max-width: 360px) {
  #header-app {
    min-height: 380px;
    min-width: 360px;
  }
}
</style>
