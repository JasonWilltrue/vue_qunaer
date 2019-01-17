<template>
	<div>
		<div class="search">
			<input class="search-input" v-model="keyword"   type="text" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content">
				  <ul >
						  <li :key="item.id" v-for="item of citylist">{{item.name}}</li>
					</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"CitySearch",
		props: {
			list: Object
		},
		data() {
			return {
				keyword:"",
				citylist:[],
				timer:null
			};
		},
		watch:{
			keyword(){
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(()=>{
					const result = []
					for(let i in this.list){
						this.list[i].forEach((value)=>{
							if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword)> -1)
							{
								   result.push(value)
							}
						})
					}
					this.citylist = result;
				},100)
			}

		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search{
	height: .72rem;
	padding: 0 .1rem;
	background: $bgColor;
	.search-input{
		box-sizing: border-box;
		width: 100%;
		height: .62rem;
		padding: 0 .1rem;
		line-height: .62rem;
		text-align: center;
		border-radius: .06rem;
		color: #666;
	}
}
.search-content{
		overflow: hidden;
		z-index: 1;
		background: #ccc;
		position: absolute;
		top:1.98rem;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: .4rem;
	}

</style>
