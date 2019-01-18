<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							{{this.$store.state.city}}
						</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper"
					v-for="item in hot"
					:key="item.id"
					@click = "handleCityClick(item.name)"
					>
						<div class="button">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) of list" :key="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list" v-for="i of item" :key="i.id">
					<div class="item border-bottom">
						{{i.name}}
					</div>
				</div>
			</div>

		</div>
	</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'

	export default {
		name: 'CityList',
		props: {
			hot: Array,
			list: Object
		},
		methods: {
		  handleCityClick(city) {
		      console.log('点击'+city);
					this.$store.dispatch("changeCity",city);
		  }
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.wrapper)
		}

	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl';

	.list {
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
		line-height: .54rem;
		background: #EEEEEE;
		padding-left: .2rem;
	}

	.button-list {
		padding: .1rem .6rem .1rem .1rem;
		overflow: hidden;

		.button-wrapper {
			float: left;
			width: 30%;

			margin-left: .2rem;

			.button {
				padding: .1rem;
				margin: .1rem 0;
				text-align: center;
				border: 0.02rem solid #ccc;
				border-radius: .06rem;
			}
		}
	}

	.item-list {
		.item {
			line-height: .76rem;
			color: #666;
			padding-left: .2rem;

		}

		.border-bottom {
			&:before {
				border-color: #777;
			}
		}
	}
</style>
