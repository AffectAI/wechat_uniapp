<template>
	<view class="page1-wrap" @click="next">
		<!-- 心湖- 流程图1 -->
		<view class="img11"></view>
		<view class="img21"></view>
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: auto;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					恭喜你初步认识自我。这是奖励给你的【1500元】登山基金，它将在旅途中发挥重要作用，记得善加利用。我们现在位于【山脚1，即将开始向山顶攀登。途中将会遇到各种奇遇和挑战，让我们齐心协力一起登顶吧！
				</view>
				<view style="width: 22px;display: flex;background-image: url('https://dfs.affectai.cn/affect-material/images/page7/down.png');background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
					<!-- <u-image width="15px" height="15px" style="margin: 0 auto;" src="https://dfs.affectai.cn/affect-material/images/page3/down.png"></u-image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: ['gloAvtorUrl'],
		methods: {
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page11/index'
				// })
				this.$emit('pageEvent', {pageIndex: 11})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page1-wrap {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page7/bg.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		overflow-y: scroll;
		
		.img11 {
			width: 220px;
			height: 180px;
			margin: 0 auto;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page7/map.png');
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
		}
		.img21 {
			width: 220px;
			height: 340px;
			margin: 0 auto;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page7/setp.png');
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
		}
		
		.dialogue {
			width: 96%;
			margin: 0 auto;
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
				// height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>