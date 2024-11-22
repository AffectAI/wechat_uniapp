<template>
	<view class="page1-wrap" @click="next"> 
		<!-- 心湖 人脸监测 对话1 -->
		<view class="img1"></view>
		<!-- <view class="img2"></view> -->
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: 200px;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					恭喜您顺利通过“心镜”初步了解了自己的内心。在后续的旅程中，请确保您能够被心镜完整地映照。它将在旅途中积累能量，帮助您慢慢深入自己的内心。现在，让我们带上心镜，开始正式的登山之旅吧！
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
				// 	url: '/pages/componentsA/page10/index'
				// })
				this.$emit('pageEvent', {pageIndex: 10})
			}
		}
	}
</script>

<style lang="scss">
	.page1-wrap {
		min-height: 100vh;
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page6/bg.png);
		background-position: right;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		overflow-y: scroll;
		
		.img1 {
			width: 220px;
			height: 220px;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page6/icon1.png);
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			position: absolute;
			top: 20%;left: 50px;right: 0;margin: 0 auto;bottom: 0;
		}
		.img2 {
			width: 185px;
			height: 220px;
			margin: 0 auto;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page6/pep.png);
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			position: absolute;
			top: 15%;left: 0;right: 120px;margin: auto;
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
				min-height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>