<template>
	<view class="page16-wrap" @click="next">
		<!-- 心湖- 流程图1 -->
		<view class="img1"></view>
		<view class="img2"></view>
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: 200px;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					王小明，我们又向上前进了一步，现在正位于【山腰】，让我们继续往前吧！
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://dfs.affectai.cn/affect-material/images/page7/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
					<!-- <u-image width="15px" height="15px" style="margin: 0 auto;" src="https://dfs.affectai.cn/affect-material/images/page3/down.png"></u-image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['gloAvtorUrl'],
		data() {
			return {
				
			}
		},
		methods: {
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page17/index'
				// })
				this.$emit('pageEvent', {pageIndex: '17'})
			}
		}
	}
</script>

<style lang="scss">
	.page16-wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page7/bg.png);
		
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		.img1 {
			width: 220px;
			height: 180px;
			margin: 0 auto;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img1.png);
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
		}
		.img2 {
			width: 220px;
			height: 340px;
			margin: 0 auto;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img2.png);
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
				height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>