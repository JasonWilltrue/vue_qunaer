<template>
	<div>
		<city-header></city-header>
		<city-list :list="cities" :hot="hotCities"></city-list>
		<city-alphabet></city-alphabet>
	</div>
</template>



<script>
	import CityHeader from "./components/Header";
	import CityList from "./components/List";
	import CityAlphabet from "./components/Alphabet";
	import axios from "axios";
	export default {
		name: "City",
		components: {
			CityHeader,
			CityList,
			CityAlphabet
		},
		data() {
			return {
				cities: {},
				hotCities:[]
			}
		},
	  methods: {
	  	getCityInfo() {
	  		axios.get("/api/city.json").then(this.getCityInfoSucc);
	  	},
			getCityInfoSucc(res){
				if(res.data.code && res.data.data){
					 const data = res.data.data;
              this.cities = data.cities;
					   this.hotCities =data.hotCities;
						console.log(data.cities);
				}
			}
	  },
		mounted(){
			this.getCityInfo();
		},
	};
</script>



<style lang="stylus" scoped>
	  
</style>
