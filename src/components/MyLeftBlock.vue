<template>
  <div class="LeftBlockMain">
    <MyHeaderLeftBlock></MyHeaderLeftBlock>
    <MyMainSectionInformateWeather></MyMainSectionInformateWeather>
    <MySliderDaysWeather></MySliderDaysWeather>
  </div>
</template>

<script>


import MyHeaderLeftBlock from "@/components/LeftBlock/MyHeaderLeftBlock";
import MyMainSectionInformateWeather from "@/components/LeftBlock/MyMainSectionInformateWeather";
import MySliderDaysWeather from "@/components/LeftBlock/MySliderDaysWeather";

export default {
  name: "MyLeftBlock",
  components:{
    MyHeaderLeftBlock,
    MyMainSectionInformateWeather,
    MySliderDaysWeather,
  }
}
</script>

<style scoped>

</style>