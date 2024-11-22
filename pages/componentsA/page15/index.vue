<template>
	<view class="page15-wrap" @click="next">
		<!-- 心湖 旅行伙伴2 -->
		
		<view class="dialogue" >
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: 200px;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					感谢你王小明，因为你的帮助，我才拥有一顿丰盛的晚餐。请继续前进吧！祝你旅途愉快！
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://datastream.affectai.cn/callmaterial/images/page3/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
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
				// 	url: '/pages/componentsA/page16/index'
				// })
				this.$emit('pageEvent', {pageIndex: '16'})
			}
		}
	}
</script>

<style lang="scss">
	.page15-wrap {
		min-height: 100vh;
		// background-image: url(https://datastream.affectai.cn/callmaterial/images/page4/bg.png);
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page18-1022/lieren.png);
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