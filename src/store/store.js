import {createStore} from "vuex";
import axios from "axios";


export default createStore({
    state: {
        mainArray: [],
        celsiaArray: [],
        farengaitArray: [],
        city: '',
        county: '',
        UnitOfMeasurement: {
            temperature: '°С',
            distance: 'km/h',
        },
    },
    getters: {
        sliderItems(state){
            return state.mainArray.filter(item => item.id > 1)
        }
    },
    mutations: {
        CelsiaArray(state){
            state.mainArray = state.celsiaArray
            state.UnitOfMeasurement.temperature = '°С'
            state.UnitOfMeasurement.distance = 'km/h'
        },
        FarengaitArray(state){
            state.mainArray = state.farengaitArray
            state.UnitOfMeasurement.temperature = '°F'
            state.UnitOfMeasurement.distance = 'mp/h'
        },
        SetLoadingCelsia(state, array){
            state.celsiaArray = array
            let id = 0
            state.celsiaArray.map( item => {
                item.id = id
                id++
            })
            state.mainArray = state.celsiaArray
        },
        SetLoadingFarengait(state, array){
            state.farengaitArray = array
            let id = 0
            state.farengaitArray.map( item => {
                item.id = id
                id++
            })
        },
        addCity(state, value){
            state.city = value
        },
        addCounty(state, value){
            state.county = value
        },

    },
    actions: {
        async checkout({commit}, city, country) {
            axios.request(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=203a9d3ce16a4061bdbd38c9b252e05f&include=minutely`)
                .then(function (response){
                    /*console.log(response.data);*/
                    commit('addCity', response.data.city_name);
                    commit('addCounty', response.data.country_code);
                    commit('SetLoadingCelsia', response.data.data);
                }).catch(function (error) {
                    console.error(error);
                })

            axios.request(`https://api.weatherbit.io/v2.0/forecast/daily?city=Makeevka&country=UA&key=203a9d3ce16a4061bdbd38c9b252e05f&include=minutely&units=I`)
                .then(function (response){
                    console.log(response.data);
                    commit('SetLoadingFarengait', response.data.data);
                }).catch(function (error) {
                console.error(error);
            })

            /*            const options = {
                method: 'GET',
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
                params: {city: 'Makeevka', country: 'UA'},
                headers: {
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
                    'X-RapidAPI-Key': '1b14b129dfmsh30920480cec430bp164e59jsn162986b88bd0'
                }
            };

            await axios.request(options).then(function (response) {
                console.log(response.data);
                commit('SetLoading', response.data.data)
            }).catch(function (error) {
                console.error(error);
            });*/
        },
    },
    modules: {

    },
})