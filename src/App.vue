<template>
  <div style="display: flex; width: 100%; min-height: 100vh; margin: 0 auto;" v-if="$store.state.mainArray.length > 0" :style="stylesDay">
    <MyLeftBlock></MyLeftBlock>
    <div v-if="this.with < 1100" style="width: 15%; height: 20%; margin: 1.5% 0px; cursor: pointer; z-index: 10000" @click="show = !show">
      <div class="line" :style="{styleOneLines: show}"></div>
      <div class="line" :style="{styleTwoLines: show}"></div>
      <div class="line" :style="{styleThreeLines: show}"></div>
    </div>
    <transition name="fade">
      <MyRightBlock v-show="show"></MyRightBlock>
    </transition>
  </div>
</template>

<script>

import MyLeftBlock from "@/components/MyLeftBlock";
import MyRightBlock from "@/components/MyRightBlock";

export default {
  name: 'App',
  components: {
    MyLeftBlock,
    MyRightBlock,
  },
  async created() {
    window.addEventListener('resize', () => {
      this.with = window.innerWidth
    });

    if(localStorage.getItem('city') && localStorage.getItem('county')){
      this.$store.dispatch('checkout', localStorage.getItem('city'), localStorage.getItem('county'));
    }else{
      this.$store.dispatch('checkout', 'Moscow', 'RU');
    }
  },
  data(){
    return{
      with: window.innerWidth,
      show: true,
      day: {
        background: "linear-gradient(8deg, rgba(240,181,206,1) 0%, rgba(140,107,174,1) 67%)",
      },
      night: {
        background: "linear-gradient(8deg, rgba(72,53,91, 1) 0%, rgba(140,110,171,1) 97%)",
      },
      styleOneLines: {
        transition: ".5s",
        transform: "scale(0)"
      },
      styleTwoLines: {
        transition: ".5s",
        transform: "rotateZ(45deg) translateX(10px)"
      },
      styleThreeLines: {
        transition: ".5s",
        transform: "rotateZ(135deg) translateX(-10px)"
      },
    }
  },
  computed: {
    stylesDay(){
      const hours = new Date().getHours();
      return hours > 5 && hours < 19 ? this.day : this.night;
    },
  },
  watch: {
    with(value){
      if(value <= 1100){
        this.show = false
      }else{
        this.show = true
      }
    }
  }
}
</script>

<style>
@import "assets/style/main.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.fade-enter-active,
.fade-leave-active {
  transition:  1s ease;
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  transition:  1s ease;
  opacity: 0;
  transform: translateX(350px);
}

.line{
  margin-top: 10px;
  height: 5px;
  width: 50px;
  background-color: white;
  border-radius: 5px;
}

</style>
