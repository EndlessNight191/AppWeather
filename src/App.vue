<template>
  <div style="display: flex; width: 100%; min-height: 100vh; margin: 0 auto;" v-if="$store.state.mainArray.length > 0" :style="stylesDay">
    <MyLeftBlock></MyLeftBlock>
    <MyRightBlock></MyRightBlock>
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
    if(localStorage.getItem('city') && localStorage.getItem('county')){
      this.$store.dispatch('checkout', localStorage.getItem('city'), localStorage.getItem('county'));
    }else{
      this.$store.dispatch('checkout', 'Moscow', 'RU');
    }
  },
  data(){
    return{
      day: {
        background: "linear-gradient(8deg, rgba(240,181,206,1) 0%, rgba(140,107,174,1) 67%)",
      },
      night: {
        background: "linear-gradient(8deg, rgba(72,53,91, 1) 0%, rgba(140,110,171,1) 97%)",
      },
    }
  },
  computed: {
    stylesDay(){
      const hours = new Date().getHours();
      return hours > 5 && hours < 19 ? this.day : this.night;
    },
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

</style>
