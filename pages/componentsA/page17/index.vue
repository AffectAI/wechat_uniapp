<template>
	<view class="page17-wrap" @click="next">
		
		<view style="width: 95%;display: flex;align-items: center;;position: absolute;top: 300px;left: 0;right: 0;margin: auto;justify-content: space-between;height: 180px;">
			<u-image width="105px" height="119px" src="https://dfs.affectai.cn/affect-material/images/page20-1024/img4.png"></u-image>
			<u-image width="105px" height="119px" src="https://dfs.affectai.cn/affect-material/images/page20-1024/img4.png"></u-image>
			<u-image width="105px" height="119px" src="https://dfs.affectai.cn/affect-material/images/page20-1024/img4.png"></u-image>
		</view>
		
		<!-- 心湖 旅行伙伴2 -->
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: 200px;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					王小明，前方出现了分叉路，每条路似乎会遇到不同的风景和事件。让我们仔细看看，抉择一下究竟该选择哪条路吧！
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://dfs.affectai.cn/affect-material/images/page3/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
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
				// 	url: '/pages/componentsA/page18/index'
				// })
				this.$emit('pageEvent', {pageIndex: '18'})
			}
		}
	}
</script>

<style lang="scss">
	.page17-wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img3.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		
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