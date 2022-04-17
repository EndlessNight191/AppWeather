<template>
  <div class="mainItemSlide">
      <div class="itemSlide">
        <strong>{{Math.floor(item.temp, 2)}} {{$store.state.UnitOfMeasurement.temperature}}</strong>
        <img :src="require(`@/assets/images/${item.weather.code}.svg`)" alt="" style="width: 50px; height: 30%">
        <strong>{{ day.slice(0, 3) }}</strong>
      </div>
    <div class="itemSlide2">
      <strong>{{Math.floor(item.app_max_temp, 2)}} {{$store.state.UnitOfMeasurement.temperature}}</strong>
      <strong>{{item.wind_spd}} {{$store.state.UnitOfMeasurement.distance}}</strong>
      <strong>{{item.vis}} {{$store.state.UnitOfMeasurement.distance.slice(0, 2)}}</strong>
      <strong>{{Math.floor(item.app_min_temp, 2)}} {{$store.state.UnitOfMeasurement.temperature}}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItemSlide",
  props:{
    item: Object
  },
  data(){
    return{
      day: new Date(this.item.datetime).toString(),
    }
  }
}
</script>

<style scoped>

.mainItemSlide{
  margin: 0px 15% 0px 0px;
  position: relative;
}

.itemSlide{
  width: 150%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20% 15%;
  height: 150px;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
  transition: .7s;
}

.itemSlide2{
  width: 150%;
  position: absolute;
  top: 0px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 20% 15%;
  height: 150px;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0;
  transition: .7s;
  transform: rotateY(-180deg);
}

.mainItemSlide:hover .itemSlide{
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 20% 15%;
  width: 150%;
  height: 150px;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0;
  transform: rotateY(180deg);
}

.mainItemSlide:hover .itemSlide2{
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 20% 15%;
  width: 150%;
  height: 150px;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  opacity: 1;
  transform: rotateY(0deg);
}

</style>