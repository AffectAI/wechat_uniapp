<template>
	<view class="page29-wrap" >
		<!-- 心湖- 流程图1 -->
		<view class="img1" v-if="index == 2"></view>
		<view class="img2" v-if="index == 2">
			<view style="display: flex;width: 220px;margin: 0 auto;">
				<u-image width="100px" height="45px" border-radius="5px" style="width: 100px;height: 45px;margin-right: 10px;border-radius: 5px" src="https://dfs.affectai.cn/affect-material/images/page22/img6.png"></u-image>
				<u-image @click="next3" width="100px" height="45px" border-radius="5px" style="width: 100px;height: 45px;margin-left: 10px;border-radius: 5px" src="https://dfs.affectai.cn/affect-material/images/page22/img7.png"></u-image>
			</view>
		</view>
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: 200px;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					<view @click="nextDia">
						<typewriter
							v-if="index == 1"
							text="在向山顶攀登的过程中，内心的力量比肌肉的力量更加重要。即使路途艰辛，也要记得保持心灵的平静与坚强。看！远处的太阳已经初露光芒，相信自己每一次的努力都是值得的。让我们一起坚持，继续前行吧！"
							:speed="80"
						></typewriter>
					</view>
					
					<typewriter
						v-if="index == 2"
						text="旅行途中让我们放松一下，接下来我们玩一个声控飞鸟游戏吧：小鸟在自由下落，当发出声音，小鸟就会向上飞行，用声音控制小鸟飞行，不要撞到树哦！"
						:speed="80"
					></typewriter>
					
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://dfs.affectai.cn/affect-material/images/page3/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
					<!-- <u-image width="15px" height="15px" style="margin: 0 auto;" src="https://dfs.affectai.cn/affect-material/images/page3/down.png"></u-image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import typewriter from "@/pages/componentsA/jp-typewriter/index.vue"
	export default {
		components: {
			typewriter
		},
		data() {
			return {
				index: 1
			}
		},
		props: ['gloAvtorUrl'],
		methods: {
			nextDia() {
				this.index = 2
			},
			next3() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page30/index'
				// })
				this.$emit('pageEvent', {pageIndex: '30'})
				// this.$emit('pageEvent', {pageIndex: '35'})
			}
		}
	}
</script>

<style lang="scss">
	.page29-wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page22/img4.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		.img1 {
			width: 98%;
			height: 220px;
			margin: 0 auto;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page22/img5.png);
			// background-image: url(https://dfs.affectai.cn/affect-material/images/flight/img53.png);
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			
		}
		.img2 {
			width: 250px;
			height: 190px;
			margin: 0 auto;
			display: flex;
			align-items: flex-end;
			// background-image: url(https://dfs.affectai.cn/affect-material/images/page22/img3.png);
			// background-position: center;
			// background-size: 100%;
			// background-repeat: no-repeat;
		}
		
		.dialogue {
			position: absolute;
			bottom: 10px;
			left: 0;right: 0;
			width: 96%;
			margin: auto;
			// padding-bottom: 20px;
			
			.top {
				width: 110px;
				height: 36px;
				line-height: 36px;
				background-color: #C8F0FA;
				color: #434343;
				font-size: 18px;
				text-align: center;
				border-top-right-radius: 8px;
				border-top-left-radius: 8px;
			}
			.center {
				display: flex;background-color: #f1f1f4;
				border-top-right-radius: 10px;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				height: 202px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>