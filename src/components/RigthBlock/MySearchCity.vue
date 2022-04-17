<template>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; position: relative">
    <div style="display: flex; justify-content: space-between; align-items: center">
      <img src="@/assets/images/Vector.svg" />
      <div style="color: white">{{this.$store.state.city}}, {{this.$store.state.county}}</div>
    </div>
    <div class="container">
      <input type="text" placeholder="Search.." v-model="city">
      <button class="search"></button>
    </div>
    <div class="searchCity" v-if="city.length > 0">
      <div
          v-for="item in arrayCitySearch"
          :key="item.id"
          class="searchCityItem"
          @click="ChoiceCity(item)"
      >
        {{item.english}}, {{item.country}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MySearchCity",
  data(){
    return{
      city: '',
      arrayCitySearch: [],
    }
  },
  methods:{
    ChoiceCity(item){
      this.$store.dispatch('checkout', item.english, item.county);
      this.city = ''
      localStorage.setItem('city', item.english);
      localStorage.setItem('county', item.county);
    }
  },
  watch:{
     city(oldValue, newValue){
       axios.request(`http://htmlweb.ru/geo/api.php?json&city_name=${newValue}&api_key=56c2442597a5dfc8a2e1334215a75a48`)
          .then((response) => {
            this.arrayCitySearch = response.data
            delete this.arrayCitySearch.limit;
            delete this.arrayCitySearch.balans;

            if(this.arrayCitySearch.error){
              alert('Бесплатных запросов в API на сегодня больше не осталось:(')
            }
          })

       if(newValue === ''){
         this.arrayCitySearch.length = 0
       }
    }
  },
}
</script>

<style scoped>

/*.search{
  background: rgba(255, 255, 255, .2);
  border: none;
  padding: 15px 15px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: .5s;
}

.search:hover{
  background: rgba(0, 0, 0, .2);
  border: none;
  padding: 15px 15px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}*/

.container {
  position: absolute;
  top: 0;
  left: 40%;
  right: 0;
  bottom: 0;
  width: 70%;
}

.container .search {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 10%;
  left: 10%;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, .2);
  border-radius: 50%;
  transition: all 1s;
  z-index: 4;
  /* box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4); */
}

.container .search:hover {
  cursor: pointer;
}

.container .search::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 10px;
  right: 8px;
  bottom: -5px;
  left: 22px;
  width: 12px;
  height: 2px;
  background: white;
  transform: rotate(45deg);
  /* transition: all .5s ease; */
}

.container .search::after {
  content: "";
  position: absolute;
  margin: auto;
  top: -5px;
  right: 0;
  bottom: 0;
  left: -5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
  /* transition: all .5s; */
  /* transition: all .5s ease-in-out; */
}

.container input {
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  color: #111;
  /* text-shadow: 0 0 10px crimson; */
  padding: 0 80px 0 20px;
  border-radius: 30px;
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
}

.container input:hover {
  cursor: pointer;
}

.container input:focus {
  width: 70%;
  opacity: 1;
  cursor: text;
}

.container input:focus~.search {
  right: -240px;
  background: transparent;
  z-index: 6;
}

.container input:focus~.search::before {
  top: 28px;
  left: 15px;
  width: 25px;
  height: 2px;
  bottom: 25px;
}

.container input:focus~.search::after {
  top: 29px;
  left: -8px;
  /* width: -25px; */
  width: 25px;
  right: -15px;
  height: 2px;
  border: none;
  bottom: 25px;
  /* margin: -25px 0px 0px 20px; */
  background: white;
  border-radius: 0%;
  transform: rotate(-45deg);
}

.container input::placeholder {
  color: black;
  opacity: 0.5;
  font-weight: bolder;
}

.searchCity{
  position: absolute;
  left: 40%;
  width: 65%;
  background-color: rgba(255, 255, 255, 0.5);
  top: 42px;
  border-radius: 15px;
  z-index: 11000;
  padding: 5px 3%;
}

.searchCityItem{
  cursor: pointer;
  margin: 5px auto;
  padding: 5px 0px;
  border-bottom: 2px solid white;
  width: 100%;
  transition: .5s;
}

.searchCityItem:hover{
  cursor: pointer;
  margin: 5px auto;
  padding: 5px 0px;
  width: 100%;
  background-color: white;
  border-bottom: 2px solid white;
  border-radius: 10px;
}

</style>