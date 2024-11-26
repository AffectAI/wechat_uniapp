<template>
	<view class="page41-wrap" @click="next">
		<!-- 心湖 旅行伙伴2 -->
		
		<view class="dialogue">
			<view class="top">旅行伙伴</view>
			<view class="center">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 5px">
					现在，我们正位于【心湖】旁，如果您能在湖中看到自己的倒影，这意味着您具备了登山的潜力。让我们先去湖边接受试炼吧！
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
				innerAudioContext: null,
			}
		},
		props: ['gloAvtorUrl'],
		beforeDestroy() {
		},
		mounted() {
			
		},
		methods: {
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page5/index'
				// })
				// TODO
				this.$emit('pageEvent', {pageIndex: 5,})
				// this.$emit('pageEvent', {pageIndex: 6,})
				
			}
		}
	}
</script>

<style lang="scss">
	.page41-wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page4/bg.png);
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
				height: auto;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>