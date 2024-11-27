<template>
	<view class="page1-wrap" @click="next">
		<!-- 心湖- 流程图1 -->
		<view class="img1"></view>
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: auto;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					那我们继续前进吧，山上还有许多精彩的奇遇。巧遇这位森林猎手，听说他经常会拦住路过的旅人，让大家帮助他捕捉小鸟。
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
				// 	url: '/pages/componentsA/page12/index'
				// })
				this.$emit('pageEvent', {pageIndex: 12})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page1-wrap {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page8/bg.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		
		.img1 {
			width: 282px;
			height: 365px;
			margin: auto;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page8/pep.png');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			position: absolute;
			top: -102px;right: 0;left: 0;bottom: 0;
		}
		.img2 {
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
			position: absolute;
			bottom: 15px;right: 0;left: 0;
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
				height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>