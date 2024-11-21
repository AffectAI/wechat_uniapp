<template>
	<view class="page31-wrap" >
		<!-- 心湖- 流程图1 -->
		<!-- <view class="imgs img1" ></view>
		<view class="imgs img2" ></view>
		<view class="imgs img3" ></view>
		<view class="imgs img5" ></view>
		<view class="imgs img4" ></view -->

		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center">
				<view style="width: 114px;">
					<u-image width="114px" height="138px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					<view @click="next32">
						<typewriter
							v-if="index == 1"
							text="PYP.听到您的快乐分享，我也为您而感到开心！恭喜您在心灵之旅中，看见自已、洞察内心，成功通过了各种考验，成为一名勇敢的旅人！"
							:speed="80"
						></typewriter>
					</view>
					
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://datastream.affectai.cn/callmaterial/images/page3/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
					<!-- <u-image width="15px" height="15px" style="margin: 0 auto;" src="https://datastream.affectai.cn/callmaterial/images/page3/down.png"></u-image> -->
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
			
			next32() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/32/index'
				// })
				this.$emit('pageEvent', {pageIndex: '34'})
			}
		}
	}
</script>

<style lang="scss">
	.page31-wrap {
		min-height: 100vh;
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page22/img4.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		.imgs {
			background-position: initial;
			background-size: 100%;
			background-repeat: no-repeat;
			position: absolute;
		}
		.img1 {
			width: 180px;
			height: 85px;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page25/page25/img1.png);
			// background-image: url(https://datastream.affectai.cn/callmaterial/images/flight/img53.png);
			
			position: absolute;
			top: 20px;
			left: 10px;
		}
		.img2 {
			width: 180px;
			height: 85px;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page25/page25/img2.png);
			position: absolute;
			top: 20px;
			right: 10px;
		}
		.img3 {
			width: 180px;
			height: 85px;
			top: 250px;
			left: 10px;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page25/page25/img3.png);

		}
		.img4 {
			width: 180px;
			height: 125px;
			margin: 0 10px;
			top: 227px;
			right: 0;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page25/page25/img4.png);

		}
		.img5 {
			width: 180px;
			height: 85px;
			top: 133px;
			left: 83px;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page25/img5.png);
	
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