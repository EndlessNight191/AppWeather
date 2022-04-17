<template>
  <div class="RightBlockMain">
    <div style="width: 80%; margin: 0 auto">
      <MySearchCity></MySearchCity>
      <MyInfoAboutSun></MyInfoAboutSun>
      <MyIndexesDay></MyIndexesDay>
    </div>
  </div>
</template>

<script>
import MySearchCity from "@/components/RigthBlock/MySearchCity";
import MyInfoAboutSun from "@/components/RigthBlock/MyInfoAboutSun";
import MyIndexesDay from "@/components/RigthBlock/MyIndexesDay";

export default {
  name: "MyRigthBlock",
  components:{
    MySearchCity,
    MyInfoAboutSun,
    MyIndexesDay,
  }
}
</script>

<style scoped>

</style>