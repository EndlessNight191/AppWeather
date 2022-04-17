<template>
  <div style="display: flex; justify-content: flex-start; flex-direction: column">
    <div style="font-size: 150px; display: flex; justify-content: flex-start">{{ Math.round($store.state.mainArray[0].temp) }} <div style="font-size: 30px; font-weight: 700;">{{$store.state.UnitOfMeasurement.temperature}}</div></div>
    <div style="font-size: 40px; display: flex; flex-direction: column">
      <strong class="mainSectionLeft">{{ new Date().getDate() }}th {{new Date().toLocaleString('en', { month: 'long' })}} {{ String(new Date().getFullYear()).slice(2,4) }}</strong>
      <strong class="mainSectionLeftLow">{{ this.days[new Date().getDay()] }}  |  {{ new Date().toLocaleTimeString().slice(0,-3) }}</strong>
      <div class="mainSectionLeftSpaceBetween">
        <div class="mainSectionLeftInfoDay"><img class="imgInfoDay" src="@/assets/images/wind-direction-icon.svg" alt=""> Wind {{ $store.state.mainArray[0].wind_spd }} {{$store.state.UnitOfMeasurement.distance}}</div>
        <div class="mainSectionLeftInfoDay1"><img class="imgInfoDay" src="@/assets/images/hum.svg" alt="">Hum {{ Math.round($store.state.mainArray[0].rh) }} %</div>
        <div class="mainSectionLeftInfoDay2"><img class="imgInfoDay" src="@/assets/images/Group656.svg" alt="">Rain {{ Math.round($store.state.mainArray[0].pop) }} %</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMainSectionInformateWeather",
  data(){
    return{
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    }
  }
}
</script>

<style scoped>

</style>