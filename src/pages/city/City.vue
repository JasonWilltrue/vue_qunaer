<template>
	<div>
		<city-header></city-header>
		<!-- <city-search :list="cities"></city-search> -->
		<city-list :list="cities" :hot="hotCities"></city-list>
		<city-alphabet></city-alphabet>
	</div>
</template>

<script>
	import CityHeader from "./components/Header";
	import CityList from "./components/List";
	import CityAlphabet from "./components/Alphabet";
	import CitySearch from "./components/Search";
	import axios from "axios";
	export default {
		name      : "City",
		components: {
			CityHeader,
			CityList,
			CityAlphabet,
			CitySearch
		},
		data() {
			return {
				cities   : {},
				hotCities: []
			}
		},
	  methods: {
	  	getCityInfo() {
	  		axios.get("/api/city.json").then(this.getCityInfoSucc);
	  	},
			getCityInfoSucc(res){
				res = res.data
		 if (res.ret && res.data) {
			 const data = res.data
			 this.cities = data.cities
			 this.hotCities = data.hotCities
		 }
			}
	  },
		mounted(){
			this.getCityInfo();
		},
	};
</script>
/*修改测试*/

<style lang="stylus" scoped>

</style>
