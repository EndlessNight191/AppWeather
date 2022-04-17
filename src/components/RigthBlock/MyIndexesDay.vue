<template>
  <div class="mainIndexses">
    <div style="display: flex; align-items: center; flex-direction: column; width: 50%; position: relative">
      <strong class="IndexsesDayTextHeader">Visibility range</strong>
      <div class="radius">
        <div class="hour" :style="{transform: `rotate(${percentVisibility + (-50)}deg)`}">
          <div class="hr" ></div>
        </div>
        <div style="position: absolute; bottom: 0%; left: 39%; color: white; font-size: 22px">
          <div>{{Math.floor($store.state.mainArray[0].vis)}}/30</div>
        </div>
      </div>
    </div>
    <div style="display: flex; align-items: center; flex-direction: column; width: 50%; position: relative">
      <strong class="IndexsesDayTextHeader">UV index</strong>
      <div class="radius">
        <div class="hour" :style="{transform: `rotate(${percentIndexes + (-90)}deg)`}">
          <div class="hr"></div>
        </div>
        <div style="position: absolute; bottom: 0%; left: 43%; color: white; font-size: 22px">
          <div>{{Math.floor($store.state.mainArray[0].uv)}}/11</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyIndexesDay",
  data(){
    return{
      percentVisibility: (this.$store.state.mainArray[0].vis/30)*100,
      percentIndexes: (this.$store.state.mainArray[0].uv/11)*100,
    }
  }
}
</script>

<style scoped>

.IndexsesDayTextHeader{
  font-size: 22px;
  color: white;
  margin-bottom: 15px;
}

.hour
{
  position: absolute;
  bottom: 0%;
  left: 50%;
  height: 5.6em;
  z-index: 1000;
  transform-origin: bottom;
}

.hr:before
{
  content: '';
  position: absolute;
  padding: 7px;
  border-radius: 50%;
  background: white;
  z-index: 10;
}

.mainIndexses{
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
}

.radius {
  width: 10em;
  height: 5em;  /* высота в два раза меньше ширины, иначе получится полуовал */
  border-left: 5px solid #CDBBFF;
  border-top: 5px solid #9874FF;
  border-right: 5px solid #713FFD;
  border-bottom: 0px solid;
  border-radius: 50% 50% 0 0/ 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
/*  border-image:  linear-gradient( #0B0E7F , #0B95DD);
  border-width: 6px;
  border-style: solid;
  border-color: transparent;*/
}
</style>