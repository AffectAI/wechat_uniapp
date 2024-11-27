<template>
	<view class="page21-wrap" @click="next" :style="{backgroundImage: 'url('+bgImg+')'}">{{Page21Params}}
		<!-- 心湖 旅行伙伴2 -->
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: auto;">
				<view style="width: 114px;">
					<u-image  width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					你选择在<text v-if="roomIndex">{{roomList[roomIndex-1].name}}</text>进行休息！听说那里会提供不少别具一格的山顶美食，您可以提前预定您想享用的两道菜肴哦~
				</view>
				<view style="width: 22px;display: flex;background-image: url('https://dfs.affectai.cn/affect-material/images/page3/down.png');background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
					<!-- <u-image width="15px" height="15px" style="margin: 0 auto;" src="https://dfs.affectai.cn/affect-material/images/page3/down.png"></u-image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['gloAvtorUrl', 'Page21Params'],
		data() {
			return {
				roomIndex: null,
				bgImg: null,
				roomList: [
					{index: 1, name: '林间石舍',  url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img16.png'},
					{index: 2, name: '清泉山庄',  url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img14.png'},
					{index: 3, name: '峰顶客栈',  url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img15.png'},
				]
			}
		},
		onLoad(options) {
			console.log(this.gloAvtorUrl)
		},
		mounted() {
			this.$nextTick(() => {
				this.roomIndex = this.Page21Params;
				this.bgImg = this.roomList[this.roomIndex-1] && this.roomList[this.roomIndex-1].url;
			})
		},
		methods: {
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page22/index'
				// })
				this.$emit('pageEvent', {pageIndex: '22'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page21-wrap {
		min-height: 100vh;
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