<template>
	<div class="list">
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">
						北京
					</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">
						北京
					</div>
				</div>
				<div class="button-wrapper">
					<div class="button">
						上海
					</div>
				</div>
				<div class="button-wrapper">
					<div class="button">
						杭州
					</div>
				</div>
				<div class="button-wrapper">
					<div class="button">
						广州
					</div>
				</div>
				<div class="button-wrapper">
					<div class="button">
						香港
					</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				 <div class="item border-bottom">
					  阿拉尔
				 </div>
				 <div class="item border-bottom">
				 		安徽
				 </div>
				 <div class="item border-bottom">
				 		鞍山
				 </div>
			</div>
			<div class="title border-topbottom">B</div>
			<div class="item-list">
				 <div class="item border-bottom">
					  北京
				 </div>
				 <div class="item border-bottom">
				 		北戴河
				 </div>
				 <div class="item border-bottom">
				 		北平
				 </div>
				 <div class="item border-bottom">
				 					  北京
				 </div>
				 <div class="item border-bottom">
				 		北戴河
				 </div>
				 <div class="item border-bottom">
				 		北平
				 </div>
				 <div class="item border-bottom">
				 					  北京
				 </div>
				 <div class="item border-bottom">
				 		北戴河
				 </div>
				 <div class="item border-bottom">
				 		北平
				 </div>
			</div>
			<div class="title border-topbottom">C</div>
			<div class="item-list">
				 <div class="item border-bottom">
					  城
				 </div>
				 <div class="item border-bottom">
				 		北戴河
				 </div>
				 <div class="item border-bottom">
				 		北平
				 </div>
				  <div class="item border-bottom">
				 					  城
				 </div>
				 <div class="item border-bottom">
				 		北戴河
				 </div>
				 <div class="item border-bottom">
				 		北平
				 </div>
				  <div class="item border-bottom">
				 					  城
				 </div>
				 <div class="item border-bottom">
				 		北戴河
				 </div>
				 <div class="item border-bottom">
				 		北平
				 </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CityList'

	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl';
   .list{
		 position: absolute;
      left: 0;
			top: 0.88rem;
			right: 0;
			bottom: 0;
			overflow: hidden;
		 font-size: .3rem;
	 }
	.border-topbottom {
		&:before {
			border-color: #777;
		}
		&:after {
			border-color: #ccc;
		}
	}

	.title {
		line-height: .4rem;
		background: #EEEEEE;
		padding-left: .2rem;
	}

	.button-list {
		padding: .1rem .6rem .1rem .1rem;
		overflow: hidden;
    
		.button-wrapper {
			float: left;
			width: 30%;
			margin-left:.2rem
			.button {
				padding: .1rem;
				margin: .1rem 0;
				text-align: center;
				border: 0.02rem solid #ccc;
				border-radius: .06rem;
			}
		}
	}
	.item-list{
		 .item{
			 line-height: .76rem;
			 color: #666;
			 padding-left: .2rem;
			 
		 }
		 .border-bottom{
			 &:before{
				 border-color: #777;
			 }
		 }
	}
</style>
