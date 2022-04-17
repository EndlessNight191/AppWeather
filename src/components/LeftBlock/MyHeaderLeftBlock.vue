<template>
  <div class="HeaderLeft">
    <img :src="require(`@/assets/images/${$store.state.mainArray[0].weather.code}.svg`)" alt="" style="width: 150px; height: 150px">
    <div class="ButtonChangeTemperature">
      <button @click="$store.commit('FarengaitArray')" style="position: absolute; right: 0px; padding: 8px 20px; border-radius: 25px">F</button>
      <button @click="$store.commit('CelsiaArray')" style="position: absolute; left: 0px; padding: 8px 20px; border-radius: 25px">C</button></div>
  </div>
</template>

<script>
export default {
  name: "MyHeaderLeftBlock"
}
</script>

<style scoped>

</style>