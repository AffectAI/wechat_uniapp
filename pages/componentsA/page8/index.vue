<template>
	<view class="page1-wrap">
		<!-- 心湖倒影 -->
		<view style="color: #434343;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">心镜内观自我</view>

		<view class="wrap2">
			<view style="color: #434343;font-size: 16px;font-weight: 500;margin-bottom: 77px;">经过初步了解，您可能是一位健谈，善于交际的人，喜欢和他人在一起，同时也更喜欢规律的生活，和熟悉的环境。</view>
			
			<view style="color: #4DA9CC;font-size: 16px;font-weight: 500;">
				相信您已经对自己的心理状态有了初步的认识，探索内心中最真实的状态，会随着旅途一步步深入，让我们继续出发吧！
			</view>
			
			<view style="text-align: right;">
				<u-image src="https://dfs.affectai.cn/affect-material/images/page6/icon1.png" style="float: right;" width="125px" height="125px"></u-image>
			</view>
		</view>
		<view class="submit1" @click="next">继续出发</view>
	</view>
</template>

<script>
	export default {
		props: ['gloAvtorUrl'],
		data() {
			return {
				list1: [
					{name: '很不同意', value: '0'},
					{name: '很同意', value: '1'},
					{name: '中立', value: '2'},
					{name: '同意', value: '3'},
					{name: '很同意', value: '4'},
				]
			}
		},
		methods: {
			radioGroupChange() {},
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page9/index'
				// })
				this.$emit('pageEvent', {pageIndex: 9})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page1-wrap {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page5/bg.png') !important;
		background-position: center !important;
		background-size: 100% 100% !important;
		background-repeat: no-repeat;
		position: relative;
		overflow-y: scroll;
		
		.wrap2 {
			width: 338px;
			height: 295px;
			border-radius: 10px;
			margin: auto;
			position: absolute;
			top: -50px;right: 0;left: 0;bottom: 0;
			background-color: rgba(255,255,255,0.6);
			box-sizing: border-box;
			padding: 35px 21px;
		}
	
		.submit1 {
			width: 110px;
			height: 43px;
			line-height: 43px;
			text-align: center;
			border-radius: 5px;
			background-color: #6fcbeb;
			color: #000;
			font-size: 14px;
			font-weight: 400;
			margin: 20px auto 50px auto;
			// box-shadow: -1px 2px 5px 0px rgb(179, 179 ,179);
			position: absolute;
			bottom: 20px;
			left: 0;right: 0;

		}
		
		.dialogue {
			width: 96%;
			margin: 0 auto;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 5px;
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
				height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>