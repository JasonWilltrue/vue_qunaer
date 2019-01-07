<template>
	  <ul class="list">
			  <li class="item active">A</li>
				<li class="item">B</li>
				<li class="item">C</li>
				<li class="item">D</li>
				<li class="item">E</li>
				<li class="item">F</li>
				<li class="item">G</li>
				<li class="item">H</li>
		</ul>
</template>

<script>
	export default {
		name:'CityAlphabet'
		
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl';
  .list{
		display:flex;
		flex-direction:column;
		justify-content:center;
		position: absolute;
		top:1.58rem;
		right: 0;
		bottom: 0;
		width:0.4rem;
		.item{
			 line-height:.5rem;
			 text-align:center;
			 font-size:0.3rem;
			 &.active{
				  color:#00bcd4;
			 }
		}
	}
	
</style>
