<template>
  <div style="display: flex; margin-bottom: 20px">
    <div style="display: flex; justify-content: flex-start; width: 80%; overflow: hidden">
      <div :style="transformMain" class="Self">
        <my-item-slide  v-for="item in $store.getters.sliderItems" :item="item" :key="item.id" />
        <div ref="scrollArea" style="height: 100%; width: 1px;"></div>
      </div>
    </div>
    <div style="margin-left: 20px; display: flex; flex-direction: column; justify-content: space-between">
      <div class="arrowBlock" @click="NextSlideList"><img src="@/assets/images/arrowRight.svg" alt="" style="height: 60px; width: 50px"></div>
      <div class="arrowBlock" @click="BackSlide"><img src="@/assets/images/arrowLeft.svg" alt="" style="height: 60px; width: 50px"></div>
    </div>
  </div>
</template>

<script>
import MyItemSlide from "@/components/MyItemSlide";


export default {
  name: "MySliderDaysWeather",
  components: {
    MyItemSlide
  },
  data(){
    return{
      nextSlide: 0,
      endSlide: true,
      transformMain: {
        transform: 'translateX(0%)',
        animationName: 'slideinNext',
      }
    }
  },
  methods: {
    NextSlideList(){
      if(this.endSlide === true){
        this.nextSlide += 50;
        this.transformMain.transform = `translateX(-${this.nextSlide}%)`;
      }else{
        this.nextSlide = 0;
        this.transformMain.transform = `translateX(-${this.nextSlide}%)`;
        this.endSlide = true;
      }
    },
    BackSlide() {
      if (this.nextSlide > 0) {
        this.nextSlide -= 50;
        this.transformMain.transform = `translateX(-${this.nextSlide}%)`;
      }
    },
  },
  mounted() {
    let self = this
    const options = {
      rootMargin: '0px',
      threshold: 0.1
    }
    const callback = function(entries) {
      if(entries[0].isIntersecting){
        // console.log(observer)
        self.endSlide = false
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.scrollArea);
  }
}
</script>

<style scoped>

.arrowBlock{
  height: 45%;
  padding: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  transition: .8s;
}

.arrowBlock:hover{
  background-color: rgba(255, 255, 255, 0.3);
  height: 45%;
  padding: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  transition: .8s;
}

.Self{
  display: flex;
  transition: .5s;
  width: 100%;
}

</style>