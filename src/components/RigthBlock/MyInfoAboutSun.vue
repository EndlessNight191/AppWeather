<template>
  <div class="mainAbout">
    <div class="infoSunMain">
      <h2>Sunrise</h2>
      <div class="infoSun">
        <div class="clock">
          <div class="hour">
            <div class="hr" id="hr" :style="{transform: `rotateZ(${this.sunriseHour * 30}deg)`}"></div>
          </div>
          <div class="min">
            <div class="mn" id="mn" :style="{transform: `rotateZ(${this.sunriseMinutes * 6}deg)`}">
            </div>

          </div>
          <div class="sec">
            <div class="sc" id="sc" style="transform: rotateZ(50deg)">
            </div>
          </div>
        </div>
        <div class="timeAbout">{{sunriseHour}}:{{sunriseMinutes}}</div>
      </div>
    </div>
    <div class="infoSunMain2">
      <h2>Moonrise</h2>
      <div class="infoSun2">
        <div class="clock">
          <div class="hour">
            <div class="hr" :style="{transform: `rotateZ(${this.goldenTimeHour * 30}deg)`}"></div>
          </div>
          <div class="min">
            <div class="mn" :style="{transform: `rotateZ(${this.goldenTimeMinutes * 6}deg)`}">
            </div>

          </div>
          <div class="sec">
            <div class="sc" style="transform: rotateZ(50deg)">
            </div>
            </div>
          </div>
        <div class="timeAbout">{{goldenTimeHour}}:{{goldenTimeMinutes}}</div>
      </div>
    </div>
    <div class="infoSunMain">
      <h2>Sunset</h2>
      <div class="infoSun">
        <div class="clock">
          <div class="hour">
            <div class="hr" :style="{transform: `rotateZ(${this.sunsetHour * 30}deg)`}"></div>
          </div>
          <div class="min">
            <div class="mn" :style="{transform: `rotateZ(${this.sunsetMinutes * 6}deg)`}">
            </div>

          </div>
          <div class="sec">
            <div class="sc" style="transform: rotateZ(50deg)">
            </div>
          </div>
        </div>
        <div class="timeAbout">{{sunsetHour}}:{{sunsetMinutes}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInfoAboutSun",
  data(){
    return{
      sunriseHour: new Date(this.$store.state.mainArray[0].sunrise_ts * 1000).getHours(),
      sunriseMinutes: new Date(this.$store.state.mainArray[0].sunrise_ts * 1000).getMinutes(),
      sunsetHour: new Date(this.$store.state.mainArray[0].sunset_ts * 1000).getHours(),
      sunsetMinutes: new Date(this.$store.state.mainArray[0].sunset_ts * 1000).getMinutes(),
      goldenTimeHour: new Date(this.$store.state.mainArray[0].moonrise_ts * 1000).getHours(),
      goldenTimeMinutes: new Date(this.$store.state.mainArray[0].moonrise_ts * 1000).getMinutes(),
    }
  }
}
</script>

<style scoped>

.timeAbout{
  font-size: 28px;
  color: white;
}

.mainAbout{
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50%;
  border-bottom: 1px solid white;
}

h2{
  color: white;
  font-size: 28px;
}

.infoSunMain{
  width: 25%;
  height: 200px;
}

.infoSunMain2{
  width: 30%;
  height: 200px;
  margin-bottom: 220px;
}

.infoSun{
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
}

.infoSun2{
  width: 100%;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.3);
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;
}

.clock
{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.clock .hour,
.clock .min,
.clock .sec
{
  position: absolute;
}
.clock .hour, .hr
{
  height: 60px;
  z-index: 1000;
}
.clock .min, .mn
{
  height: 78px;
}
.clock .sec, .sc
{
  height: 90px;
}
.hr, .mn, .sc
{
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  position: absolute;
  border-radius: 50%;
}
.hr:before
{
  content: '';
  position: absolute;
  width: 5px;
  height: 30px;
  background: #E0E0E0;
  z-index: 10;
  border-radius: 6px 6px 6px 6px;
}
.mn:before
{
  content: '';
  position: absolute;
  width: 4px;
  height: 40px;
  background: #828282;
  z-index: 11;
  border-radius: 6px 6px 6px 6px;
}
.sc:before
{
  content: '';
  position: absolute;
  width: 2px;
  height: 45px;
  background: #885FFC;
  z-index: 12;
  border-radius: 6px 6px 6px 6px;
}
span
{
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  width: 9%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 3s linear infinite;
}
span:after
{
  content:'';
  position: absolute;
  width: 8px;
  height: 25px;
  border-radius: 50%;
  background: purple;
  top: -6px;
  right: -8px;
  box-shadow: 0 0 20px blue;
}
@keyframes animate
{
  0%
  {
    transform: rotate(0deg);
  }
  100%
  {
    transform: rotate(360deg);
  }
}
</style>