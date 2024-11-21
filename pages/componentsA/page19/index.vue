<template>
	<view class="page19-wrap" @click="next">
		<!-- 心湖 旅行伙伴2 -->
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center">
				<view style="width: 114px;">
					<u-image width="114px" height="138px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					我们已经确认好旅行的路线了！在这段旅途中，有不同的旅店，各具风格。请您根据自己的喜好，选择心仪的旅店，我们将为您提供贴心周到的服务，祝您体验愉快！
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://datastream.affectai.cn/callmaterial/images/page3/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
					<!-- <u-image width="15px" height="15px" style="margin: 0 auto;" src="https://datastream.affectai.cn/callmaterial/images/page3/down.png"></u-image> -->
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
				// 	url: '/pages/componentsA/page20/index'
				// })
				this.$emit('pageEvent', {pageIndex: '20'})
			}
		}
	}
</script>

<style lang="scss">
	.page19-wrap {
		min-height: 100vh;
		// background-image: url(https://datastream .affectai.cn/callmaterial/images/page20-1024/img10.png);
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img9.png);
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