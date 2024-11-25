<template>
	<view class="page18-wrap" >
		<!-- <view class="gold">
			<u-image width="35px" height="35px" :src="gloAvtorUrl"></u-image> <text style="margin-left:10px ;"> 1500</text>
		</view> -->
		
		<cc-scroolCard  :dataInfo="dataInfo" :swiperIndex="swiperIndex" @nextPage="nextPage" @change="swiperChangeClick"></cc-scroolCard>
		<!-- <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
			<view class="item item1">
				<view class="triangle"></view>
				<button style="background-color: rgb(101,246,180);margin-top: 50px;font-size:14px;position: absolute;bottom: -80px;left: 0;right: 0;margin-left: auto;margin-right: auto;">通往山涧清泉</button>
			</view>
			<view class="item item2">
				<view class="triangle"></view>
				<button style="background-color: rgb(101,246,180);margin-top: 50px;font-size:14px;position: absolute;bottom: -80px;left: 0;right: 0;margin-left: auto;margin-right: auto;">通往山涧清泉</button>
			</view>
			<view class="item item3">
				<view class="triangle"></view>
				<button style="background-color: rgb(101,246,180);margin-top: 50px;font-size:14px;position: absolute;bottom: -80px;left: 0;right: 0;margin-left: auto;margin-right: auto;">通往山涧清泉</button>
			</view>
		</scroll-view> -->
		
		
	</view>
</template>

<script>
	
	export default {
		props: ['gloAvtorUrl'],
		data() {
			return {
				swiperIndex: 1,
				dataInfo: {
					"priceShop": "",
					"headImgs": [
						{url: "https://dfs.affectai.cn/affect-material/images/page20-1024/img6.png", name: '通往山涧清泉', index: 0},
						{url: "https://dfs.affectai.cn/affect-material/images/page20-1024/img7.png", name: '通往古老松林', index: 1},
						{url: "https://dfs.affectai.cn/affect-material/images/page20-1024/img8.png", name: '通往高山草甸', index: 2},
					],
					// "goodsName": "巴黎香奈儿沙龙香水50ml",
					// "goodsPrice": "¥999.0",
					// "recommendCodeGoods": "https://www.we123.com/d/file/xcx/2017-08-07/deceda498e19d82d71449f46828e864b.jpg",
				}
			}
		},
		methods: {
			next() {},
			scroll() {
				
			},
			swiperChangeClick() {},
			nextPage(item) {
				this.$emit('setRoute', item.name);
				this.$emit('pageEvent', {pageIndex: '19'})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-view_H {
		width: 500px;
		height: 492px;
		overflow-x: scroll;
		display: flex;
	}
	.page18-wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img5.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		background-color: beige;
	}
	.gold{
		height:40px ;
		width: 110px;
		border: 2px solid rgb(218,148,36);
		background-color: rgba(205,211,169,0.8);
		border-radius: 20px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 10px;
	}
	.item1 {
		background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img6.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		background-color: beige;
	}
	.item2 {
		background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img7.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		background-color: beige;
	}
	.item3 {
		background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/img8.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		background-color: beige;
	}
	.item{
		position: relative;
		margin: 0 auto;
		width: 211px;
		height: 410px;
		background-color: #fff;
		border-radius: 20px;
		float: left;
		.text{
			line-height: 1.5;
			padding: 8px;
			.title{
				font-size: 14px;
				font-weight: 700;
				text-align: center;
				margin-bottom: 10px;
			}
			.des{
				font-size: 12px;
			}
		}
		.triangle {
			width: 0;  
			height: 0;  
			border-left: 10px solid transparent; /* 左边框透明 */  
			border-right: 10px solid transparent; /* 右边框透明 */  
			border-top: 40px solid #fff; 
			margin: 0 auto;
			position: absolute;
			bottom: -30px;
			left: 0;right: 0;;
		}
	}
</style>