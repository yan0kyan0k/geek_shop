<template>
  <div class="ban_block">
     <div>
       <transition name="slide-fade-2" v-if="!this.imgPath">
          <img v-if="this.toggle"
               src="../../assets/banner_img.jpg"
               alt="img">
       </transition>
       <transition name="slide-fade" v-else>
          <img v-show="this.flagVisibleIImg"
               :src="this.imgPath"
               alt="img">
       </transition>
     </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      toggle: true,
      count: 0,
      countStopSlider: 0,
      imgPath: false,
      flag: true,
      flagVisibleIImg: true
    }
  },
    created() {
      setTimeout(()=>{ this.$nextTick(() => {
      this.slideRun()
    }) }, 1000)
  },
    unmounted() {
    return this.flag = false
  },
    methods: {
     slideRun () {
      this.toggle = false
        if (this.flag === true) {
           let imgSrc = this.$store.state.imageUrl + 'storage/';
           this.imgPath = (imgSrc + JSON.parse(this.$store.state.home.banner)[`${this.count}`]);
            if (this.count !== 3){
                this.zeroCount()
                if (this.countStopSlider === 10) {
                  this.countStopSlider = 0;
                  this.flag = false;
                  this.toggle = true
                  return  this.flagVisibleIImg = true
                }
                  else {
                  this.countStopSlider++
                  setTimeout(() =>  this.slideRun(), 3000);
                }
              }
            else {
                return console.log('ошибка')
         }
      }
    },
    zeroCount () {
      if (this.countStopSlider !== 10) {
        if(this.count === 1) {
          this.count = 0;
          setTimeout(()=>  this.flagVisibleIImg = true, 0)
          return setTimeout(()=>  this.flagVisibleIImg = false, 1800)
        }
        else {
          setTimeout(()=>  this.flagVisibleIImg = true, 0)
          setTimeout(()=>  this.flagVisibleIImg = false, 1800)
          return  ++this.count

        }
      }
    }
  }
}

</script>

<style scoped>

.slide-fade-enter-active {
  transition: all 1s ease ;
  /*transform: scale(0.5);*/

}
.slide-fade-leave-active {
  transition: all 1s ease;
  /*transform: scale(0.5);*/
}

.slide-fade-2-enter-from {
  transition: all 3s ease ;
  transform: scale(0.7);
  opacity: 0;
}
.slide-fade-2-leave-to {
  transition: all 3s ease ;
  transform: scale(0.7);
  opacity: 0;
}.slide-fade-enter-from {
  transition: all 1s ease ;
  transform: scale(0.7);
  opacity: 0;
}
.slide-fade-leave-to {
  transition: all 1s ease ;
  transform: scale(0.7);
  opacity: 0;
}

.ban_block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 100%;
  min-height: 430px;
  background-color: #990f04;
  /*border: 1px solid yellow;*/

}

.ban_block > div {
  height: 400px;
  /*border: 1px solid yellow;*/
  padding: 10px;
}

.ban_block img {
  width: 100%;
  height: 100%;
}
/*@media (max-width: 1000px) {*/
/*  .ban_block {*/
/*    min-height: 470px;*/
/*    transition: 500ms;*/

/*  }*/
/*}*/
@media (max-width: 950px) {
  .ban_block {
    min-height: 440px;
    transition: 500ms;

  }
}
@media (max-width: 900px) {
  .ban_block {
    min-height: 410px;
    transition: 500ms;

  }
}
@media (max-width: 850px) {
  .ban_block {
    min-height: 385px;
    transition: 500ms;
  }
}
@media (max-width: 800px) {
  .ban_block {
    min-height: 360px;
    transition: 500ms;
  }
}
@media (max-width: 750px) {
  .ban_block {
    min-height: 330px;
    transition: 500ms;

  }
}
@media (max-width: 700px) {

  .ban_block {
    min-height: 300px;
    transition: 500ms;

  }
}
@media (max-width: 650px) {
  .ban_block {
    min-height: 270px;
    transition: 500ms;

  }
}
@media (max-width: 600px) {

  .ban_block {
    min-height: 240px;
    transition: 500ms;

  }
}
@media (max-width: 550px) {
  .ban_block {
    min-height: 210px;
    transition: 500ms;

  }
}
@media (max-width: 500px) {

  .ban_block {
    min-height: 180px;
    transition: 500ms;

  }
}
</style>