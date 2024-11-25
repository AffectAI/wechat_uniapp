<template>
	<view class="page23-wrap" @click="next">
		
	
		<!-- 心湖 旅行伙伴2 -->
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center">
				<view style="width: 114px;">
					<u-image  width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					亲爱的旅人，旅行至此，是否感到有些疲惫?您可以打开心灵旅馆的“解忧日记”，帮助您更了解近期的情绪状态。
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
		data() {
			return {
				roomIndex: null,
				bgImg: null,
				roomList: [
					
				]
			}
		},
		props: ['gloAvtorUrl'],
		onLoad(options) {
			
		},
		methods: {
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page24/index'
				// })
				this.$emit('pageEvent', {pageIndex: '24'})
			}
		}
	}
</script>

<style lang="scss">
	.page23-wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img32.png);
		background-position: inherit;
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